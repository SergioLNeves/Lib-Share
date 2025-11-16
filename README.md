# Lib Shared 🎨# Lib Shared 🎨# Lib Shared 🎨



Sistema de componentes React **copy-paste** estilo [shadcn/ui](https://ui.shadcn.com/).



**Não é uma biblioteca npm tradicional.** Cada componente é copiado como **código-fonte** diretamente para o seu projeto, dando controle total sobre o código.Biblioteca de componentes React compartilhados com **Tailwind CSS v4**, **TypeScript** e **Storybook**.Biblioteca de componentes React compartilhados com Tailwind CSS v4, TypeScript e Storybook.



---



## 💡 Filosofia---## 🚀 Início Rápido



Ao invés de instalar componentes como dependências npm, você **copia o código-fonte** para o seu projeto. Isso significa:



- ✅ **Controle total** - O código está no seu projeto, modifique como quiser## 📦 Instalação### Instalação

- ✅ **Sem dependências externas** - Não precisa atualizar versões

- ✅ **Sem bundle bloat** - Apenas o código que você usa

- ✅ **Personalizável** - Adapte os componentes às suas necessidades

- ✅ **TypeScript nativo** - Com todos os tipos incluídos### Via GitHub (Recomendado)```bash



---# Via NPM (após publicar)



## 🚀 Início Rápido```bashnpm install lib-shared



### 1. Configure seu projeto com Tailwind CSS v4# npm



```bashnpm install git+https://github.com/SergioLNeves/Lib-Share.git# Localmente

# Criar projeto (se ainda não tem)

npm create vite@latest meu-projeto -- --template react-tsnpm install /caminho/para/lib-shared

cd meu-projeto

# pnpm

# Instalar Tailwind CSS v4

pnpm add -D tailwindcss @tailwindcss/vitepnpm add git+https://github.com/SergioLNeves/Lib-Share.git# Do GitHub

```

npm install git+https://github.com/SergioLNeves/Lib-Share.git

**vite.config.ts:**

```ts# yarn```

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';yarn add git+https://github.com/SergioLNeves/Lib-Share.git

import tailwindcss from '@tailwindcss/vite';

```### Uso Básico

export default defineConfig({

  plugins: [react(), tailwindcss()],

  resolve: {

    alias: {### Via NPM (Após publicar)```tsx

      "@": "/src",  // Importante para os imports

    },import { Button } from 'lib-shared';

  },

});```bash

```

