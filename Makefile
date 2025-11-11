.PHONY: help install dev build lint storybook build-storybook publish patch minor major clean

# Cores para output
GREEN  := \033[0;32m
YELLOW := \033[0;33m
BLUE   := \033[0;34m
RESET  := \033[0m

help: ## Mostra esta mensagem de ajuda
	@echo "$(BLUE)Lib-Shared - Comandos disponíveis:$(RESET)\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(RESET) %s\n", $$1, $$2}'

install: ## Instala as dependências do projeto
	@echo "$(YELLOW)📦 Instalando dependências...$(RESET)"
	pnpm install

dev: storybook ## Inicia o Storybook em modo desenvolvimento (alias)

build: ## Compila a biblioteca para produção
	@echo "$(YELLOW)🔨 Compilando biblioteca...$(RESET)"
	pnpm run build:lib

lint: ## Executa o linter
	@echo "$(YELLOW)🔍 Executando linter...$(RESET)"
	pnpm run lint

storybook: ## Inicia o Storybook em modo desenvolvimento
	@echo "$(YELLOW)📚 Iniciando Storybook...$(RESET)"
	pnpm run storybook

build-storybook: ## Compila o Storybook para produção
	@echo "$(YELLOW)📚 Compilando Storybook...$(RESET)"
	pnpm run build-storybook

test: ## Executa os testes
	@echo "$(YELLOW)🧪 Executando testes...$(RESET)"
	pnpm run test

# Comandos de publicação
version: ## Atualiza versão manualmente (uso: make version V=1.2.3)
ifndef V
	@echo "$(YELLOW)❌ Erro: Versão não especificada!$(RESET)"
	@echo "$(BLUE)Uso: make version V=1.2.3$(RESET)"
	@exit 1
endif
	@echo "$(YELLOW)📦 Atualizando versão para $(V)...$(RESET)"
	npm version $(V)
	@echo "$(GREEN)✅ Versão atualizada para $(V)!$(RESET)"

# Comando para atualizar versão e publicar
release: ## Atualiza versão e publica (uso: make release V=1.2.3)
ifndef V
	@echo "$(YELLOW)❌ Erro: Versão não especificada!$(RESET)"
	@echo "$(BLUE)Uso: make release V=1.2.3$(RESET)"
	@exit 1
endif
	@echo "$(BLUE)🚀 Iniciando release $(V)...$(RESET)"
	@$(MAKE) lint
	@$(MAKE) build
	@echo "$(YELLOW)📦 Atualizando versão para $(V)...$(RESET)"
	npm version $(V)
	@echo "$(YELLOW)📤 Publicando no npm...$(RESET)"
	npm publish --access public
	@echo "$(GREEN)✨ Release $(V) concluído!$(RESET)"

clean: ## Remove arquivos de build
	@echo "$(YELLOW)🧹 Limpando arquivos de build...$(RESET)"
	rm -rf dist
	rm -rf storybook-static
	rm -rf node_modules/.vite
	@echo "$(GREEN)✅ Limpeza concluída!$(RESET)"

# Comando para testar CLI localmente
test-cli: ## Testa a CLI localmente com npm link
	@echo "$(YELLOW)🔗 Criando link local...$(RESET)"
	npm link
	@echo "$(GREEN)✅ Link criado! Teste com: lib-shared add button$(RESET)"

unlink-cli: ## Remove o link local da CLI
	@echo "$(YELLOW)🔗 Removendo link local...$(RESET)"
	npm unlink -g @sergiolneves/lib-shared
	@echo "$(GREEN)✅ Link removido!$(RESET)"

# Deploy do Storybook
deploy-storybook: build-storybook ## Compila e faz deploy do Storybook no GitHub Pages
	@echo "$(YELLOW)🚀 Fazendo deploy do Storybook...$(RESET)"
	@if [ ! -d "storybook-static" ]; then \
		echo "$(YELLOW)❌ Erro: Diretório storybook-static não encontrado!$(RESET)"; \
		exit 1; \
	fi
	@echo "$(BLUE)💡 Criando branch gh-pages...$(RESET)"
	git add storybook-static -f
	git commit -m "Deploy Storybook to GitHub Pages" || true
	git subtree push --prefix storybook-static origin gh-pages
	@echo "$(GREEN)✅ Storybook publicado! Acesse: https://sergiolneves.github.io/Lib-Share/$(RESET)"
