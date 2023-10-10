import { DogLogo } from '../../../components/icons/dogLogo'
import { ArrowLeft } from '../../../components/icons/arrowLeft'
import { useRouter } from 'next/router'
import Image from 'next/image'

import photoDog from '../../../assets/profilePet/bannerDog.png'
import { Ray } from '@/components/icons/ray'
import { Maximise } from '@/components/icons/maximise'
import { Circle } from '@/components/icons/circle'
import { Whatsapp } from '@/components/icons/whatsapp'
import { CarouselCard } from '@/components/pet/carousel'
import { RequirementsToAdopt } from '@/components/pet/requirementsToAdopt'
import { api } from '@/lib/axios'
import { GetStaticPaths, GetStaticProps } from 'next'

interface ProfilePetProps {
  pet: {
    id: string
    name: string
    about: string
    size: string
    age: string
    energyLevel: string
    independenceLevel: string
    environment: string
    requirement: string[]

    ImagePet: string[]

    org: {
      address: string
      whatsapp: string
      city: string
      state: string
      zipCode: string
    }
  }
  imageUrls: string[]
}

export default function ProfilePet(props: ProfilePetProps) {
  const router = useRouter()
  const { pet, imageUrls } = props
  const { requirement } = pet
  const firstImage = imageUrls[0]

  return (
    <div className="">
      <aside className="fixed h-screen w-24 flex flex-col items-center justify-between py-8 bg-background">
        <DogLogo />

        <div
          className="p-2 bg-[#F4D35E] rounded-xl hover:cursor-pointer hover:bg-[#F4D82E]"
          onClick={() => router.push(`/`)}
        >
          <ArrowLeft />
        </div>
      </aside>
      <main className="w-[calc(100% - 6rem)] bg-white ml-[6rem] pt-10 pb-5">
        <h1 className="text-[#8FA7B2] text-center text-lg leading-7 font-semibold ">
          Seu novo amigo
        </h1>

        <div className="w-[44rem] mt-10 m-auto ">
          <div className="w-full h-[21rem]">
            <Image
              src={firstImage}
              width={1000}
              height={1000}
              className="h-full w-full rounded-t-[1.25rem]"
              alt=""
            />
          </div>

          <div className="px-[4.5rem]">
            <div className="w-full  mt-8 flex gap-4 justify-start">
              {imageUrls.map((url) => (
                <CarouselCard active={url === firstImage} key={url} url={url} />
              ))}
            </div>

            <div>
              <h1 className="text-[3.375rem] font-extrabold leading-[3.0375rem] text-[#0D3B66] mt-[4.38rem]">
                {pet.name}
              </h1>

              <p className="mt-[1.63rem] text-[#0D3B66] text-lg font-semibold leading-[1.75rem]">
                {pet.about}
              </p>

              <div className="mt-[2.69rem] flex gap-[0.87rem]">
                <div className="p-5 rounded-[1.25rem] border-[#0D3B66] border-2 border-opacity-[0.1] flex flex-col gap-4 justify-center items-center">
                  <div className="flex gap-2">
                    <Ray />
                    <Ray />
                    <Ray />
                    <Ray />
                    <Ray fill />
                  </div>

                  <p className="text-[#0D3B66] text-lg font-semibold lead-[1.125rem]">
                    {pet.energyLevel[0].toUpperCase() +
                      pet.energyLevel.substring(1)}
                  </p>
                </div>

                <div className=" rounded-[1.25rem] border-[#0D3B66] border-2 border-opacity-[0.1] flex flex-col gap-4 justify-center items-start p-5">
                  <div className="flex gap-2">
                    <Maximise />
                  </div>

                  <p className="text-[#0D3B66] text-lg font-semibold lead-[1.125rem]">
                    {pet.environment[0].toUpperCase() +
                      pet.environment.substring(1)}
                  </p>
                </div>

                <div className=" rounded-[1.25rem] border-[#0D3B66] border-2 border-opacity-[0.1] flex flex-col gap-4 justify-center items-start p-5">
                  <div className="flex gap-2">
                    <Circle />
                    <Circle opacity />
                    <Circle opacity />
                  </div>

                  <p className="text-[#0D3B66] text-lg font-semibold lead-[1.125rem]">
                    {pet.size[0].toUpperCase() + pet.size.substring(1)}
                  </p>
                </div>
              </div>

              <div className="w-[34.93613rem]  bg-[#0D3B66]  border border-[#DDE3F0] mt-[4.37rem] rounded-[1.25rem]">
                <iframe
                  className="w-full rounded-[1.25rem]  border-[#DDE3F0] h-[14.1875rem]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2221909792625!2d-45.89313942576105!3d-23.198571879050856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a6c1eaf9987%3A0xbde3c0e3d66203b0!2sR.%20Maj.%20Francisco%20de%20Paula%20Elias%2C%20449%20-%20Jardim%20Sao%20Dimas%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012245-320!5e0!3m2!1spt-BR!2sbr!4v1691704038505!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="w-[34.93613rem] rounded-b-[1.25rem]">
                  <p className="text-[#F4D35E] text-center text-[1.125rem] py-3 font-bold lead-[1.5625rem]">
                    Ver rotas no Google Maps
                  </p>
                </div>
              </div>

              <div className="w-full py-[3.12rem] border-y  border-gray-400 mt-[2.5rem]">
                <div className="flex gap-[1.12rem]">
                  <div className="p-3 flex justify-center items-center bg-orange-600 rounded-2xl">
                    <DogLogo />
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-[#0D3B66] text-[1.875rem] font-bold leading-[1.6875]">
                      Seu Cãopanheiro
                    </h1>

                    <p className="text-[#0D3B66] text-base font-semibold leading-7">
                      {`${pet.org.address[0].toUpperCase()}${pet.org.address.substring(
                        1,
                      )}, ${pet.org.city[0].toUpperCase()}${pet.org.city.substring(
                        1,
                      )} - ${pet.org.state.toUpperCase()}`}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-3 w-[13.5625rem] py-[0.81rem] bg-[#0D3B66] bg-opacity-5 rounded-[0.625rem] ml-[5.5rem] mt-[1.06rem]">
                  <Whatsapp fill={false} />
                  <p>{pet.org.whatsapp}</p>
                </div>
              </div>

              <div className="pt-[3.44rem]">
                <h1 className="text-[#0D3B66] text-[1.875rem] font-bold leading-[1.6875rem]">
                  Requesitos para adoção
                </h1>

                <div className="flex flex-col mt-10 gap-[0.63rem]">
                  <RequirementsToAdopt text="jsjapdijwdjj" />
                </div>
              </div>

              <div className="w-full border-t  border-gray-400 mt-[2.5rem]">
                {/* SEPARETOR */}
              </div>

              <div className="flex items-center justify-center gap-[1.01rem] mt-[4.31rem] w-full h-16 rounded-[1.25rem] bg-[#3CDC8C] hover:bg-[#5bc590] hover:cursor-pointer">
                <Whatsapp fill />
                <p className="text-[1.125rem] leading-[1.625rem] font-extrabold text-white">
                  Entrar em contato
                </p>
              </div>
            </div>
          </div>
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
  const idPet = params?.idPet
  const reply = await api.get(`/pet/${idPet}`)

  const { pet, imageUrls } = reply.data
  const { ImagePet, org } = pet
  return {
    props: {
      pet: {
        id: pet.id,
        name: pet.name,
        about: pet.about,
        size: pet.size,
        age: pet.age,
        energyLevel: pet.energy_level,
        independenceLevel: pet.independence_level,
        environment: pet.environment,
        requirement: pet.requirement,

        ImagePet,

        org: {
          address: org.address,
          whatsapp: org.whatsapp,
          city: org.city,
          state: org.state,
          zipCode: org.zip_code,
        },
      },
      imageUrls,
    },
  }
}
