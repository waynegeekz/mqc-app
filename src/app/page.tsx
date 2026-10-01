import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ChevronDown, Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DriftGrid } from "@/components/home/drift-grid";
import { SCurve } from "@/components/home/s-curve";
import { ContactForm } from "@/components/home/contact-form";
import onsite from "../../public/images/onsite.jpg";
import siteInspection from "../../public/images/site-inspection.jpg";
import clientMeeting from "../../public/images/client-meeting.jpg";

const PHONE = { label: "0915 290 1485", href: "tel:+639152901485" };
const CTA = "Request a consultation";

const nav = [
  { href: "#the-gap", label: "The gap" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#faq", label: "FAQ" },
];

const iconProps = { strokeWidth: 2, strokeLinecap: "square", strokeLinejoin: "miter" } as const;

const btnLg = "h-12 px-7";
const section = "mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28";

function Logo({ reversed }: { reversed?: boolean }) {
  const src = reversed ? "/brand/mqc-logo-reversed.svg" : "/brand/mqc-logo.svg";
  return <Image src={src} alt="MQC Project Management" width={210} height={32} unoptimized />;
}

function SectionHeading({ id, eyebrow, title, children, inverse }: { id: string; eyebrow?: string; title: string; children?: ReactNode; inverse?: boolean }) {
  return (
    <div className="max-w-[720px]">
      {eyebrow && <p className={`mb-3 font-mono text-xs font-medium tracking-[0.12em] uppercase ${inverse ? "text-[var(--safety-amber)]" : "text-muted-foreground"}`}>{eyebrow}</p>}
      <h2 id={id} className="text-[30px] leading-[36px] font-bold tracking-[-0.01em] text-balance md:text-4xl md:leading-[42px]">
        {title}
      </h2>
      <div className="beam mt-6" aria-hidden />
      {children && <div className={`mt-6 space-y-4 text-base leading-7 ${inverse ? "text-white/80" : "text-muted-foreground"}`}>{children}</div>}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm supports-[backdrop-filter]:bg-card/90">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6 md:h-[72px]">
        <a href="#top" className="shrink-0" aria-label="MQC Project Management, back to top">
          <span className="block w-[168px] md:w-[200px] [&_img]:h-auto [&_img]:w-full"><Logo /></span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="border-b-2 border-transparent py-1 text-[15px] font-medium transition-colors duration-[120ms] hover:border-[var(--line-strong)]">
              {n.label}
            </a>
          ))}
          <a href="#contact" className={buttonVariants({ variant: "secondary" })}>{CTA}</a>
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-md border border-[var(--line-strong)] px-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            <Menu className="size-4" {...iconProps} aria-hidden /> Menu
          </summary>
          <div className="fixed inset-x-0 top-16 border-b border-border bg-card px-4 pt-2 pb-6 shadow-[0_8px_24px_rgba(15,34,54,0.14)]">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="block border-b border-border py-4 font-medium">{n.label}</a>
            ))}
            <a href="#contact" className={`${buttonVariants()} mt-5 w-full`}>{CTA}</a>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-x-clip bg-card">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-6 lg:self-center">
          <h1 id="hero-title" className="text-4xl leading-[40px] font-extrabold tracking-[-0.015em] text-balance lg:text-5xl lg:leading-[52px]">
            Do you know where your project really stands?
          </h1>
          <div className="beam mt-6" aria-hidden />
          <p className="mt-6 max-w-[540px] text-base leading-7 text-muted-foreground">
            We close the gap between your plan and your site. We monitor scope, time, budget and quality as the work happens, so problems are caught early, while they&apos;re still cheap to fix.
          </p>
          <a href="#contact" className={`${buttonVariants()} ${btnLg} mt-8`}>
            {CTA} <ArrowRight className="size-4" {...iconProps} aria-hidden />
          </a>
          <p className="mt-4 max-w-[520px] text-sm leading-5 text-muted-foreground">
            Have a project running now? We&apos;ll sit down and look at it with you, no obligation.
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:-mr-[max(24px,calc((100vw-1200px)/2+24px))]">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--blueprint)] lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <Image src={onsite} alt="A project engineer on site reviewing progress on a tablet while crews tie rebar for the foundations" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[30%_center]" placeholder="blur" />
          </div>
          <figure className="relative -mt-16 ml-4 mr-4 max-w-[340px] border border-border bg-card p-5 shadow-[0_8px_24px_rgba(15,34,54,0.14)] sm:ml-6 lg:absolute lg:bottom-6 lg:left-6 lg:m-0">
            <figcaption className="flex items-baseline justify-between gap-4">
              <span className="font-heading text-base font-bold">Progress this period</span>
              <span className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">Sample</span>
            </figcaption>
            <dl className="mt-4 space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between"><dt>Planned</dt><dd className="tabular-nums">62%</dd></div>
                <div className="mt-1.5 h-2 rounded-sm bg-muted"><div className="h-2 w-[62%] rounded-sm bg-[var(--blueprint)]" /></div>
              </div>
              <div>
                <div className="flex justify-between"><dt>Actual</dt><dd className="tabular-nums">54%</dd></div>
                <div className="mt-1.5 h-2 rounded-sm bg-muted"><div className="h-2 w-[54%] rounded-sm bg-[var(--safety-amber)]" /></div>
              </div>
            </dl>
            <p className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
              Your contractors keep building. We turn it into visual reports you can read at a glance, and every party reviews the same numbers together.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}

