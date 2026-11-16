# Rotas em React

Projeto didático desenvolvido com **React, Vite e React Router DOM** para demonstrar navegação entre páginas, layouts compartilhados, rotas dinâmicas, tratamento de rotas inválidas e carregamento sob demanda.

## Tecnologias
- React 18
- Vite
- React Router DOM 6
- CSS responsivo

## Como executar
Requisitos: Node.js 18 ou superior e npm.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite (normalmente http://localhost:5173).

## Rotas disponíveis
| Caminho | Página |
| --- | --- |
| `/` | Home |
| `/about` | Sobre |
| `/contact` | Contato |
| `/user/:id` | Perfil dinâmico |
| Qualquer rota inexistente | Página 404 |

Exemplo de rota dinâmica: `/user/42`. O identificador é lido com o hook `useParams()`.

## Conceitos demonstrados
- `BrowserRouter`, `Routes` e `Route` para configurar rotas.
- `Link` e `NavLink` para navegação sem recarregar a página.
- `MainLayout` para compartilhar Header, Sidebar e Footer.
- `React.lazy` e `Suspense` para dividir o código e carregar páginas sob demanda.
- Rota curinga (`*`) para exibir uma página 404.
- Parâmetro `:id` para conteúdo dinâmico.

## Gerar build de produção
```bash
npm run build
npm run preview
```
Os arquivos otimizados são gerados na pasta `dist/`.

## Estrutura
```text
src/
├── components/   # Header, Sidebar e Footer
├── layouts/      # Layout compartilhado
├── pages/        # Home, About, Contact, User e NotFound
├── App.jsx       # Configuração das rotas
├── main.jsx      # Ponto de entrada
└── index.css     # Estilos globais e responsivos
```
