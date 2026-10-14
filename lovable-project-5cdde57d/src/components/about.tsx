import { Reveal } from '@/components/reveal'
import { Eyebrow, Section } from '@/components/section'
import { CountUp } from '@/components/count-up'
import { interests } from '@/lib/site'

const stats = [
  { to: 40, suffix: '%', label: 'Less manual reporting time' },
  { to: 10000, suffix: '+', label: 'Records optimized with SQL' },
  { to: 35, suffix: '%', label: 'Better obstacle avoidance' },
  { to: 8.71, decimals: 2, label: 'CGPA out of 10' },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            {"I'm a Computer Science graduate from SRM Institute of Science and Technology, Chennai, focused on .NET and backend development — the layer that keeps applications secure, consistent and fast."}
          </p>
          <p>
            I build secure, maintainable backends with C#, ASP.NET Core, and Entity Framework Core. My Brand Management
            API ships with JWT authentication, DTOs, and Docker, and my Student Course Management System follows clean
            MVC with server-side validation.
          </p>
          <p>
            I work mainly with C#, ASP.NET Core MVC and Web API, Entity Framework Core and SQL Server. I build CRUD
            applications on clean relational models, with server-side validation, DTOs that separate the public API
            contract from internal data, JWT authentication and Docker for consistent deployments.
          </p>
          <p>
            {"My data background comes from an internship at Nissan Automobile, where I optimized SQL on 10,000+ record datasets, automated ETL workflows and shipped KPI dashboards that cut manual reporting time by 40%. I'm eager to grow as a .NET developer in a collaborative team."}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow className="text-muted-foreground">{"What I'm interested in"}</Eyebrow>
          <ul className="mt-5 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li key={item} className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal className="mt-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-6 md:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </dd>
              <p className="mt-2 text-sm text-muted-foreground" aria-hidden="true">{s.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
