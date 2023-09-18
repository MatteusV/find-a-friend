import { Aside } from '@/components/map/aside'
import { CardPet } from '@/components/map/cardPet'

export default function Map() {
  return (
    <div className="text-white flex">
      <Aside />
      <main className="bg-[#FDECED] ml-[25.5rem] flex-1 overflow-x-hidden px-4 2xl:px-20">
        <div className="flex mt-[9.62rem] justify-between">
          <h1 className="text-[#0D3B66] leading-[2.125rem]">
            Encontre <strong>324 amigos</strong> na sua cidade
          </h1>

          <select
            name="typePet"
            id="typePet"
            className="w-[13.125rem] h-12 rounded-[0.9375rem] text-[#0D3B66] text-center bg-[#FBE1E2]
            "
          >
            <option value="gatos e cachorros">Gatos e Cachorros</option>
            <option value="cachorros">Cachorros</option>
            <option value="gato">Gatos</option>
          </select>
        </div>

        <div className="w-full mt-14 grid grid-cols-2 2xl:grid-cols-3 gap-10">
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
          <CardPet />
        </div>
      </main>
    </div>
  )
}
