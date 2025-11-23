# Separator

Componente para separar visual ou semanticamente seções de conteúdo.

## Importação

```tsx
import { Separator } from "@/registry/components/atoms/separator";
```

## Uso Básico

```tsx live
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
```

## Orientação Vertical

```tsx live
<div style={{ display: "flex", height: "100px", alignItems: "center", gap: "1rem" }}>
  <span>Início</span>
  <Separator orientation="vertical" />
  <span>Sobre</span>
  <Separator orientation="vertical" />
  <span>Contato</span>
</div>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `orientation` | `'horizontal'` \| `'vertical'` | `'horizontal'` | Orientação do separador |
| `decorative` | `boolean` | `true` | Se true, o separador é apenas visual |
| `className` | `string` | - | Classes CSS adicionais |

Todas as propriedades nativas do elemento também são suportadas.
