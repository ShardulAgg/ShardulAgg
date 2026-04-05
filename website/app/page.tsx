import Link from "next/link";
import { Nav, Footer } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-3xl">
          <h1 className="animate-fade-in stagger-1 text-5xl md:text-7xl font-bold tracking-tight text-accent leading-[1.1] mb-10">
            Shardul Aggarwal
          </h1>
          <p className="animate-fade-in stagger-2 text-lg md:text-xl text-muted leading-[1.8] max-w-2xl mb-6">
            I&apos;m interested in how things actually work — energy systems,
            economies, software, organizations. Not the surface narrative, but
            the structure underneath. Where does value come from. Where does it
            go. Why do some systems get stronger over time while others fall
            apart the moment you stop feeding them.
          </p>
          <p className="animate-fade-in stagger-3 text-base text-muted/60 leading-[1.8] max-w-2xl">
            I happen to write software for a living. But the things I care about
            are bigger than code.
          </p>

          <div className="animate-fade-in stagger-5 mt-20 flex gap-8">
            <HomeLink href="/now" label="What&apos;s driving me" />
            <HomeLink href="/worldview" label="How I think" />
            <HomeLink href="/work" label="Current work" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HomeLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono"
    >
      {label}
      <span className="text-muted/30 group-hover:text-accent transition-colors">
        &rarr;
      </span>
    </Link>
  );
}
