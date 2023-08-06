import { Logo } from '@/components/icons/logo'
import dogs from '@/assets/dogs.png'
import Image from 'next/image'
import { Search } from '@/components/icons/search'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm()

  function handleLocal(data) {
    console.log(data)
  }

  return (
    <div className="w-full h-screen  max-sm:p-4 text-white md:flex md:flex-col md:justify-around md:gap-10 md:px-[7.06rem] md:py-[7.75rem]">
      <header className="w-full flex max-sm:justify-center max-sm:-ml-3 max-sm:mt-2">
        <Logo />
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
          className="max-sm:w-full flex items-center max-sm:flex-col max-sm:items-center max-sm:gap-5  md:gap-3"
        >
          <p className="max-sm:mt-10">Busque um amigo:</p>
          <input
            type="text"
            list="countryList"
            {...register('country')}
            placeholder="Estado"
            className="bg-background border placeholder:text-white rounded-lg  md:w-[100px] max-sm:p-1 max-sm:pl-4 md:text-center md:p-3"
          />
          <datalist id="countryList">
            <option value="PE">PE</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
          </datalist>

          <input
            {...register('city')}
            type="text"
            list="cityList"
            placeholder="Cidade"
            className="bg-[#E44449] placeholder:text-white rounded-lg max-sm:p-2 max-sm:pl-4 md:text-center md:p-3"
          />

          <datalist id="cityList">
            <option value="Recife">Recife</option>
            <option value="São José dos Campos">São José dos Campos</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </datalist>

          <button
            type="submit"
            className="max-sm:w-[150px] max-sm:rounded-lg bg-[#F4D35E] max-sm:flex max-sm:justify-center max-sm:p-2 md:p-3 md:rounded-xl hover:cursor-pointer hover:bg-[#ffd22d]"
          >
            <Search />
          </button>
        </form>
      </footer>
    </div>
  )
}
