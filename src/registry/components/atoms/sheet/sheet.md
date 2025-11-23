# Sheet Component

Um componente de painel lateral (sheet/drawer) construído com Radix UI Dialog e CSS Modules.

## Características

- ✅ Suporte a 4 posições: `top`, `right`, `bottom`, `left`
- ✅ Animações suaves de entrada e saída
- ✅ Suporte a tema claro e escuro
- ✅ Overlay com fade in/out
- ✅ Botão de fechar integrado
- ✅ Totalmente acessível (baseado em Radix UI Dialog)
- ✅ TypeScript com tipos completos

## Instalação

Este componente requer as seguintes dependências:

```bash
npm install @radix-ui/react-dialog lucide-react
```

## Uso Básico

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/registry/components/atoms/sheet";

function Example() {
  return (
    <Sheet>
      <SheetTrigger>Abrir Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Título do Sheet</SheetTitle>
          <SheetDescription>
            Descrição do conteúdo do sheet.
          </SheetDescription>
        </SheetHeader>
        <div>Conteúdo principal aqui...</div>
        <SheetFooter>
          <button>Ação</button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

## Posições

O componente suporta 4 posições diferentes através da prop `side`:

```tsx
<SheetContent side="right">  {/* Padrão */}
<SheetContent side="left">
<SheetContent side="top">
<SheetContent side="bottom">
```

## Componentes

### Sheet
Componente raiz que gerencia o estado do sheet.

### SheetTrigger
Botão ou elemento que abre o sheet quando clicado.

### SheetContent
Conteúdo principal do sheet. Aceita a prop `side` para controlar a posição.

**Props:**
- `side?: "top" | "right" | "bottom" | "left"` - Posição do sheet (padrão: `"right"`)
- Todas as props do `Dialog.Content` do Radix UI

### SheetHeader
Container para o cabeçalho do sheet (título e descrição).

### SheetTitle
Título do sheet. Importante para acessibilidade.

### SheetDescription
Descrição do sheet. Importante para acessibilidade.

### SheetFooter
Container para ações no rodapé do sheet.

### SheetClose
Botão para fechar o sheet programaticamente.

## Exemplo Completo

```tsx
import { Button } from "@/registry/components/atoms/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/components/atoms/sheet";

function CompleteExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary">Abrir Configurações</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Configurações</SheetTitle>
          <SheetDescription>
            Faça alterações nas suas configurações aqui.
          </SheetDescription>
        </SheetHeader>
        
        <div style={{ padding: "1rem" }}>
          <h3>Opções</h3>
          <p>Conteúdo das configurações...</p>
        </div>
        
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </SheetClose>
          <Button variant="primary">Salvar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

## Estilização

O componente usa CSS Modules com variáveis CSS para fácil customização. As principais variáveis são:

```css
--sheet-bg                 /* Cor de fundo do sheet */
--sheet-foreground         /* Cor do texto */
--sheet-border-color       /* Cor da borda */
--sheet-muted-foreground   /* Cor do texto secundário */
--sheet-shadow             /* Sombra do sheet */
--sheet-overlay-bg         /* Cor do overlay */
```

Para customizar, você pode sobrescrever essas variáveis ou adicionar classes personalizadas através da prop `className`.

## Acessibilidade

- Baseado em Radix UI Dialog, que segue as práticas WAI-ARIA
- Foco é automaticamente gerenciado
- Suporte completo a navegação por teclado
- Screen reader friendly com labels apropriados
