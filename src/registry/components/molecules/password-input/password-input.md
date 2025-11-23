# Password Input

Campo de senha com toggle de visibilidade integrado para melhor experiência do usuário.

## Importação

```tsx
import { PasswordInput } from "@/registry/components/molecules/password-input";
```

## Uso Básico

```tsx live
<PasswordInput placeholder="Digite sua senha" />
```

## Com Label

```tsx live
<div style={{ display: "grid", gap: "0.5rem", maxWidth: "350px" }}>
  <label htmlFor="password">Senha</label>
  <PasswordInput id="password" placeholder="Digite sua senha" />
</div>
```

## Desabilitado

```tsx live
<PasswordInput disabled placeholder="Senha desabilitada" />
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `placeholder` | `string` | - | Texto de placeholder |
| `disabled` | `boolean` | `false` | Desabilita o input |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<input>` também são suportadas (exceto `type`).
