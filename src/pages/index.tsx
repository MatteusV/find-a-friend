import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

import { Logo } from '@/components/icons/logo'
import dogs from '@/assets/dogs.png'
import Image from 'next/image'
import { Search } from '@/components/icons/search'
import { RemoveAccentsFromWord } from '@/utils/removesAccentsFromWords'

const localFormSchema = z.object({
  state: z
    .string()
    .min(2, { message: 'Minímo 2 letras' })
    .max(2, { message: 'Apenas a sigla dos estados' })
    .transform((value) => value.toLowerCase()),

  city: z.string().transform((value) => value.toLowerCase()),
})

type LocalFormSchema = z.infer<typeof localFormSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocalFormSchema>({
    resolver: zodResolver(localFormSchema),
  })

  const router = useRouter()

  async function handleLocal(data: LocalFormSchema) {
    const city = RemoveAccentsFromWord(data.city)
    console.log(city)
    await router.push(`/map/${data.state}/${city}`)
  }

  return (
    <div className="bg-background w-full h-screen max-sm:h-max  max-sm:p-4 text-white md:flex md:flex-col md:justify-around md:gap-10 md:px-[7.06rem] md:py-[7.75rem]">
      <header className="w-full flex md:justify-between md:items-center max-sm:justify-center max-sm:-ml-3 max-sm:mt-2">
        <Logo />

        <a
          href="/org/register"
          className="px-4 py-2 max-sm:hidden bg-yellow-400 rounded-lg hover:bg-yellow-500"
        >
          Criar organização
        </a>
      </header>

      <main className="max-sm:mt-10 md:flex md:justify-between">
        <h1 className="max-sm:text-[38px] md:text-[72px] font-[800]">
          Leve <br /> a felecidade <br />
          para o seu lar
        </h1>
        <Image src={dogs} alt="" className="max-sm:mt-10" />
      </main>

      <footer className="max-sm:mt-10 flex justify-between max-sm:flex-col">
        <h3 className="max-sm:text-justify text-lg ">
          Encontre o animal de estimação ideal <br className="max-sm:hidden" />
          para seu estilo de vida!
        </h3>

        <form
          onSubmit={handleSubmit(handleLocal)}
          autoComplete="off"
          className="max-sm:w-full flex items-center max-sm:flex-col max-sm:items-center max-sm:gap-5  md:gap-3"
        >
          <p className="max-sm:mt-10">Busque um amigo:</p>
          <input
            type="text"
            list="stateList"
            {...register('state')}
            placeholder="Estado"
            className="bg-background border placeholder:text-white rounded-lg  md:w-[100px] max-sm:p-1 max-sm:pl-4 md:text-center md:p-3"
          />

          {errors.state && (
            <span className="text-yellow-200 font-bold text-lg">
              {errors.state.message}
            </span>
          )}
          <datalist id="stateList">
            <option value="PE">PE</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
          </datalist>

          <input
            {...register('city')}
            type="text"
            placeholder="Cidade"
            className="bg-[#E44449] placeholder:text-white rounded-lg max-sm:p-2 max-sm:pl-4 md:text-center md:p-3"
          />
          {errors.city && (
            <span className="text-yellow-200 font-bold text-lg">
              {errors.city.message}
            </span>
          )}

          <button
            type="submit"
            className="max-sm:w-[200px] max-sm:rounded-lg bg-[#F4D35E] max-sm:flex max-sm:justify-center max-sm:p-2 md:p-3 md:rounded-xl hover:cursor-pointer hover:bg-[#ffd22d]"
          >
            <Search />
          </button>
        </form>

        <div className="md:hidden w-full mt-10  text-center">
          <a href="/org/register" className="underline hover:text-yellow-300">
            Criar organização
          </a>
        </div>
      </footer>
    </div>
  )
}
