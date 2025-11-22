# Input

O componente `Input` é um campo de entrada de texto básico, estilizado para consistência visual e acessibilidade.

## Importação

```tsx
import { Input } from "@/registry/components/atoms/input";
```

## Uso Básico

```tsx
import { Input } from "@/registry/components/atoms/input";

export function ExemploInput() {
  return <Input type="email" placeholder="Email" />;
}
```

## Com Label

Geralmente utilizado em conjunto com um `Label` (se disponível) ou texto descritivo.

```tsx
import { Input } from "@/registry/components/atoms/input";

export function InputComLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}
```

## Desabilitado

```tsx
import { Input } from "@/registry/components/atoms/input";

export function InputDesabilitado() {
  return <Input disabled type="email" placeholder="Email" />;
}
```

## Propriedades (Props)

O componente `Input` aceita todas as propriedades nativas do elemento HTML `<input>`, além de:

| Propriedade | Tipo | Descrição |
|---|---|---|
| `className` | `string` | Adiciona classes CSS personalizadas. |
| `type` | `string` | O tipo de input (text, password, email, etc.). Padrão: `text`. |
