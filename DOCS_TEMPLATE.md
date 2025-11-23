# Template para Documentação de Componentes

Este documento define o padrão para criar documentação dos componentes da biblioteca.

## Estrutura Padrão

```markdown
# [Nome do Componente]

[Descrição curta e objetiva do componente em uma linha]

## Importação

\`\`\`tsx
import { ComponentName } from "@/registry/components/atoms/[component-name]";
\`\`\`

## Uso Básico

\`\`\`tsx live
<ComponentName>Exemplo básico</ComponentName>
\`\`\`

## [Seções específicas do componente]

[Variantes, Estrutura, Posições, Tamanhos, etc.]

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `prop1` | `string` | `'default'` | Descrição da propriedade |

[Texto adicional sobre as propriedades se necessário]
```

## Convenções

### Título e Descrição
- **Título**: Nome do componente em PascalCase
- **Descrição**: Uma frase curta e objetiva (máximo 80 caracteres)
- Use voz ativa e linguagem clara
- Sem emojis ou caracteres especiais

### Importação
- Sempre mostre o import path correto
- Use o padrão `@/registry/components/[tipo]/[nome]`
  - Atoms: `@/registry/components/atoms/button`
  - Molecules: `@/registry/components/molecules/password-input`
- Para componentes compostos, mostre todos os subcomponentes necessários
- Exemplo multi-componente:
  ```tsx
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/registry/components/atoms/card";
  ```

### Exemplos de Código

#### Código Live (Interativo)
- **SEMPRE use `tsx live`** para exemplos que devem ser renderizados
- **IMPORTANTE**: Use sintaxe de objetos JSX para estilos inline:
  ```tsx
  // ✅ CORRETO
  <div style={{ display: "flex", gap: "1rem" }}>
  
  // ❌ ERRADO
  <div style="display: flex; gap: 1rem;">
  ```
- Mantenha exemplos simples e focados
- Um exemplo por conceito
- Use fragmentos (`<>...</>`) para múltiplos elementos
- Evite lógica complexa nos exemplos

#### Código Estático (Referência)
```markdown
\`\`\`tsx
// Código que não precisa ser interativo
import { Component } from './somewhere';
\`\`\`
```

### Seções Recomendadas

1. **Importação** (obrigatória)
2. **Uso Básico** (obrigatória, sempre com exemplo live)
3. **Variantes** (se aplicável, com exemplos live e lista descritiva)
4. **Posições/Tamanhos** (se aplicável, com exemplos live)
5. **Estrutura** (para componentes compostos, lista de subcomponentes)
6. **Propriedades** (obrigatória, usar tabela)

### Tabelas de Propriedades

