import { Nav, PageHeader, Footer } from "../components";

export default function Worldview() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="mx-auto max-w-3xl px-6">
        <PageHeader
          label="Worldview"
          title="How I think about things"
          subtitle="Patterns I keep seeing everywhere — in software, business, and how things work."
        />

        <article className="space-y-24">
          {/* Systems and compounding */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">
              Systems and compounding
            </h2>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                Most things are stateless — use it, reset, start over. The rare
                exception is a system that remembers, where each interaction
                makes the next one better.
              </p>
              <p>
                Network effects account for 70% of all value created in tech
                since 1994{" "}
                <Source href="https://www.nfx.com/post/network-effects-manual" name="NFX" />.
                A 5% increase in retention boosts profits 25–95%; acquiring a
                new customer costs 5–25x more than keeping one{" "}
                <Source href="https://www.invespcro.com/blog/customer-acquisition-retention/" name="Bain & Company" />.
                The math always favors compounding over acquisition.
              </p>
              <p>
                Does the hundredth interaction build on the first ninety-nine? If
                not, it&apos;s a transaction, not a system — replaceable the
                moment something cheaper comes along.
              </p>
            </div>
          </section>

          {/* Value capture */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">
              Value capture
            </h2>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                Value gets created at many points in any ecosystem — but most of
                it leaks. The obvious move is to monetize what people are paying
                attention to. The non-obvious move is owning the layer no one
                else is capturing.
              </p>
              <p>
                AWS represents 16% of Amazon&apos;s revenue but generates 74%
                of operating profit{" "}
                <Source href="https://www.fool.com/investing/2024/01/10/amazon-e-commerce-company-74-profit-this-instead/" name="Motley Fool" />.
                Google holds 90% of global search and made $198B in search ads
                in 2024{" "}
                <Source href="https://www.businessofapps.com/data/google-statistics/" name="Business of Apps" />{" "}
                — not by being the best at anything people do online, but by
                owning the layer between intent and action. When distribution
                costs hit zero, whoever controls demand wins{" "}
                <Source href="https://stratechery.com/aggregation-theory/" name="Stratechery" />.
              </p>
              <p>
                Sometimes the most valuable thing to build isn&apos;t a revenue
                line — it&apos;s the piece that removes the biggest bottleneck.
              </p>
            </div>
          </section>

          {/* Substance */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">Substance</h2>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                Things that work at 3am when no one&apos;s watching. Writing
                that&apos;s still relevant in five years. Products people use
                because they&apos;re good, not because they were marketed well.
              </p>
              <p>
                If something needs a hype cycle to survive or a community of
                believers to prop it up — it&apos;s probably not working. If
                it&apos;s working, you can tell.
              </p>
            </div>
          </section>

          {/* Patience */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">
              Patience and time
            </h2>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                McKinsey studied 615 companies over 15 years: long-term firms
                grew revenue 47% more, economic profit 81% more, and invested
                50% more in R&D — continuing through the financial crisis while
                others cut{" "}
                <Source href="https://www.mckinsey.com/featured-insights/long-term-capitalism/where-companies-with-a-long-term-view-outperform-their-peers" name="McKinsey Global Institute" />.
                Buffett compounded 19.9% annually for 60 years — $100 became
                $6.1 million{" "}
                <Source href="https://www.cnbc.com/2025/05/05/warren-buffetts-return-tally-after-60-years-5502284percent.html" name="CNBC" />.
              </p>
              <p>
                I optimize for direction, not speed. If the direction is right,
                time does the rest. If it&apos;s wrong, speed just gets you to
                the wrong place faster.
              </p>
            </div>
          </section>

          {/* Leverage */}
          <section>
            <h2 className="text-2xl font-bold text-accent mb-6">
              Leverage over headcount
            </h2>
            <div className="space-y-5 text-muted/70 leading-[1.9]">
              <p>
                Instagram: $1B, 13 employees. WhatsApp: $19B, 55 employees.
                NVIDIA generates $3.6M revenue per employee; Amazon generates
                $410K — a 9x gap that reflects what happens when the system does
                the work{" "}
                <Source href="https://sherwood.news/tech/nvidia-makes-usd3-6-million-revenue-per-employee-more-than-apple-meta/" name="Sherwood News" />.
              </p>
              <p>
                Meanwhile, 60% of knowledge worker time goes to coordination,
                not work. 270 daily interruptions before counting meetings{" "}
                <Source href="https://speakwiseapp.com/blog/meeting-overload-statistics" name="Asana Research" />.
                The bigger the team, the more time goes into managing the team.
              </p>
              <p>
                Headcount isn&apos;t capability. Leverage is — infrastructure
                that multiplies what one person can do.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function Source({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-mono text-muted/50 hover:text-muted transition-colors align-baseline"
    >
      [{name}]
    </a>
  );
}
