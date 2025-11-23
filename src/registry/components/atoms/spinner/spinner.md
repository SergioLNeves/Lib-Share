# Spinner

Indicador visual de carregamento animado para feedback ao usuário.

## Importação

```tsx
import { Spinner } from "@/registry/components/atoms/spinner";
```

## Uso Básico

```tsx live
<Spinner />
```

## Em Botões

```tsx live
<Button disabled>
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Spinner />
    Carregando...
  </div>
</Button>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento `<div>` também são suportadas.