- Use formato Markdown simples
- Colunas obrigatórias: **Propriedade | Tipo | Padrão | Descrição**
- Tipos em código inline: `` `string` ``, `` `boolean` ``
- Union types: `` `'primary'` \| `'secondary'` ``
- Valores padrão em código inline ou `-` se não houver
- Descrições curtas e objetivas (uma linha)
- Para componentes compostos, use subseções (### ComponentName)

### Componentes Compostos

Para componentes com subcomponentes (Card, Avatar, Sheet, etc.):

1. Importe todos na seção de Importação
2. Crie uma seção **Estrutura** explicando cada subcomponente
3. Use subseções na tabela de propriedades

Exemplo:
```markdown
## Estrutura

O Card é composto por subcomponentes que trabalham juntos:

- **Card**: Contêiner principal
- **CardHeader**: Cabeçalho
- **CardTitle**: Título do card
- **CardContent**: Conteúdo principal

## Propriedades

### Card

Aceita as propriedades nativas de `<div>`.

### CardHeader

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `className` | `string` | - | Classes CSS adicionais |
```

### Estilos Inline em Exemplos

Sempre use objetos JavaScript para estilos:

```tsx
// ✅ CORRETO - Objeto JavaScript
<div style={{ width: "350px", display: "grid", gap: "1rem" }}>

// ✅ CORRETO - CamelCase para propriedades CSS
<div style={{ maxWidth: "350px", alignItems: "center" }}>

// ❌ ERRADO - String CSS
<div style="width: 350px; display: grid; gap: 1rem;">
```

### Linguagem

- ✅ Use linguagem direta e objetiva
- ✅ Prefira voz ativa
- ✅ Seja conciso
- ✅ Use termos técnicos quando apropriado
- ❌ Evite floreios desnecessários
- ❌ Não seja verboso demais
- ❌ Não use jargões sem explicação
- ❌ Não use emojis no corpo da documentação

## Exemplos Completos

### Componente Simples (Badge)

```markdown
# Badge

Componente para exibir status, contadores ou categorias de forma compacta e visual.

## Importação

\`\`\`tsx
import { Badge } from "@/registry/components/atoms/badge";
\`\`\`

## Uso Básico

\`\`\`tsx live
<Badge>Novo</Badge>
\`\`\`

## Variantes

\`\`\`tsx live
<>
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
</>
\`\`\`

- **Default**: Estilo padrão neutro
- **Success**: Indica sucesso ou estado positivo
- **Warning**: Alerta ou atenção necessária
- **Error**: Erro ou estado crítico

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'default'` \| `'success'` \| `'warning'` \| `'error'` | `'default'` | Estilo visual do badge |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<span>` também são suportadas.
```

### Componente Composto (Avatar)

```markdown
# Avatar

Componente de imagem com fallback para representar usuários ou entidades.

## Importação

\`\`\`tsx
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/components/atoms/avatar";
\`\`\`

## Uso Básico

\`\`\`tsx live
<Avatar>
  <AvatarImage src="https://github.com/g-villarinho.png" alt="@g-villarinho" />
  <AvatarFallback>GV</AvatarFallback>
</Avatar>
\`\`\`

## Com Fallback

Se a imagem falhar ao carregar, o fallback é exibido:

\`\`\`tsx live
<Avatar>
  <AvatarImage src="https://invalid-url.com/image.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
\`\`\`

## Estrutura

O Avatar é composto por subcomponentes que trabalham juntos:

- **Avatar**: Contêiner principal que gerencia o estado
- **AvatarImage**: Imagem do avatar
- **AvatarFallback**: Conteúdo exibido quando a imagem não carrega

## Propriedades

### Avatar

Aceita as propriedades nativas de `<span>`.

### AvatarImage

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `src` | `string` | - | URL da imagem |
| `alt` | `string` | - | Texto alternativo |

Aceita as propriedades nativas de `<img>`.

### AvatarFallback

Aceita as propriedades nativas de `<span>`.
```

### Componente com Estilos (Separator)

```markdown
# Separator

Componente para separar visual ou semanticamente seções de conteúdo.

## Importação

\`\`\`tsx
import { Separator } from "@/registry/components/atoms/separator";
\`\`\`

## Uso Básico

\`\`\`tsx live
<div style={{ width: "100%", maxWidth: "350px" }}>
  <div>
    <h4>Biblioteca de Componentes</h4>
    <p>Componentes React reutilizáveis</p>
  </div>
  <Separator />
  <div>
    <h4>Documentação</h4>
    <p>Guias e exemplos de uso</p>
  </div>
</div>
\`\`\`

## Orientação Vertical

\`\`\`tsx live
<div style={{ display: "flex", height: "100px", alignItems: "center", gap: "1rem" }}>
  <span>Início</span>
  <Separator orientation="vertical" />
  <span>Sobre</span>
  <Separator orientation="vertical" />
  <span>Contato</span>
</div>
\`\`\`

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `orientation` | `'horizontal'` \| `'vertical'` | `'horizontal'` | Orientação do separador |
| `decorative` | `boolean` | `true` | Se true, o separador é apenas visual |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento também são suportadas.
```

## Componentes Disponíveis no Escopo Live

Os seguintes componentes estão disponíveis para uso em exemplos `tsx live`:

**Atoms:**
- `Button`
- `Badge`
- `Input`
- `Separator`
- `Spinner`
- `Avatar`, `AvatarImage`, `AvatarFallback`
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`
- `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`
- `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetDescription`, `SheetFooter`, `SheetClose`

**Molecules:**
- `PasswordInput`

**Outros:**
- `React` (disponível por padrão)

## Checklist

Antes de submeter uma documentação, verifique:

- [ ] Título e descrição estão claros
- [ ] Importação está correta com path completo
- [ ] Uso básico tem exemplo `live`
- [ ] Todos os estilos inline usam objetos JSX (`style={{ ... }}`)
- [ ] Propriedades CSS estão em camelCase (maxWidth, alignItems)
- [ ] Exemplos são simples e focados
- [ ] Componentes usados estão no escopo do LiveCode
- [ ] Tabela de propriedades está completa
- [ ] Componentes compostos têm seção de Estrutura
- [ ] Markdown está formatado corretamente
- [ ] Sem erros de digitação
- [ ] Componente renderiza corretamente no navegador
- [ ] Sem emojis no corpo da documentação
