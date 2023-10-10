import { Aside } from '@/components/map/aside'
import { CardPet } from '@/components/map/cardPet'
import { api } from '@/lib/axios'
import { GetStaticPaths, GetStaticProps } from 'next'

interface MapProps {
  pets: [
    {
      id: string
      name: string
    },
  ]
  imageUrls: string[]
  amountPets: number
}

export default function Map({ amountPets, imageUrls, pets }: MapProps) {
  return (
    <div className="text-white flex">
      <Aside />
      <main className="bg-[#FDECED] ml-[25.5rem] flex-1 overflow-x-hidden px-4 2xl:px-20 min-h-screen">
        <div className="flex mt-[9.62rem] justify-between">
          <h1 className="text-[#0D3B66] leading-[2.125rem]">
            Encontre <strong>{amountPets} amigos</strong> na sua cidade
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
          {pets.map((pet) => (
            <CardPet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              imagesPet={imageUrls[0]}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const state = params!.local![0]
  const city = params!.local![1]

  const reply = await api.get(`/pet/fetch/${state}/${city}`)
  const { pets, amountPets, imageUrls } = reply.data
  return {
    props: {
      pets,
      imageUrls,
      amountPets,
    },
  }
}
