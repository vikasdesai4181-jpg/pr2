function StudentCard({
  name,
  course,
  year,
  email,
  initials,
  accent,
  badge,
  skills,
  quote,
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/70">
      <div className={`relative h-28 bg-gradient-to-br ${accent}`}>
        <div className="absolute -right-8 -top-12 size-40 rounded-full border-[24px] border-white/10" />
        <div className="absolute -bottom-8 left-8 size-24 rounded-full border-[16px] border-white/10" />
        <span className="absolute right-5 top-5 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6">
        <div className="-mt-11 mb-4 flex items-end justify-between">
          <div className="grid size-[5.25rem] place-items-center rounded-2xl border-4 border-white bg-slate-100 shadow-md">
            <span className={`grid size-full place-items-center rounded-[0.8rem] bg-gradient-to-br ${accent} text-2xl font-extrabold text-white`}>
              {initials}
            </span>
          </div>
          <span className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <span className="size-2 rounded-full bg-emerald-500" />
            Active student
          </span>
        </div>

        <h2 className="text-xl font-extrabold tracking-tight text-slate-950">{name}</h2>
        <p className="mt-1 text-sm font-medium text-indigo-700">{course}</p>
        <p className="mt-1 text-xs text-slate-500">{year}</p>

        <p className="mt-5 flex-1 border-l-2 border-indigo-200 pl-3 text-sm leading-6 text-slate-600">
          “{quote}”
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {skill}
            </span>
          ))}
        </div>

        <a
          href={`mailto:${email}`}
          className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-600 transition group-hover:text-indigo-700"
        >
          <span className="truncate">{email}</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="ml-3 size-4 shrink-0">
            <path d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default StudentCard
