import { DogLogo } from '@/components/icons/dogLogo'
import { Search } from '@/components/icons/search'
import { useRouter } from 'next/router'

export function Aside() {
  const router = useRouter()

  return (
    <aside className="w-[25.5rem] h-screen fixed  bg-background overflow-y-auto scrollbar-thumb-blue-900 scrollbar-thin pb-5 2xl:pb-0">
      <header className="bg-[#E44449] h-[15.0625rem] pt-[5.06rem] px-[2.5rem] flex flex-col items-center">
        <div className="flex flex-col items-start">
          <div className="ml-2">
            <DogLogo />
          </div>

          <form className="flex mt-[1.65rem] ml-1 gap-5">
            <input
              type="text"
              placeholder="estado"
              defaultValue={router.query.local && router.query.local[0]}
              className="bg-transparent w-12 border border-[#F15156] px-2 py-2 placeholder:text-white rounded-[0.9375rem]  text-center text-white font-bold hover:cursor-pointer"
            />

            <input
              type="text"
              placeholder="cidade"
              defaultValue={router.query.local && router.query.local[1]}
              className="bg-transparent border border-[#F15156] placeholder:text-white rounded-[0.9375rem] text-center text-white font-bold hover:cursor-pointer"
            />

            <button
              type="submit"
              className="p-3 bg-[#F4D35E] rounded-[1rem] hover:cursor-pointer hover:bg-[#F4D32E]"
            >
              <Search />
            </button>
          </form>
        </div>
      </header>

      <div className="pl-[3.5rem] pt-[2.19rem]">
        <h1 className="font-bold leading-[2.125rem]  mb-5 text-lg">Filtros</h1>

        <form className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <label htmlFor="age">Idade</label>
            <select
              name="age"
              id="age"
              className="bg-[#F75F64] text-white font-bold w-[18.5rem] h-[3.75rem] rounded-[0.9375rem] pl-5 mt-3"
            >
              <option value="filhote">Filhote</option>
              <option value="adulto">Adulto</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="energyLevel">Nivel de Energia</label>
            <select
              name="energyLevel"
              id="energyLevel"
              className="bg-[#F75F64] text-white font-bold w-[18.5rem] h-[3.75rem] rounded-[0.9375rem] pl-5 mt-3"
            >
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="size">Porte do animal</label>
            <select
              name="size"
              id="size"
              className="bg-[#F75F64] text-white font-bold w-[18.5rem] h-[3.75rem] rounded-[0.9375rem] pl-5 mt-3"
            >
              <option value="pequeno">Pequeninho</option>
              <option value="medio">Médio</option>
              <option value="grande">Grandão</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="independence">Nivel de independência</label>
            <select
              name="independence"
              id="independence"
              className="bg-[#F75F64] text-white font-bold w-[18.5rem] h-[3.75rem] rounded-[0.9375rem] pl-5 mt-3"
            >
              <option value="pouco">Pouco</option>
              <option value="medio">Médio</option>
              <option value="bastante">Bastante</option>
            </select>
          </div>
        </form>
      </div>
      <div className="mt-24 w-full text-center ">
        <a href="/org/register" className=" underline hover:text-blue-700">
          Criar organização
        </a>
      </div>
    </aside>
  )
}
