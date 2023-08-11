import { DogLogo } from '../../../components/icons/dogLogo'
import { ArrowLeft } from '../../../components/icons/arrowLeft'
import { useRouter } from 'next/router'
import Image from 'next/image'

import photoDog from '../../../assets/profilePet/bannerDog.png'
import { CarouselCard } from './components/carousel'
import { Ray } from '@/components/icons/ray'
import { Maximise } from '@/components/icons/maximise'
import { Circle } from '@/components/icons/circle'

export default function ProfilePet() {
  const router = useRouter()

  const { infoPet } = router.query
  const country = infoPet && infoPet[0]
  const city = infoPet && infoPet[1]
  const idPet = infoPet && infoPet[2]
  return (
    <div className="">
      <aside className="fixed h-screen w-24 flex flex-col items-center justify-between py-8 bg-background">
        <DogLogo />

        <div
          className="p-2 bg-[#F4D35E] rounded-xl hover:cursor-pointer hover:bg-[#F4D82E]"
          onClick={() => router.push(`../../map/${country}/${city}`)}
        >
          <ArrowLeft />
        </div>
      </aside>
      <main className="w-[calc(100% - 6rem)] ml-[6rem] pt-10 ">
        <h1 className="text-[#8FA7B2] text-center text-lg leading-7 font-semibold ">
          Seu novo amigo
        </h1>

        <div className="w-[44rem] mt-10 m-auto ">
          <div className="w-full h-[21rem]">
            <Image
              src={photoDog}
              className="h-full  rounded-t-[1.25rem]"
              alt=""
            />
          </div>

          <div className="px-[4.5rem]">
            <div className="w-full  mt-8 flex gap-4 justify-between">
              <CarouselCard active={true} />
              <CarouselCard active={false} />
              <CarouselCard active={false} />
              <CarouselCard active={false} />
              <CarouselCard active={false} />
            </div>

            <div>
              <h1 className="text-[3.375rem] font-extrabold leading-[3.0375rem] text-[#0D3B66] mt-[4.38rem]">
                Alfredo
              </h1>

              <p className="mt-[1.63rem] text-[#0D3B66] text-lg font-semibold leading-[1.75rem]">
                Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
                fazer companhia, uma bagunça mas também ama uma soneca.
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
                    Muita energia
                  </p>
                </div>

                <div className=" rounded-[1.25rem] border-[#0D3B66] border-2 border-opacity-[0.1] flex flex-col gap-4 justify-center items-start p-5">
                  <div className="flex gap-2">
                    <Maximise />
                  </div>

                  <p className="text-[#0D3B66] text-lg font-semibold lead-[1.125rem]">
                    Ambiente amplo
                  </p>
                </div>

                <div className=" rounded-[1.25rem] border-[#0D3B66] border-2 border-opacity-[0.1] flex flex-col gap-4 justify-center items-start p-5">
                  <div className="flex gap-2">
                    <Circle />
                    <Circle opacity />
                    <Circle opacity />
                  </div>

                  <p className="text-[#0D3B66] text-lg font-semibold lead-[1.125rem]">
                    Pequeninho
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

              <div className="w-full border border-gray-400 mt-[2.5rem]">
                {/* SEPARETOR */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
