# Input

Campo de entrada de texto estilizado para consistência visual e acessibilidade.

## Importação

```tsx
import { Input } from "@/registry/components/atoms/input";
```

## Uso Básico

```tsx live
<Input type="email" placeholder="Email" />
```

## Com Label

```tsx live
<div style={{ display: "grid", gap: "0.5rem", maxWidth: "350px" }}>
  <label htmlFor="email">Email</label>
  <Input type="email" id="email" placeholder="exemplo@email.com" />
</div>
```

## Desabilitado

```tsx live
<Input disabled type="email" placeholder="Email" />
```

## Tipos de Input

```tsx live
<div style={{ display: "grid", gap: "1rem", maxWidth: "350px" }}>
  <Input type="text" placeholder="Texto" />
  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Senha" />
  <Input type="number" placeholder="Número" />
</div>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `type` | `string` | `'text'` | Tipo do input (text, email, password, etc.) |
| `placeholder` | `string` | - | Texto de placeholder |
| `disabled` | `boolean` | `false` | Desabilita o input |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<input>` também são suportadas.