npm install lib-sharedfunction App() {

**src/index.css:**

```css```  return (

@import "tailwindcss";

```    <Button variant="default" size="lg">



### 2. Adicione componentes### Localmente (Desenvolvimento)      Clique aqui



Use o comando `npx` ou `pnpm dlx` para adicionar componentes:    </Button>



```bash```bash  );

# Adicionar o componente Button

npx lib-shared add button# Instalar diretamente do diretório}



# Ou com pnpmnpm install /caminho/absoluto/para/lib-shared```

pnpm dlx lib-shared add button

```



**O que acontece:**# Ou usar npm link## 📚 Documentação

1. ✅ Baixa o arquivo `src/components/button/Button.tsx`

2. ✅ Baixa `src/lib/utils.ts` (dependência)cd /caminho/para/lib-shared

3. ✅ Instala dependências npm necessárias:

   - `class-variance-authority`pnpm run build:libPara guia completo de exportação e uso, veja [EXPORT_GUIDE.md](./EXPORT_GUIDE.md)

   - `clsx`

   - `tailwind-merge`npm link



### 3. Use no seu código## 🛠️ Desenvolvimento



```tsx# No seu projeto

import { Button } from '@/components/button/Button';

npm link lib-shared### Scripts disponíveis

function App() {

  return (```

    <div className="p-8">

      <Button variant="default" size="lg">```bash

        Clique aqui

      </Button>---# Desenvolvimento

    </div>

  );pnpm run dev              # Dev server

}

```## 🚀 Uso Rápidopnpm run storybook        # Storybook (porta 6006)



---



## 📦 Adicionar Componentes### 1. Importar o componente# Build



### Comando básicopnpm run build:lib        # Build da biblioteca para distribuição



```bash```tsxpnpm run build-storybook  # Build do Storybook

npx lib-shared add <component-name>

```import { Button } from 'lib-shared';



### Exemplos# Qualidade



```bashfunction App() {pnpm run lint             # ESLint

# Adicionar Button

npx lib-shared add button  return (```



# Adicionar utilitários    <Button variant="default" size="lg">

npx lib-shared add utils

```      Clique aqui## 📦 Como Exportar



### O que é copiado?    </Button>



Quando você adiciona o `button`, estes arquivos são criados no seu projeto:  );### Método 1: NPM (Produção)



```}

seu-projeto/

├── src/```bash

│   ├── components/

│   │   └── button/export default App;# Build e publicar

│   │       └── Button.tsx        ⬅️ Código-fonte copiado

│   └── lib/```pnpm run build:lib

│       └── utils.ts               ⬅️ Dependência copiada

└── package.json                   ⬅️ Dependências adicionadasnpm publish

```

### 2. Configurar Tailwind CSS no seu projeto```

**Agora o código é SEU!** Modifique como quiser.



---

A biblioteca usa Tailwind CSS v4. Configure no seu projeto:### Método 2: npm link (Desenvolvimento)

## 🎨 Componentes Disponíveis



### Button

**Instalar Tailwind:**```bash

Componente de botão com múltiplas variantes e tamanhos.

```bash# Neste projeto

**Adicionar:**

```bashpnpm add -D tailwindcss @tailwindcss/vitepnpm run build:lib

npx lib-shared add button

``````npm link



**Uso:**

```tsx

import { Button } from '@/components/button/Button';**vite.config.ts:**# No projeto que vai usar



// Variantes```tsnpm link lib-shared

<Button variant="default">Botão Padrão</Button>

<Button variant="destructive">Deletar</Button>import { defineConfig } from 'vite';```

<Button variant="outline">Outline</Button>

<Button variant="secondary">Secundário</Button>import react from '@vitejs/plugin-react';

<Button variant="ghost">Ghost</Button>

<Button variant="link">Link</Button>import tailwindcss from '@tailwindcss/vite';### Método 3: Instalação Local



// Tamanhos

<Button size="sm">Pequeno</Button>

<Button size="default">Padrão</Button>export default defineConfig({```bash

<Button size="lg">Grande</Button>

<Button size="icon">📧</Button>  plugins: [react(), tailwindcss()],# No projeto que vai usar



// Com ícones});npm install /home/sergiolneves/lib-shared

<Button>

  <svg className="size-4">...</svg>``````

  Adicionar

</Button>



// Desabilitado**Adicionar ao CSS principal:**## 🎨 Componentes

<Button disabled>Desabilitado</Button>

```css

// Customizado (modifique o arquivo!)

<Button className="bg-purple-500 hover:bg-purple-600">@import "tailwindcss";### Button

  Custom

</Button>```

```

Componente de botão com variantes e tamanhos.

**Propriedades:**

---

| Prop | Tipo | Padrão | Descrição |

|------|------|--------|-----------|**Variantes:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`

| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Estilo visual |

| `size` | `'sm' \| 'default' \| 'lg' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | Tamanho |## 🎨 Componentes Disponíveis

| `disabled` | `boolean` | `false` | Desabilita |

| `className` | `string` | - | Classes extras |**Tamanhos:** `sm`, `default`, `lg`, `icon`, `icon-sm`, `icon-lg`



---### Button



## 🔧 Utilitários```tsx



### cn (className utility)Componente de botão versátil com múltiplas variantes e tamanhos.<Button variant="default" size="lg">Botão</Button>



Utilitário para combinar classes CSS com suporte a Tailwind merge.<Button variant="destructive">Deletar</Button>



**Adicionar:**#### Propriedades<Button variant="outline" size="sm">Cancelar</Button>

```bash

npx lib-shared add utils```

```

| Prop | Tipo | Padrão | Descrição |

**Uso:**

```tsx|------|------|--------|-----------|## 🏗️ Estrutura

import { cn } from '@/lib/utils';

| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Estilo visual do botão |

const className = cn(

  'base-class',| `size` | `'sm' \| 'default' \| 'lg' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | Tamanho do botão |```

  condition && 'conditional-class',

  'another-class'| `disabled` | `boolean` | `false` | Desabilita o botão |lib-shared/

);

| `className` | `string` | - | Classes CSS adicionais |├── src/

// Exemplo com Tailwind

<div className={cn(│   ├── index.ts              # Exportações principais

  'p-4 rounded-lg',

  isActive && 'bg-blue-500',#### Exemplos│   ├── lib/                  # Utilitários

  'hover:scale-105'

)} />│   │   └── utils.ts

```

```tsx│   └── stories/              # Componentes

---

import { Button } from 'lib-shared';│       └── button/

## 🛠️ Workflow

│           ├── Button.tsx

### 1. Adicionar componente

// Variantes│           └── Button.stories.ts

```bash

npx lib-shared add button<Button variant="default">Botão Padrão</Button>├── dist/                     # Build (gerado)

```

<Button variant="destructive">Deletar</Button>│   ├── index.d.ts

### 2. Arquivo copiado para `src/components/button/Button.tsx`

<Button variant="outline">Cancelar</Button>│   ├── lib-shared.es.js

### 3. Modificar como quiser

<Button variant="secondary">Secundário</Button>│   └── lib-shared.umd.js

```tsx

// src/components/button/Button.tsx<Button variant="ghost">Ghost</Button>└── package.json

// Você pode editar TUDO!

<Button variant="link">Link</Button>```

// Adicionar nova variante

const buttonVariants = cva(

  "...",

  {// Tamanhos## 🛠️ Stack

    variants: {

      variant: {<Button size="sm">Pequeno</Button>

        default: "...",

        myCustom: "bg-purple-500 text-white",  // ✨ Nova variante<Button size="default">Padrão</Button>- **React 19** + **TypeScript**

      },

    },<Button size="lg">Grande</Button>- **Vite** para build

  }

);- **Tailwind CSS v4** para estilos

```

// Com ícones- **Storybook** para documentação

### 4. Usar no projeto

<Button variant="default">- **CVA** (Class Variance Authority) para variantes

```tsx

<Button variant="myCustom">Meu Botão Custom</Button>  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">- **ESLint** para linting

```

    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />

---

  </svg>## 📄 Licença

## 🆚 Lib Shared vs shadcn/ui

  Adicionar

| Aspecto | Lib Shared | shadcn/ui |

|---------|------------|-----------|</Button>MIT © SergioLNeves

| **Estilo** | Tailwind CSS v4 | Tailwind CSS v3 |

| **Componentes** | Foco em componentes brasileiros | Completo |

| **CLI** | Simples e direto | Completo com config |// Desabilitado

| **Instalação** | `npx lib-shared add` | `npx shadcn-ui@latest add` |<Button disabled>Desabilitado</Button>

| **Customização** | 100% personalizável | 100% personalizável |

| **Objetivo** | Aprendizado e projetos pessoais | Produção enterprise |// Com eventos

<Button onClick={() => console.log('Clicado!')}>

---  Clique aqui

</Button>

## ❓ FAQ

// Customizado

### Por que não é uma biblioteca npm normal?<Button className="shadow-lg hover:scale-105 transition-transform">

  Customizado

Bibliotecas npm tradicionais:</Button>

- ❌ Você depende de atualizações do mantenedor```

- ❌ Difícil customizar profundamente

- ❌ Adiciona dependências que você não controla---



Copy-paste approach:## 🎯 Imports Individuais vs Completos

- ✅ Código-fonte no seu projeto

- ✅ Você controla 100%A biblioteca suporta **imports nomeados** que permitem tree-shaking automático:

- ✅ Modifique sem limitações

- ✅ Sem breaking changes inesperados```tsx

// ✅ Recomendado: Import nomeado (tree-shaking automático)

### Como atualizar componentes?import { Button } from 'lib-shared';

import { Button, cn } from 'lib-shared';

Você não "atualiza" componentes. O código é seu!

// ⚠️ Não recomendado: Import de tudo

Se quiser features novas:import * as LibShared from 'lib-shared';  // Inclui tudo no bundle

1. Veja o componente atualizado no GitHub```

2. Copie as mudanças que você quer

3. Adapte ao seu projeto### Tamanho estimado por componente:



### E se eu quiser modificar um componente?| Import | Tamanho no bundle final |

|--------|-------------------------|

**Vá em frente!** O arquivo está em `src/components/`, modifique como quiser.| `import { Button }` | ~4-5 KB (gzipped) |

| `import { Button, cn }` | ~4-5 KB (gzipped) |

### Posso usar em produção?| `import { Button, Card, Input }` | ~8-10 KB (gzipped) |

| Biblioteca completa | ~14 KB (gzipped) |

Sim! Mas lembre-se:

- Você é responsável pelo código**💡 Dica:** Sempre use imports nomeados individuais para melhor otimização!

- Teste bem antes de usar

- Personalize conforme necessário---



### Como adicionar novos componentes?## 🛠️ Desenvolvimento



Se você quiser contribuir:### Scripts disponíveis

1. Fork o repositório

2. Adicione o componente em `src/components/````bash

3. Adicione no registry em `registry/index.ts`# Desenvolvimento

4. Faça um Pull Requestpnpm run dev              # Dev server (Vite)

pnpm run storybook        # Storybook na porta 6006

---

# Build

## 🚀 Para Desenvolvedorespnpm run build:lib        # Build da biblioteca (cria pasta dist/)

pnpm run build-storybook  # Build do Storybook

### Estrutura do Projeto

# Qualidade

```pnpm run lint             # ESLint

lib-shared/```

├── src/

│   ├── components/### Estrutura do projeto

│   │   └── button/

│   │       ├── Button.tsx           # Componente```

│   │       └── Button.stories.ts    # Storybooklib-shared/

│   └── lib/├── src/

│       └── utils.ts                  # Utilitários│   ├── index.ts                    # 🔥 Exportações principais

├── registry/│   ├── lib/

│   └── index.ts                      # Registry de componentes│   │   └── utils.ts                # Utilitários (cn)

├── cli.js                            # CLI para copiar componentes│   └── stories/

└── package.json│       └── button/

```│           ├── Button.tsx          # Componente Button

│           └── Button.stories.ts   # Storybook

### Adicionar novo componente ao registry├── dist/                           # Build gerado

│   ├── index.d.ts                  # Tipos TypeScript

```ts│   ├── lib-shared.es.js            # ES modules

// registry/index.ts│   └── lib-shared.umd.js           # UMD (compatibilidade)

export const registry = {├── vite.config.lib.ts              # Config de build da lib

  button: { ... },├── tsconfig.lib.json               # TypeScript para lib

  card: {  // Novo componente└── package.json

    name: "card",```

    files: ["components/card/Card.tsx"],

    dependencies: ["clsx", "tailwind-merge"],---

    registryDependencies: ["utils"],

  },## ➕ Como Adicionar Novos Componentes

};

```### 1. Criar o componente



### Testar localmenteCrie uma nova pasta em `src/stories/` ou `src/components/`:



```bash```tsx

# No projeto lib-shared// src/stories/card/Card.tsx

pnpm run storybookimport * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

# Testar CLI em outro projetoimport { cn } from "@/lib/utils";

cd /outro/projeto

node /path/to/lib-shared/cli.js add buttonconst cardVariants = cva(

```  "rounded-lg border bg-white shadow-sm",

  {

### Publicar atualizações    variants: {

      padding: {

```bash        none: "p-0",

# Fazer mudanças nos componentes        sm: "p-4",

# Commit e push        md: "p-6",

git add .        lg: "p-8",

git commit -m "feat: atualiza Button"      },

git push origin master    },

    defaultVariants: {

# Usuários pegam a versão mais recente      padding: "md",

npx lib-shared@latest add button --force    },

```  }

);

---

interface CardProps

## 📄 Licença  extends React.HTMLAttributes<HTMLDivElement>,

    VariantProps<typeof cardVariants> {}

MIT © [SergioLNeves](https://github.com/SergioLNeves)

function Card({ className, padding, ...props }: CardProps) {

---  return (

    <div className={cn(cardVariants({ padding, className }))} {...props} />

## 🤝 Contribuindo  );

}

1. Fork o projeto

2. Crie um componente em `src/components/`export { Card, cardVariants };

3. Adicione ao registry```

4. Abra um Pull Request

### 2. Criar o Storybook (opcional)

---

```tsx

## 📞 Suporte// src/stories/card/Card.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

- [Abrir uma issue](https://github.com/SergioLNeves/Lib-Share/issues)import { Card } from './Card';

- [Ver no Storybook](seu-storybook-url)

const meta = {

---  title: 'Components/Card',

  component: Card,

## 🎯 Roadmap  tags: ['autodocs'],

} satisfies Meta<typeof Card>;

- [ ] Mais componentes (Card, Input, Modal, etc.)

- [ ] Suporte a temasexport default meta;

- [ ] CLI mais robustotype Story = StoryObj<typeof meta>;

- [ ] Documentação interativa

- [ ] Templates de projetosexport const Default: Story = {

  args: {
    children: 'Conteúdo do Card',
  },
};
```

### 3. Exportar no index.ts

```ts
// src/index.ts
export { Button, buttonVariants } from './stories/button/Button';
export { Card, cardVariants } from './stories/card/Card';  // ✨ Novo
export { cn } from './lib/utils';
```

### 4. Fazer o build

```bash
pnpm run build:lib
```

### 5. Usar em outro projeto

```tsx
import { Button, Card } from 'lib-shared';

function App() {
  return (
    <Card padding="lg">
      <h2>Meu Card</h2>
      <Button>Ação</Button>
    </Card>
  );
}
```

---

## 📤 Como Publicar

### Opção 1: NPM Registry (Público)

```bash
# 1. Login no NPM
npm login

# 2. Build da biblioteca
pnpm run build:lib

# 3. Publicar
npm publish
```

### Opção 2: GitHub Packages (Privado/Público)

**package.json:**
```json
{
  "name": "@SergioLNeves/lib-shared",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

```bash
# 1. Autenticar no GitHub
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc

# 2. Build e publicar
pnpm run build:lib
npm publish
```

### Opção 3: Apenas GitHub (Sem NPM)

Basta fazer push no GitHub e instalar via:
```bash
npm install git+https://github.com/SergioLNeves/Lib-Share.git
```

**Para atualizar a biblioteca em outro projeto:**
```bash
npm update lib-shared
# ou
npm install git+https://github.com/SergioLNeves/Lib-Share.git --force
```

---

## 📦 Import Seletivo (Tree-Shaking)

> 📖 **Documentação completa:** [EXPORTS_EXPLAINED.md](./EXPORTS_EXPLAINED.md)

### Como funciona a otimização?

Quando você instala a biblioteca, **apenas a pasta `dist/` é baixada** (não o código-fonte completo). E quando você importa componentes específicos, apenas o código necessário é incluído no seu bundle final.

#### Exemplo prático:

```tsx
// Você importa apenas o Button
import { Button } from 'lib-shared';

// ✅ Apenas o código do Button é incluído no seu bundle
// ❌ Outros componentes futuros (Card, Input, etc.) NÃO são incluídos
```

#### O que é instalado no node_modules:

```
node_modules/lib-shared/
├── dist/
│   ├── lib-shared.es.js      # ~77KB (todos os componentes)
│   ├── lib-shared.umd.js     # ~28KB
│   └── index.d.ts            # Tipos TypeScript
├── package.json
└── README.md

❌ Não inclui: src/, .storybook/, node_modules/ da lib
```

#### Tree-shaking automático:

O Vite/Webpack automaticamente remove código não usado:

```tsx
// Seu projeto importa:
import { Button } from 'lib-shared';

// Bundle final (~5KB) contém apenas:
// - Código do Button
// - Utilitário cn()
// - Dependências necessárias (CVA, clsx, tailwind-merge)

// ✅ Não inclui componentes não usados
```

#### Adicionar mais componentes sem quebrar projetos existentes:

```tsx
// Biblioteca atualizada com novo componente Card
export { Button } from './components/button/Button';
export { Card } from './components/card/Card';  // Novo

// Projetos antigos continuam funcionando:
import { Button } from 'lib-shared';  // ✅ Só pega o Button

// Novos projetos podem usar ambos:
import { Button, Card } from 'lib-shared';  // ✅ Pega ambos
```

---

## �🔧 Utilitários

### cn (className merge)

Utilitário para combinar classes CSS com suporte a Tailwind merge.

```tsx
import { cn } from 'lib-shared';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);

// Exemplo prático
<Button 
  className={cn(
    'hover:scale-105',
    isLoading && 'opacity-50 cursor-not-allowed'
  )}
>
  {isLoading ? 'Carregando...' : 'Enviar'}
</Button>
```

---

## 🏗️ Stack Tecnológica

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilização
- **Storybook** - Documentação de componentes
- **CVA** (Class Variance Authority) - Variantes de componentes
- **ESLint** - Linting

---

## 📋 Checklist antes de publicar

- [ ] Executar `pnpm run build:lib` com sucesso
- [ ] Verificar se `dist/` foi gerado corretamente
- [ ] Testar a biblioteca em um projeto externo
- [ ] Atualizar a versão no `package.json` (seguir [SemVer](https://semver.org/))
- [ ] Atualizar o `README.md` se necessário
- [ ] Fazer commit e push das mudanças
- [ ] Criar uma tag de versão no Git
- [ ] Publicar no NPM ou GitHub Packages

---

## 🔄 Workflow de Desenvolvimento

```bash
# 1. Fazer mudanças nos componentes
# Editar arquivos em src/stories/ ou src/components/

# 2. Testar no Storybook
pnpm run storybook

# 3. Build da biblioteca
pnpm run build:lib

# 4. Testar em outro projeto (se usando npm link)
# As mudanças serão refletidas automaticamente

# 5. Commit e push
git add .
git commit -m "feat: adiciona novo componente X"
git push origin master

# 6. Atualizar no projeto que usa a biblioteca
npm update lib-shared
# ou
npm install git+https://github.com/SergioLNeves/Lib-Share.git --force
```

---

## 📄 Licença

MIT © [SergioLNeves](https://github.com/SergioLNeves)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovoComponente`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona NovoComponente'`)
4. Push para a branch (`git push origin feature/NovoComponente`)
5. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/SergioLNeves/Lib-Share/issues) no GitHub.
