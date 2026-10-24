import StudentCard from './components/StudentCard.jsx'

const students = [
  {
    name: 'Aarav Mehta',
    course: 'B.Sc. Computer Science',
    year: 'Year 2 · Class of 2027',
    email: 'aarav.mehta@campus.edu',
    initials: 'AM',
    accent: 'from-violet-500 to-indigo-600',
    badge: 'Dean’s list',
    skills: ['React', 'JavaScript', 'UI Design'],
    quote: 'Curious about how thoughtful design can make technology feel more human.',
  },
  {
    name: 'Maya Patel',
    course: 'B.Tech. Information Technology',
    year: 'Year 3 · Class of 2026',
    email: 'maya.patel@campus.edu',
    initials: 'MP',
    accent: 'from-rose-400 to-orange-500',
    badge: 'Student mentor',
    skills: ['Python', 'Data Science', 'Teamwork'],
    quote: 'Learning by building, sharing ideas, and helping others find their path.',
  },
  {
    name: 'Noah Williams',
    course: 'B.Sc. Software Engineering',
    year: 'Year 1 · Class of 2028',
    email: 'noah.williams@campus.edu',
    initials: 'NW',
    accent: 'from-teal-400 to-emerald-600',
    badge: 'New member',
    skills: ['HTML', 'CSS', 'Problem solving'],
    quote: 'Excited to turn small experiments into useful things for people.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a href="#home" className="flex items-center gap-3" aria-label="Campus profile home">
            <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-lg font-black text-white shadow-lg shadow-indigo-200">C</span>
            <span className="font-bold tracking-tight">Campus<span className="text-indigo-600">Connect</span></span>
          </a>
          <span className="rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
            Practical 02 · React Props
          </span>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">Meet the community</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Student profiles, <span className="text-indigo-600">made reusable.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Each card is the same React component—just powered by different student data passed in as props.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {students.map((student) => (
            <StudentCard key={student.email} {...student} />
          ))}
        </div>

        <aside className="mx-auto mt-12 max-w-3xl rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:flex sm:items-center sm:gap-5 sm:p-6">
          <div className="mb-3 grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 sm:mb-0" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="size-5">
              <path d="M8 7h8m-8 5h8m-8 5h4M5 3.75h14A1.25 1.25 0 0 1 20.25 5v14A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19V5A1.25 1.25 0 0 1 5 3.75Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-slate-900">One component, different props</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              <code className="rounded bg-indigo-50 px-1.5 py-0.5 font-mono text-xs text-indigo-700">&lt;StudentCard name=... course=... /&gt;</code>
              {' '}receives each student’s details, then displays them with destructured props.
            </p>
          </div>
        </aside>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-10">
          <p><span className="font-bold text-slate-700">CampusConnect</span> · Student Profile Card</p>
          <p>Functional components · Props · JSX</p>
        </div>
      </footer>
    </main>
  )
}

export default App
