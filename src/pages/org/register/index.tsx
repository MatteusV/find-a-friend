/* eslint-disable no-useless-escape */
import { Logo } from '@/components/icons/logo'
import Image from 'next/image'

import Dog from '@/assets/dogs.png'
import { FormRegisterOrg } from '@/components/org/formRegister'

export default function Register() {
  return (
    <div className="w-full h-screen p-5 max-sm:py-0 flex items-center max-sm:flex-col">
      <header className="md:hidden w-screen h-full bg-background flex flex-col items-center justify-center">
        <Logo />
      </header>
      <aside className="w-[30.5rem] h-[100%] rounded-[1.25rem] p-8 bg-background flex flex-col justify-between items-center max-sm:hidden">
        <Logo />

        <Image src={Dog} alt="" />
      </aside>

      <main className="h-screen flex-1 pt-10 flex flex-col items-center">
        <h1 className="text-[#0D3B66] -mt-2 text-center xl:text-4xl 2xl:text-[3.375rem] font-bold tracking-[-0.0675rem] mb-[4.56rem] max-sm:mb-4 max-sm:text-center max-sm:-ml-4 ">
          Cadastre sua <br className="max-2xl:hidden" /> organização
        </h1>
        <FormRegisterOrg />
      </main>
    </div>
  )
}
