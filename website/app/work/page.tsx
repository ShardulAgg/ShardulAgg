import { Nav, PageHeader, Footer } from "../components";

export default function Work() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="mx-auto max-w-3xl px-6">
        <PageHeader
          label="Work"
          title="Current work"
          subtitle="The things I'm spending my time on right now."
        />

        <article className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold text-accent mb-2">
              <a
                href="https://cloutfarm.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                CloutFarm
              </a>
            </h2>
            <p className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
              AI + Content Production
            </p>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                A marketing agency platform where AI agents and human expertise
                produce content together. Three production engines — LinkedIn
                Studio, TikTok/Instagram, Serialized Stories — each with a
                different service model, from high-touch collaborative writing to
                fully automated SEO pipelines.
              </p>
              <p>
                The core thesis: every customer interaction deepens a shared
                knowledge layer, and every engine&apos;s output gets better
                because of it. Strategy conversations, interview transcripts,
                draft edits, performance data — all feed back into the system.
                The flywheel is the product.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-2">
              <a
                href="https://convosearch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                ConvoSearch
              </a>
            </h2>
            <p className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
              Conversational Commerce
            </p>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                A Shopify app that replaces catalog browsing with conversational
                product discovery. Customers describe what they need; the app
                understands intent, searches inventory, and guides the purchase —
                no filters, no dropdowns, just dialogue.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
