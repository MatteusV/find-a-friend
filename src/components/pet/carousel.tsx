import Image from 'next/image'

import dog from '@/assets/profilePet/bannerDog.png'
import { useState } from 'react'

interface CarouselCardProps {
  active: boolean
  url: string
}

export function CarouselCard({ active, url }: CarouselCardProps) {
  const [activeData, setActiveData] = useState(active)

  function handleClick() {
    if (activeData === true) {
      setActiveData(false)
    }
    if (activeData === false) {
      setActiveData(true)
    }
  }
  return (
    <div
      data-active={activeData}
      onClick={handleClick}
      className="w-auto h-auto flex justify-center items-center data-[active=true]:border-[#0D3B66] focus:opacity-60 data-[active=true]:border-4 rounded-[0.9375rem] data-[active=false]:opacity-70 data-[active=true]:opacity-100 hover:cursor-pointer"
    >
      <Image
        src={url}
        alt=""
        width={75}
        height={72}
        className="rounded-lg h-[72px] w-[75px]"
      />
    </div>
  )
}
