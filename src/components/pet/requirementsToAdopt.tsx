import { Alert } from '@/components/icons/alert'

interface RequirementsToAdoptProps {
  text: string
}

export function RequirementsToAdopt({ text }: RequirementsToAdoptProps) {
  return (
    <div className="w-full flex justify-start gap-[0.87rem] pl-10 py-[0.3rem] items-center rounded-[0.625rem] border border-[#F15156] bg-[#f15156] bg-opacity-20">
      <Alert />
      <p className="text-[#F15156] text-[1.125rem] font-semibold leading-7">
        {text}
      </p>
    </div>
  )
}
