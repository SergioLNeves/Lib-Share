# Sheet

Painel lateral deslizante para exibir conteúdo adicional ou ações contextuais.

## Importação

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/registry/components/atoms/sheet";
```

## Uso Básico

```tsx live
<Sheet>
  <SheetTrigger asChild>
    <Button>Abrir Menu</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu Lateral</SheetTitle>
      <SheetDescription>
        Navegue pelas opções disponíveis.
      </SheetDescription>
    </SheetHeader>
    <div style={{ padding: "1rem" }}>
      <p>Conteúdo do sheet aqui...</p>
    </div>
  </SheetContent>
</Sheet>
```

## Posições

```tsx live
<div style={{ display: "flex", gap: "1rem" }}>
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="secondary">Direita</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Lateral Direita</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="secondary">Esquerda</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Lateral Esquerda</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>
```

## Com Footer

```tsx live
<Sheet>
  <SheetTrigger asChild>
    <Button>Configurações</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Configurações</SheetTitle>
      <SheetDescription>
        Personalize suas preferências.
      </SheetDescription>
    </SheetHeader>
    <div style={{ padding: "1rem" }}>
      <p>Opções de configuração...</p>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="secondary">Cancelar</Button>
      </SheetClose>
      <Button>Salvar</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Estrutura

O Sheet é composto por subcomponentes que trabalham juntos:

- **Sheet**: Componente raiz que gerencia o estado
- **SheetTrigger**: Elemento que abre o sheet
- **SheetContent**: Painel deslizante com o conteúdo
- **SheetHeader**: Cabeçalho com título e descrição
- **SheetTitle**: Título do sheet
- **SheetDescription**: Descrição ou subtítulo
- **SheetFooter**: Rodapé para ações
- **SheetClose**: Botão para fechar o sheet

## Propriedades

### SheetContent

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `side` | `'top'` \| `'right'` \| `'bottom'` \| `'left'` | `'right'` | Posição do painel |
| `className` | `string` | - | Classes CSS adicionais |

### SheetTrigger

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `asChild` | `boolean` | `false` | Renderiza o elemento filho como trigger |

Todos os componentes aceitam suas respectivas propriedades HTML nativas.
