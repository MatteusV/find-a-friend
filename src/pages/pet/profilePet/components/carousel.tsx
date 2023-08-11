import Image from 'next/image'

import dog from '@/assets/profilePet/bannerDog.png'
import { useState } from 'react'

interface CarouselCardProps {
  active: boolean
}

export function CarouselCard({ active }: CarouselCardProps) {
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
      className="w-20 h-20 data-[active=true]:border-[#0D3B66] focus:opacity-60 data-[active=true]:border-4 rounded-[0.9375rem] data-[active=false]:opacity-30 data-[active=true]:opacity-100 hover:cursor-pointer"
    >
      <Image src={dog} alt="" className="rounded-lg" />
    </div>
  )
}
