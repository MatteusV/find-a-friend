import { Aside } from '@/components/map/aside'
import { CardPet } from '@/components/map/cardPet'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Map() {
  const [pets, setPets] = useState([])
  const [images, setImages] = useState([])
  const [amoutPet, setAmountPet] = useState(0)

  useEffect(() => {
    async function RequestMyApi() {
      const reply = await api.get('/pet/fetch/sp/sao jose dos campos')
      setPets(reply.data.pets)
      setAmountPet(reply.data.amountPets)
      reply.data.pets.map((data) => {
        setImages(data.ImagePet)
      })
    }
    RequestMyApi()
  }, [])
  return (
    <div className="text-white flex">
      <Aside />
      <main className="bg-[#FDECED] ml-[25.5rem] flex-1 overflow-x-hidden px-4 2xl:px-20 min-h-screen">
        <div className="flex mt-[9.62rem] justify-between">
          <h1 className="text-[#0D3B66] leading-[2.125rem]">
            Encontre <strong>{amoutPet} amigos</strong> na sua cidade
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
              about={pet.about}
              age={pet.age}
              energyLevel={pet.energyLevel}
              environment={pet.environment}
              id={pet.id}
              independenceLevel={pet.independenceLevel}
              name={pet.name}
              requirement={pet.requirement}
              size={pet.size}
              key={pet.id}
              imagesPet={images}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
