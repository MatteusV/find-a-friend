import { Aside } from '@/components/map/aside'
import { CardPet } from '@/components/map/cardPet'
import { api } from '@/lib/axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'

// interface MapProps {
//   pets: [
//     {
//       id: string
//       name: string
//     },
//   ]
//   imageUrls: string[]
//   amountPets: number
// }
// { amountPets, imageUrls, pets }: MapProps
export default function Map() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pet = [
    {
      id: '1',
      name: 'Fido',
      about: 'Friendly dog',
      size: 'pequeninho',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Indoor',
      requirement: 'Regular exercise and playtime',
      type: 'dog',
    },
    {
      id: '2',
      name: 'Whiskers',
      about: 'Playful cat',
      size: 'grandão',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Indoor',
      requirement: 'Cat tree and toys',
      type: 'cat',
    },
    {
      id: '3',
      name: 'Rocky',
      about: 'Adventurous hamster',
      size: 'pequeninho',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Cage',
      requirement: 'Wheel and nesting materials',
      type: 'dog',
    },
    {
      id: '4',
      name: 'Spike',
      about: 'Cuddly hedgehog',
      size: 'grandão',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Enclosed space',
      requirement: 'Hideout and insectivore diet',
      type: 'cat',
    },
    {
      id: '5',
      name: 'Mittens',
      about: 'Gentle giant cat',
      size: 'pequeninho',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Indoor',
      requirement: 'Soft bedding and scratching post',
      type: 'dog',
    },
    {
      id: '6',
      name: 'Bubbles',
      about: 'Playful goldfish',
      size: 'pequeninho',
      age: 'adulto',
      energy_level: 'alta',
      independence_level: 'baixa',
      environment: 'Aquarium',
      requirement: 'Filtered water and appropriate fish food',
      type: 'cat',
    },
  ]
  const amountPets = 6
  const imageUrls =
    'https://firebasestorage.googleapis.com/v0/b/find-a-friend-395521.appspot.com/o/808aa26061e4c5116375c38c66bc7a785ebb9626a655a103b866337ec29dd9c73b758d22e0b26bde3fea0338263fd5eb51bdea77578c48bb889b0dcb1cccc1c2.jpeg?alt=media&token=f8679cc6-656f-4bb2-be05-a0cb6a61a646'

  const [pets, setPets] = useState(pet)

  function handleChangeTypePet(e: ChangeEvent<HTMLSelectElement>) {
    switch (e.target.value) {
      case 'cachorros':
        // eslint-disable-next-line no-case-declarations
        const dogs = pet.filter((pet) => pet.type === 'dog')
        setPets(dogs)
        break
      case 'gatos':
        // eslint-disable-next-line no-case-declarations
        const cats = pet.filter((pet) => pet.type === 'cat')
        setPets(cats)
        break
      default:
        setPets(pet)
        break
    }
  }

  return (
    <div className="text-white flex max-sm:flex-col">
      <Aside />
      <main className="bg-[#FDECED] ml-[25.5rem] flex-1 overflow-x-hidden px-4 2xl:px-20 min-h-screen max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:p-0">
        <div className="flex mt-[9.62rem] justify-between max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-5">
          <h1 className="text-[#0D3B66] leading-[2.125rem]">
            Encontre <strong>{amountPets} amigos</strong> na sua cidade
          </h1>

          <select
            name="typePet"
            id="typePet"
            className="w-[13.125rem] h-12 rounded-[0.9375rem] text-[#0D3B66] text-center bg-[#FBE1E2]"
            onChange={handleChangeTypePet}
          >
            <option value="gatos e cachorros">Gatos e Cachorros</option>
            <option value="cachorros">Cachorros</option>
            <option value="gatos">Gatos</option>
          </select>
        </div>

        <div className="w-full mt-14 grid grid-cols-2 2xl:grid-cols-3 gap-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:p-0">
          {pets.map((pet) => (
            // <CardPet
            //   key={pet.id}
            //   id={pet.id}
            //   name={pet.name}
            //   imagesPet={imageUrls[0]}
            // />
            <CardPet
              id={pet.id}
              name={pet.name}
              key={pet.id}
              imagesPet={imageUrls}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const state = params!.local![0]
//   const city = params!.local![1]

//   const reply = await api.get(`/pet/fetch/${state}/${city}`)
//   const { pets, amountPets, imageUrls } = reply.data
//   return {
//     props: {
//       pets,
//       imageUrls,
//       amountPets,
//     },
//   }
// }
