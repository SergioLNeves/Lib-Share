import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/registry/components/atoms/button/button'
import './components.button.css'

export const Route = createFileRoute('/components/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  return (
    <div className="docs-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Lib Shared</h1>
          <p>Biblioteca de Componentes</p>
        </div>
        <nav className="sidebar-nav">
          <a href="/" className="nav-item">
            Início
          </a>
          <div className="nav-section">
            <h3>Componentes</h3>
            <a href="/components/button" className="nav-item active">
              Button
            </a>
            <a href="/components/avatar" className="nav-item">
              Avatar
            </a>
          </div>
        </nav>
      </aside>
      <main className="content">
        <div className="content-inner">
          <h1>Button</h1>
          <p>Componente de botão versátil com múltiplas variantes e suporte para composição.</p>
          
          <section>
            <h2>Importação</h2>
            <pre><code>{`import { Button } from '@/registry/components/atoms/button/button'`}</code></pre>
          </section>

          <section>
            <h2>Variantes</h2>
            
            <div className="example-section">
              <h3>Primary</h3>
              <div className="example-demo">
                <Button variant="primary">Primary Button</Button>
              </div>
              <pre><code>{`<Button variant="primary">Primary Button</Button>`}</code></pre>
            </div>

            <div className="example-section">
              <h3>Secondary</h3>
              <div className="example-demo">
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <pre><code>{`<Button variant="secondary">Secondary Button</Button>`}</code></pre>
            </div>

            <div className="example-section">
              <h3>Link</h3>
              <div className="example-demo">
                <Button variant="link">Link Button</Button>
              </div>
              <pre><code>{`<Button variant="link">Link Button</Button>`}</code></pre>
            </div>
          </section>

          <section>
            <h2>Props</h2>
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Tipo</th>
                  <th>Padrão</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>"primary" | "secondary" | "link"</code></td>
                  <td><code>"primary"</code></td>
                  <td>Variante visual do botão</td>
                </tr>
                <tr>
                  <td><code>asChild</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Permite composição com outros elementos</td>
                </tr>
                <tr>
                  <td><code>className</code></td>
                  <td><code>string</code></td>
                  <td>-</td>
                  <td>Classes CSS adicionais</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Exemplos de Uso</h2>
            
            <div className="example-section">
              <h3>Com evento onClick</h3>
              <div className="example-demo">
                <Button 
                  variant="primary" 
                  onClick={() => alert('Clicou!')}
                >
                  Clique aqui
                </Button>
              </div>
              <pre><code>{`<Button 
  variant="primary" 
  onClick={() => alert('Clicou!')}
>
  Clique aqui
</Button>`}</code></pre>
            </div>

            <div className="example-section">
              <h3>Botão desabilitado</h3>
              <div className="example-demo">
                <Button variant="primary" disabled>
                  Desabilitado
                </Button>
              </div>
              <pre><code>{`<Button variant="primary" disabled>
  Desabilitado
</Button>`}</code></pre>
            </div>

            <div className="example-section">
              <h3>Usando asChild</h3>
              <div className="example-demo">
                <Button variant="primary" asChild>
                  <a href="https://github.com">Ir para GitHub</a>
                </Button>
              </div>
              <pre><code>{`<Button variant="primary" asChild>
  <a href="https://github.com">Ir para GitHub</a>
</Button>`}</code></pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
