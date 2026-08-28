import { Info } from "lucide-react";

interface AnswerBlockProps {
  /**
   * The question this page exists to answer, phrased the way a searcher would
   * ask it. Rendered as a real heading so answer engines can pair it with the
   * answer beneath it.
   */
  question: string;
  /**
   * The answer, in roughly 40-60 words. It must stand on its own: an answer
   * engine will quote this paragraph without any of the surrounding page, so
   * it needs the subject, the place, and the specific facts spelled out rather
   * than referred to ("we", "this service", "the area").
   */
  answer: string;
  /** Optional supporting facts rendered as a definition list under the answer. */
  facts?: Array<{ label: string; value: string }>;
  className?: string;
}

/**
 * The direct-answer block that opens every money page.
 *
 * Server-rendered on purpose: most AI crawlers do not execute JavaScript, so
 * anything injected on the client is invisible to them no matter how well it
 * reads in a browser. This markup ships in the initial HTML.
 */
export default function AnswerBlock({ question, answer, facts, className = "" }: AnswerBlockProps) {
  return (
    <section className={`px-6 ${className}`} aria-labelledby="quick-answer">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card-elevated rounded-lg p-7 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="text-xs text-primary uppercase tracking-wider">Quick answer</span>
          </div>
          <h2 id="quick-answer" className="text-xl md:text-2xl text-foreground mb-4">
            {question}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{answer}</p>

          {facts && facts.length > 0 && (
            <dl className="mt-6 pt-6 border-t border-border/20 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-foreground text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
