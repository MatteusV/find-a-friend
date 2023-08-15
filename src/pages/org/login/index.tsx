import Image from 'next/image'

import Dog from '@/assets/dogs.png'
import { Logo } from '@/components/icons/logo'
import { FormLogin } from './components/formLogin'

export default function Login() {
  return (
    <div className="w-full h-screen p-5 flex items-center">
      <aside className="w-[30.5rem] h-[100%] rounded-[1.25rem] p-8 bg-background flex flex-col justify-between items-center">
        <Logo />

        <Image src={Dog} alt="" />
      </aside>
      <main className="flex-1 h-screen flex flex-col items-center">
        <h1 className="text-[#0D3B66] text-[3.375rem] text-center font-bold leading-[90%] tracking-[-0.0675rem] xl:mt-20 2xl:mt-40">
          Boas-vindas!
        </h1>

        <FormLogin />
      </main>
    </div>
  )
}