const warnings = ["Behind schedule", "Budget overrun", "Below-standard work", "Low productivity"];

function TheGap() {
  return (
    <section aria-labelledby="the-gap-title" id="the-gap" className="scroll-mt-20 border-t border-border bg-background">
      <div className={section}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionHeading id="the-gap-title" eyebrow="The gap" title="Most projects don't fail all at once. They drift.">
              <p>A delay here. A change there. A budget line that&apos;s &ldquo;probably fine.&rdquo; By the time anyone notices, you&apos;re paying more and getting less.</p>
              <p>Usually nobody did anything wrong on purpose. Nobody was measuring, so nobody could correct course.</p>
            </SectionHeading>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden lg:col-span-6">
            <Image src={siteInspection} alt="An engineer on an upper deck points across a busy site as a crane lifts a facade panel" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[70%_center]" placeholder="blur" />
          </div>
        </div>

        <figure className="mt-16 border border-border bg-card p-5 sm:p-8 lg:mt-24 lg:p-10">
          <SCurve />
          <figcaption className="mt-8 max-w-[720px] border-t-2 border-foreground pt-4 text-base text-muted-foreground">
            This is what an off-track project looks like on paper: more money spent than the work done is worth, and less work done than planned.
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="self-start lg:col-span-5">
            <h3 className="text-[22px] leading-7 font-semibold">Signs a project is off track</h3>
            <ul className="mt-5 border-b border-border">
              {warnings.map((w) => (
                <li key={w} className="flex items-center justify-between gap-4 border-t border-border py-4">
                  <span className="font-heading text-base font-semibold">{w}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-[var(--danger-tint)] px-2 py-1 text-xs font-semibold text-[var(--danger)]">
                    <span className="size-1.5 bg-current" aria-hidden /> Off track
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy p-6 text-white sm:p-10 lg:col-span-7">
            <h3 className="text-[22px] leading-7 font-bold sm:text-2xl sm:leading-8">Can you answer these about your project today?</h3>
            <ol className="mt-6">
              {[
                "What percentage of the work is physically complete?",
                "How much has been spent against the budget for that work?",
                "Which activities are late, and by how many days?",
              ].map((q) => (
                <li key={q} className="border-t border-white/20 py-4 leading-7 text-white/90">
                  {q}
                </li>
              ))}
            </ol>
            <p className="border-t-2 border-[var(--safety-amber)] pt-4 font-semibold">
              If these take more than a day to answer, monitoring is missing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Drift() {
  return (
    <section aria-labelledby="drift-title" className="border-t border-border bg-card">
      <div className={section}>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="drift-title" className="max-w-[560px] text-[28px] leading-[34px] font-bold md:text-4xl md:leading-[42px]">You don&apos;t get what you asked for.</h2>
          <p className="text-muted-foreground">Every hand-off is a chance to drift.</p>
        </div>
        <DriftGrid />
      </div>
    </section>
  );
}

function Hook() {
  return (
    <section aria-label="Our principle" className="blueprint-grid bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-24">
        <p className="max-w-[820px] font-heading text-[30px] leading-[36px] font-bold tracking-[-0.01em] text-balance md:text-4xl md:leading-[42px]">
          There is no management without monitoring and control.
        </p>
        <div className="beam mt-8" aria-hidden />
      </div>
    </section>
  );
}

const steps = [
  {
    title: "We set the baseline.",
    body: "Scope, schedule, budget, quality and risks are all written down and agreed before the work runs ahead of the plan. Everything gets measured against this.",
  },
  {
    title: "We track what's really happening.",
    body: "Your project in-charge sends us actual costs, dates, manpower, materials, and percent complete. We turn that into visual reports comparing planned and actual, so you see the gap opening long before handover.",
  },
  {
    title: "We help bring it back on track.",
    body: "When something slips, it comes to the project meeting with the data behind it. Options include more labour, better supervision, or better materials and equipment. The earlier it's caught, the cheaper the fix.",
  },
];

const flow = [
  { who: "Your contractors", what: "Build on site" },
  { who: "Your project in-charge", what: "Sends us the site data" },
  { who: "MQC", what: "Measures against the baseline and reports", us: true },
  { who: "Project meeting", what: "Every party reviews the same numbers" },
];

function HowWeWork() {
  return (
    <section aria-labelledby="how-we-work-title" id="how-we-work" className="scroll-mt-20 bg-card">
      <div className={section}>
        <SectionHeading id="how-we-work-title" eyebrow="How we close the gap" title="We keep watch, so you can focus on the build.">
          <p>We&apos;re the monitoring and control behind your project. We make sure everyone is working from the same facts.</p>
        </SectionHeading>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:aspect-auto">
            <Image src={clientMeeting} alt="A project manager walks the owner's team through a building model and a cost chart in a project meeting" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[40%_center]" placeholder="blur" />
          </div>
          <ol className="lg:col-span-7">
            {steps.map((s, i) => (
              <li key={s.title} className="grid gap-2 border-t-2 border-foreground py-6 sm:grid-cols-[56px_1fr] sm:gap-4 lg:py-7">
                <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground sm:pt-2">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[22px] leading-7 font-semibold">{s.title}</h3>
                  <p className="mt-2 max-w-[600px] text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="mt-20 lg:mt-28" aria-labelledby="flow-title">
          <figcaption id="flow-title" className="font-heading text-[22px] leading-7 font-semibold">How monitoring and control fits your project</figcaption>
          <div className="mt-6 border border-border bg-background p-4 sm:p-6">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b-2 border-foreground pb-3 text-sm">
              <span className="font-mono text-xs font-medium tracking-[0.12em] uppercase">Baseline</span>
              <span className="text-muted-foreground">Scope · Schedule · Budget · Quality · Risks</span>
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-4 md:gap-0">
              {flow.map((f, i) => (
                <li key={f.who} className="relative flex md:pr-8 md:last:pr-0">
                  <div className={`flex w-full flex-col gap-1 rounded-md border p-4 ${f.us ? "border-transparent bg-navy text-white" : "border-[var(--line-strong)] bg-card"}`}>
                    <span className={`font-heading text-base font-bold ${f.us ? "text-[var(--safety-amber)]" : ""}`}>{f.who}</span>
                    <span className={`text-sm ${f.us ? "text-white/80" : "text-muted-foreground"}`}>{f.what}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowRight className="absolute top-1/2 right-1.5 hidden size-5 -translate-y-1/2 md:block" {...iconProps} aria-hidden />
                  )}
                </li>
              ))}
            </ol>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <svg viewBox="0 0 40 20" className="h-5 w-10 shrink-0 text-[var(--amber-ink)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden>
                <path d="M36 2 V14 H6 M11 9 L6 14 L11 19" />
              </svg>
              <span><strong className="font-semibold">Corrective action goes back to site</strong> <span className="text-muted-foreground">before the gap widens.</span></span>
            </div>
          </div>
        </figure>
      </div>

      <div className="border-y border-border bg-background">
        <ul className="mx-auto grid max-w-[1200px] px-4 sm:px-6 md:grid-cols-3">
          {["Instant view of project status", "No surprise overruns", "Every stakeholder aligned"].map((o, i) => (
            <li key={o} className={`flex items-center gap-4 py-6 md:px-8 md:py-8 ${i ? "border-t border-border md:border-t-0 md:border-l" : "md:pl-0"}`}>
              <span className="h-0.5 w-6 shrink-0 bg-foreground" aria-hidden />
              <span className="font-heading text-lg font-semibold">{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:py-20">
        <p className="font-heading text-[28px] leading-[34px] font-bold text-balance">Prevention is better than a costly cure.</p>
        <a href="#contact" className={`${buttonVariants()} ${btnLg} shrink-0`}>
          {CTA} <ArrowRight className="size-4" {...iconProps} aria-hidden />
        </a>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Do you replace my contractor or construction manager?", a: "No. They run the operation. We monitor it, report on it, and keep every party aligned." },
  { q: "What do I need to provide?", a: "The project's plans and resources, plus regular site data from your project in-charge." },
  { q: "How often will I get reports?", a: "Every reporting period, on a fixed rhythm agreed for your project." },
  { q: "Will I understand the reports?", a: "Yes. They're visual and made to be read at a glance, and we go through them together in the project meeting." },
  { q: "What reports do I get?", a: "A status report, cost and schedule performance, earned value over time, visual progress, and manpower loading. Each one compares planned against actual." },
  { q: "Can you help with a project that's already running?", a: "Yes, let's look at it together." },
  { q: "Who will I be working with?", a: "Engr. Manolo Q. Cabibihan, C.E., Project Manager." },
];

function Faq() {
  return (
    <section aria-labelledby="faq-title" id="faq" className="scroll-mt-20 bg-background">
      <div className={`${section} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-5">
          <SectionHeading id="faq-title" title="Frequently asked questions" />
        </div>
        <div className="border-b border-border lg:col-span-7">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base leading-7 font-semibold transition-colors duration-[120ms] hover:text-[var(--blueprint)] [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 transition-transform duration-150 group-open:rotate-180" {...iconProps} aria-hidden />
              </summary>
              <p className="max-w-[640px] pb-6 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 border-t border-border bg-card">
      <div className={`${section} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" eyebrow="Contact" title="Let's talk about your project.">
            <p>Have a project running now? We&apos;ll sit down and look at it with you, no obligation.</p>
          </SectionHeading>
          <dl className="mt-10 border-t-2 border-foreground pt-6">
            <dt className="font-heading text-lg font-bold">Engr. Manolo Q. Cabibihan, C.E.</dt>
            <dd className="text-muted-foreground">Project Manager</dd>
            <dd className="mt-4">
              <a href={PHONE.href} className="inline-flex items-center gap-2 font-semibold underline decoration-[var(--line-strong)] underline-offset-[6px] transition-colors duration-[120ms] hover:decoration-[var(--safety-amber)] hover:decoration-2">
                <Phone className="size-4" {...iconProps} aria-hidden /> {PHONE.label}
              </a>
            </dd>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <ContactForm cta={CTA} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/15 bg-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <span className="block w-[180px] [&_img]:h-auto [&_img]:w-full"><Logo reversed /></span>
        <p className="text-white/60">© {new Date().getFullYear()} Built by <a href="https://lumintralabs.co" target="_blank">Lumintra Labs</a></p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <TheGap />
        <Drift />
        <Hook />
        <HowWeWork />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
