# Avatar

Componente de imagem com fallback para representar usuários ou entidades.

## Importação

```tsx
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/components/atoms/avatar";
```

## Uso Básico

```tsx live
(() => {
  const users = ["sergiolneves", "g-villarinho","lcvillarinho"];
  const userName = users[Math.floor(Math.random() * users.length)];
  
  return (
    <Avatar styles={{height:"64px", width:"64px"}}>
      <AvatarImage src={`https://github.com/${userName}.png`} alt={`@${userName}`} />
      <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
})()
```

## Com Fallback

Se a imagem falhar ao carregar, o fallback é exibido:

```tsx live
<Avatar>
  <AvatarImage src="https://invalid-url.com/image.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

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
