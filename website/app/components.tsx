import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-mono text-muted tracking-wider uppercase hover:text-accent transition-colors"
        >
          Shardul
        </Link>
        <div className="flex gap-5 text-sm">
          <NavLink href="/now">Now</NavLink>
          <NavLink href="/worldview">Worldview</NavLink>
          <NavLink href="/work">Work</NavLink>
        </div>
      </div>
    </nav>
  );
}

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-muted hover:text-accent transition-colors font-mono text-xs tracking-wide"
    >
      {children}
    </Link>
  );
}

export function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-32 pb-16 border-b border-border mb-16">
      <span className="text-xs font-mono text-muted/50 tracking-widest uppercase">
        {label}
      </span>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent mt-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted/60 mt-4 max-w-2xl leading-relaxed text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border mt-32">
      <div className="mx-auto max-w-5xl flex items-center justify-between text-xs text-muted/40 font-mono">
        <span>Shardul Aggarwal</span>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/ShardulAgg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/shardulaggarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted transition-colors"
          >
            X
          </a>
          <a
            href="https://github.com/ShardulAgg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
