import { Aside } from './components/aside'

export default function Map() {
  return (
    <div className="text-white flex">
      <Aside />
      <main className="bg-white flex-1"></main>
    </div>
  )
}
