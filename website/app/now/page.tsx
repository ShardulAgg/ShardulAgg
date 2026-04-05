import { Nav, PageHeader, Footer } from "../components";

export default function Now() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="mx-auto max-w-4xl px-6">
        <PageHeader
          label="Now"
          title="What's driving me right now"
          subtitle="The questions that keep pulling me in."
        />

        <article className="space-y-32">
          {/* Nuclear */}
          <section>
            <h2 className="text-3xl font-bold text-accent mb-10">
              Nuclear energy
            </h2>

            <p className="text-lg text-muted/70 leading-[1.9] mb-16 max-w-2xl">
              A $50B industry powering ~10% of global electricity{" "}
              <Source href="https://pris.iaea.org/" name="IAEA PRIS" />.
              Fossil fuels do $5 trillion+{" "}
              <Source href="https://www.iea.org/reports/world-energy-outlook-2024" name="IEA" />.
              Nuclear is 1% of the energy market. Not because the tech
              doesn&apos;t work — because it costs too much to build.
            </p>

            {/* ── Energy density: proportional visual ── */}
            <div className="border border-border rounded-xl p-8 mb-16">
              <h3 className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
                Energy density
              </h3>
              <p className="text-sm text-muted/50 mb-8">
                What it takes to produce the same amount of energy.
              </p>

              {/* Nuclear pellet */}
              <div className="flex items-end gap-6 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.4)]" />
                  <div className="mt-3 text-center">
                    <div className="text-sm font-bold text-accent">7g</div>
                    <div className="text-[10px] text-muted/40">uranium</div>
                  </div>
                </div>
                <div className="text-xs text-muted/30 pb-6">=</div>
                {/* Coal */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-neutral-700/40 border border-neutral-600/30 flex items-center justify-center">
                    <span className="text-[10px] text-muted/30">1,000 kg</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-bold text-accent">1 ton</div>
                    <div className="text-[10px] text-muted/40">coal</div>
                  </div>
                </div>
                <div className="text-xs text-muted/30 pb-6">=</div>
                {/* Oil barrels */}
                <div className="flex flex-col items-center">
                  <div className="flex gap-1.5">
                    <div className="w-10 h-16 md:w-12 md:h-20 rounded bg-amber-900/30 border border-amber-800/20" />
                    <div className="w-10 h-16 md:w-12 md:h-20 rounded bg-amber-900/30 border border-amber-800/20" />
                    <div className="w-10 h-16 md:w-12 md:h-20 rounded bg-amber-900/30 border border-amber-800/20" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-bold text-accent">3 barrels</div>
                    <div className="text-[10px] text-muted/40">oil</div>
                  </div>
                </div>
                <div className="text-xs text-muted/30 pb-6">=</div>
                {/* Gas */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-20 md:w-40 md:h-28 rounded-lg bg-sky-900/20 border border-sky-800/15 border-dashed flex items-center justify-center">
                    <span className="text-[10px] text-muted/30">480 m&sup3;</span>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-sm font-bold text-accent">480 m&sup3;</div>
                    <div className="text-[10px] text-muted/40">natural gas</div>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-muted/30">
                <a href="https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/physics-of-nuclear-energy" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">
                  World Nuclear Association
                </a>
              </div>
            </div>

            {/* ── Waste: proportional blocks ── */}
            <div className="border border-border rounded-xl p-8 mb-16">
              <h3 className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
                The waste problem that isn&apos;t
              </h3>
              <p className="text-sm text-muted/50 mb-10">
                All US nuclear waste ever produced vs. one coal plant in one year.
                Blocks are proportional.
              </p>

              <div className="flex items-end gap-10 mb-6 min-h-[280px]">
                {/* Nuclear — tiny */}
                <div className="flex flex-col items-center">
                  <div className="flex-1 flex items-end">
                    <div
                      className="w-6 h-2 rounded-sm bg-blue-400/50 border border-blue-400/30"
                      title="90,000 tonnes — all US nuclear, 1958–today"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-accent">90K</div>
                    <div className="text-[10px] text-muted/40">tonnes total</div>
                    <div className="text-[10px] text-muted/30 mt-1">since 1958</div>
                    <div className="text-[10px] font-mono text-muted/20 mt-1">
                      <a href="https://www.energy.gov/ne/" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">DOE</a>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-muted/20 pb-20">vs.</div>

                {/* Coal — massive */}
                <div className="flex flex-col items-center">
                  <div className="flex-1 flex items-end">
                    <div className="flex gap-1">
                      {/* CO2 block */}
                      <div
                        className="w-32 md:w-48 h-64 rounded bg-red-500/15 border border-red-500/10 flex flex-col items-center justify-center p-3"
                        title="6-9 million tonnes CO2"
                      >
                        <div className="text-3xl font-bold text-red-400/50">6–9M</div>
                        <div className="text-[10px] text-red-400/30 mt-1">tonnes CO2</div>
                      </div>
                      {/* Ash block */}
                      <div
                        className="w-12 md:w-16 h-16 rounded bg-red-500/10 border border-red-500/8 flex items-center justify-center self-end"
                        title="300-400K tonnes toxic ash"
                      >
                        <div className="text-[9px] text-red-400/30 text-center leading-tight">
                          400K<br />ash
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-accent">~9.4M</div>
                    <div className="text-[10px] text-muted/40">tonnes / year</div>
                    <div className="text-[10px] text-muted/30 mt-1">one 1GW coal plant</div>
                    <div className="text-[10px] font-mono text-muted/20 mt-1">
                      <a href="https://www.ipcc.ch/report/ar6/wg3/" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">IPCC AR6</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted/40 border-t border-border pt-4">
                The entire history of American nuclear waste fits on a football
                field. A single coal plant produces 100x that mass in waste every
                year — and its toxins (mercury, arsenic, lead) never decay.
              </div>
            </div>

            {/* ── Cost: horizontal bars ── */}
            <div className="border border-border rounded-xl p-8 mb-16">
              <h3 className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
                The one bottleneck
              </h3>
              <p className="text-sm text-muted/50 mb-8">
                Construction cost per kilowatt installed. That&apos;s it. Everything else works.
              </p>

              <div className="space-y-3">
                {/* Bars use inline style for precise proportional widths based on midpoint cost */}
                <BarRow label="Solar PV" range="$700–$1,100" pct={7.5} color="bg-emerald-500/50" />
                <BarRow label="Natural Gas" range="$700–$1,300" pct={8.3} color="bg-amber-500/40" />
                <BarRow label="Onshore Wind" range="$1,100–$1,500" pct={10.8} color="bg-teal-500/40" />

                <div className="h-px bg-border my-4" />

                <BarRow label="Nuclear (Western)" range="$5,000–$12,000" pct={70.8} color="bg-red-500/25" />
                <BarRow label="Vogtle (actual)" range="$15,900" pct={100} color="bg-red-500/35" badge="2x over budget" />

                <div className="h-px bg-border my-4" />

                <BarRow label="Nuclear (South Korea)" range="$2,000–$5,000" pct={29.2} color="bg-blue-400/40" highlight />
                <BarRow label="GE Hitachi target" range="$2,250" pct={14.2} color="bg-blue-400/50" highlight />
                <BarRow label="OECD-NEA w/ factory fab" range="$2,500–$3,500" pct={25} color="bg-blue-400/40" highlight badge="30–50% reduction" />
              </div>

              <div className="mt-6 flex gap-4 text-[10px] font-mono text-muted/25">
                <a href="https://www.lazard.com/research-insights/" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">Lazard LCOE v17</a>
                <a href="https://world-nuclear.org/" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">World Nuclear Association</a>
                <a href="https://www.oecd-nea.org/jcms/pl_30653" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">OECD-NEA, 2020</a>
              </div>
            </div>

            {/* ── Market size: proportional area ── */}
            <div className="border border-border rounded-xl p-8 mb-16">
              <h3 className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-6">
                The opportunity in proportion
              </h3>
              <p className="text-sm text-muted/50 mb-8">
                Current nuclear market vs. global energy. Area is proportional.
              </p>

              <div className="relative">
                {/* Fossil fuels - large box */}
                <div className="w-full h-64 rounded-lg bg-red-500/5 border border-red-500/10 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-red-400/30">$5T+</div>
                  <div className="text-xs text-red-400/20 mt-1">fossil fuels / year</div>
                </div>
                {/* Nuclear - tiny box overlaid */}
                <div className="absolute bottom-4 left-4 w-8 h-3 rounded-sm bg-blue-400/50 border border-blue-400/30" />
                <div className="absolute bottom-8 left-14 text-[10px] text-blue-400/50">
                  $50B nuclear &larr;
                </div>
              </div>

              <div className="mt-4 text-xs text-muted/40">
                Nuclear is ~1% of global energy revenue. Not because it
                can&apos;t scale — because construction cost hasn&apos;t let it.
              </div>
              <div className="mt-2 text-[10px] font-mono text-muted/25">
                <a href="https://www.iea.org/reports/world-energy-outlook-2024" target="_blank" rel="noopener noreferrer" className="hover:text-muted/40 transition-colors">IEA World Energy Outlook 2024</a>
              </div>
            </div>

            {/* ── Who's moving ── */}
            <div className="border border-border rounded-xl p-8 mb-16">
              <h3 className="text-xs font-mono text-muted/40 tracking-widest uppercase mb-8">
                Who&apos;s moving
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MoverCard
                  name="TerraPower"
                  detail="Sodium-cooled fast reactor. Broke ground in Wyoming, 2024. $2B DOE cost-share."
                />
                <MoverCard
                  name="GE Hitachi BWRX-300"
                  detail="Simplified SMR targeting $2,250/kW. Selected by Ontario Power Generation."
                />
                <MoverCard
                  name="Kairos Power"
                  detail="First non-light-water reactor construction permit in 50 years. Google signed as customer."
                />
                <MoverCard
                  name="X-energy Xe-100"
                  detail="Pebble bed reactor. Dow Chemical as first industrial customer. DOE ARDP funded."
                />
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs font-mono text-muted/40 mb-3">
                  Tech companies buying nuclear for AI
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Microsoft", "Google", "Amazon", "Oracle"].map((co) => (
                    <span
                      key={co}
                      className="px-3 py-1.5 text-xs font-mono text-muted/70 border border-border rounded-full"
                    >
                      {co}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── The thesis ── */}
            <div className="border-l-2 border-accent/30 pl-6 py-2">
              <p className="text-lg text-muted leading-[1.9]">
                25 countries pledged to triple nuclear capacity by 2050{" "}
                <Source href="https://www.energy.gov/articles/cop28-countries-launch-declaration-triple-nuclear-energy-capacity-2050" name="COP28" />.
                But if nuclear moves beyond electricity — into industrial heat,
                hydrogen, desalination — the growth isn&apos;t 3x. It&apos;s
                orders of magnitude.
              </p>
              <p className="text-lg text-accent font-medium mt-4">
                Energy is the layer everything else runs on.
              </p>
            </div>
          </section>

          {/* ══════ Orchestration ══════ */}
          <section>
            <h2 className="text-3xl font-bold text-accent mb-10">
              Orchestration in marketing
            </h2>

            <div className="space-y-6 text-muted/70 leading-[1.9]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                <StatCard
                  value="14,000+"
                  label="Martech tools in 2024"
                  detail="Up from 150 in 2011"
                  source="Chiefmartec"
                  href="https://chiefmartec.com/2024/05/2024-marketing-technology-landscape-supergraphic-14106-martech-products-27-8-growth-yoy/"
                />
                <StatCard
                  value="33%"
                  label="Stack capabilities actually used"
                  detail="Down from 58% in 2020"
                  source="Gartner"
                  href="https://www.gartner.com/en/marketing/topics/marketing-technology"
                />
                <StatCard
                  value="26%"
                  label="Budget wasted on wrong channels"
                  detail="Due to broken attribution"
                  source="Forrester"
                  href="https://attrisight.com/en/top-marketing-attribution-challenges-2025/"
                />
              </div>

              <p>
                More tools every year, less utilization every year. Strategy
                lives in one place, production in another, publishing in a third,
                measurement somewhere else. 98% of marketing teams hit data
                barriers{" "}
                <Source href="https://www.salesforce.com/marketing/resources/state-of-marketing-report/" name="Salesforce" />.
                Marketers spend 40% of their time on admin instead of strategy{" "}
                <Source href="https://blog.hubspot.com/marketing/marketers-routine-tasks-data" name="HubSpot" />.
              </p>

              <p>
                The gap isn&apos;t more software — it&apos;s the orchestration
                layer that makes existing software work together. Companies that
                integrate grow at 2x the rate{" "}
                <Source href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/insights-to-impact-creating-and-sustaining-data-driven-commercial-growth" name="McKinsey" />.
                Connected systems show 87% effectiveness vs. 52% without{" "}
                <Source href="https://www.hubspot.com/state-of-marketing" name="HubSpot" />.
                Most marketing software optimizes for one step. Almost none
                optimizes for the system.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

/* ── Components ── */

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

function BarRow({
  label,
  range,
  pct,
  color,
  highlight,
  badge,
}: {
  label: string;
  range: string;
  pct: number;
  color: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-36 md:w-44 shrink-0 text-right">
        <span
          className={`text-xs ${highlight ? "text-blue-400/70 font-medium" : "text-muted/50"}`}
        >
          {label}
        </span>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`h-7 ${color} rounded-sm flex items-center px-2.5 transition-all`}
          style={{ width: `${pct}%`, minWidth: "fit-content" }}
        >
          <span className="text-[10px] font-mono text-accent/70 whitespace-nowrap">
            {range}
          </span>
        </div>
        {badge && (
          <span className="text-[9px] font-mono text-blue-400/40 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function MoverCard({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="border border-border rounded-lg p-4">
      <div className="text-sm font-semibold text-accent mb-1">{name}</div>
      <div className="text-xs text-muted/50 leading-relaxed">{detail}</div>
    </div>
  );
}

function StatCard({
  value,
  label,
  detail,
  source,
  href,
}: {
  value: string;
  label: string;
  detail: string;
  source: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-border rounded-lg p-4 hover:border-muted/30 transition-colors"
    >
      <div className="text-2xl font-bold text-accent">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
      <div className="text-xs text-muted/50 mt-0.5">{detail}</div>
      <div className="text-[10px] font-mono text-muted/30 mt-2">{source}</div>
    </a>
  );
}
