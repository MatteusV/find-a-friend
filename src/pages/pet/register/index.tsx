import { ArrowLeft } from '@/components/icons/arrowLeft'
import { DogLogo } from '@/components/icons/dogLogo'
import { Logout } from '@/components/icons/logout'
import { DogRegister } from '@/components/pet/dogRegister'
import { FormPet } from '@/components/pet/formRegisterPet'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()
  return (
    <div className="flex bg-[#FDECED] h-[200%]">
      <aside className="fixed h-screen w-24 flex flex-col items-center justify-between py-8 bg-background max-sm:hidden">
        <DogLogo />

        <div
          className="p-2 bg-[#F4D35E] rounded-xl hover:cursor-pointer hover:bg-[#F4D82E]"
          onClick={() => router.push(`/`)}
        >
          <ArrowLeft />
        </div>
      </aside>

      <div className=" flex-1 xl:pl-16 flex flex-col items-center">
        <header className="mt-10 w-[50%] px-[4.5rem] py-4 border border-black flex items-center justify-between gap-8 bg-[#0D3B66] rounded-[1.25rem] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:px-0 max-sm:w-full max-sm:mt-0 max-sm:rounded-t-none max-sm:gap-2">
          <DogRegister />
          <div className="flex flex-col ">
            <h1 className="text-[1.875rem] text-white font-bold max-sm:text-xl">
              Seu Cãopanheiro
            </h1>
            <p className="font-semibold text-white max-sm:text-md">
              Rua do meio, 123 , Boa viagem, Recife - PE{' '}
            </p>
          </div>
          <div className="bg-[#114A80] p-3 rounded-[0.9375rem] hover:cursor-pointer">
            <Logout />
          </div>
        </header>

        <main className="w-1/2 mt-[1.94rem] px-20 py-16 rounded-[1.25rem] bg-white border border-[#D3E2E5] max-sm:px-5 max-sm:w-full">
          <h1 className="text-[#0D3B66] xl:text-3xl 2xl:text-[2.5rem] font-extrabold leading-[90%]">
            Adicione um pet
          </h1>

          <div className="w-full border border-[#D3E2E5] mt-[1.37rem] mb-[2.5rem]"></div>

          <FormPet />
        </main>
      </div>
    </div>
  )
}
