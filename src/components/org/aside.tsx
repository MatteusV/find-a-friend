import { Dashboard } from '../icons/dashboard'
import { Logo } from '../icons/logo'
import { User } from '../icons/user'

export function AsideAdmin() {
  return (
    <aside className="fixed w-1/5 h-screen bg-background">
      <header className="border-b p-5 pb-10">
        <Logo />
      </header>
      <nav className="mt-4 p-5 space-y-5">
        <a
          href=""
          className="text-xl flex items-center gap-2 pl-5 rounded-lg hover:bg-red-400"
        >
          <Dashboard /> Dashboard
        </a>

        <a
          href=""
          className="text-xl flex items-center gap-2 pl-5 rounded-lg hover:bg-red-400"
        >
          <User /> Minha conta
        </a>
      </nav>
    </aside>
  )
}
