import { Logo } from '@/components/icons/logo'
import dogs from '@/assets/dogs.png'
import Image from 'next/image'
import { Search } from '@/components/icons/search'
export default function Home() {
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

      <footer className="border max-sm:mt-10 flex justify-between max-sm:flex-col">
        <h3 className="max-sm:text-justify text-lg ">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </h3>

        <div className="max-sm:w-full flex items-center md:gap-5 max-sm:flex-col max-sm:gap-5">
          <p className="max-sm:mt-10 ">Busque um amigo:</p>
          <select className="bg-background border rounded-lg md:rounded-xl max-sm:p-1 max-sm:pl-4 md:text-center md:p-3">
            <option value="PE">PE</option>
            <option value="PE">SP</option>
            <option value="PE">RJ</option>
          </select>

          <select className="bg-[#E44449] rounded-lg max-sm:p-2 max-sm:pl-4 md:text-center md:p-3">
            <option value="PE">Recife</option>
            <option value="PE">São José dos Campos</option>
            <option value="PE">Rio de Janeiro</option>
          </select>

          <button
            type="submit"
            className="max-sm:w-[150px] max-sm:ml-12 max-sm:rounded-lg bg-[#F4D35E] max-sm:flex max-sm:justify-center max-sm:p-2 md:p-3 md:rounded-xl hover:cursor-pointer hover:bg-[#ffd22d]"
          >
            <Search />
          </button>
        </div>
      </footer>
    </div>
  )
}
