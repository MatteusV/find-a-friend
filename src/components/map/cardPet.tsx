import dogAlfredo from '@/assets/cardPet/dogAlfredo.jpeg'
import { DogLogo } from '@/components/icons/dogLogo'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface CardPetProps {
  id: string
  name: string
  about: string
  size: string
  age: string
  energyLevel: string
  independenceLevel: string
  environment: string
  requirement: string[]

  imagesPet: {
    id: string
    name: string
    orginalName: string
  }
}

export function CardPet(props: CardPetProps) {
  const router = useRouter()
  return (
    <div
      onClick={() =>
        router.push({
          pathname: `../pet/profilePet/${props.id}`,
        })
      }
      className="group flex flex-col items-center hover:bg-[#0D3B66] bg-white w-[17.5rem] rounded-[1.25rem] hover:cursor-pointer"
    >
      <Image
        src={dogAlfredo}
        alt=""
        className="mt-0.5 w-[17.125rem] h-[8.4375rem] rounded-[1.2365rem]"
      />

      <div className="-mt-8 bg-background p-[1.3rem] rounded-2xl group-hover:border-[#0D3B66] border-white border-4">
        <DogLogo background />
      </div>
      <h1 className="text-[#0D3B66] font-bold text-lg leading-[1.25rem] pb-[1.06rem]  group-hover:text-white">
        {props.name}
      </h1>
    </div>
  )
}
