export default function ProcessTerminalSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight text-foreground">
            Simple cleaning process
          </h2>
        </div>

        {/* Minimal Code Example */}
        <div className="code-block overflow-hidden">
          <div className="code-block-header">
            <div className="text-xs font-mono">cleaning-service.js</div>
          </div>

          <div className="code-block-content">
            <div className="text-sm space-y-2">
              <div className="code-comment">// Professional cleaning made simple</div>
              <div className="code-command">
                <span className="code-comment">const</span> service = <span className="code-comment">new</span> Imperial<span className="code-comment">Cleaning</span>();
              </div>
              <div className="code-command">
                service.<span className="code-success">clean</span>(<span className="code-comment">"commercial-space"</span>);
              </div>
              <div className="code-success">// ✓ Space ready for occupancy</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Professional cleaning services across Idaho and Utah
          </p>
        </div>
      </div>
    </section>
  );
}