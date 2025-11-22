import { createFileRoute, Link } from '@tanstack/react-router'
import './index.css'

export const Route = createFileRoute('/')({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <div className="docs-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Lib Shared</h1>
          <p>Biblioteca de Componentes</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item active">
            Início
          </Link>
          <div className="nav-section">
            <h3>Componentes</h3>
            <Link to="/components/button" className="nav-item">
              Button
            </Link>
            <Link to="/components/avatar" className="nav-item">
              Avatar
            </Link>
          </div>
        </nav>
      </aside>
      <main className="content">
        <div className="content-inner">
          <h1>Bem-vindo à Lib Shared</h1>
          <p>Esta é uma biblioteca de componentes React reutilizáveis.</p>
          
          <section>
            <h2>Começando</h2>
            <p>Selecione um componente na sidebar para ver sua documentação e exemplos.</p>
          </section>

          <section>
            <h2>Instalação</h2>
            <pre><code>npm install lib-shared</code></pre>
          </section>

          <section>
            <h2>Uso</h2>
            <pre><code>{`import { Button } from 'lib-shared'

function App() {
  return <Button>Click me</Button>
}`}</code></pre>
          </section>
        </div>
      </main>
    </div>
  )
}
