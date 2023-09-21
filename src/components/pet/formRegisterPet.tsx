import { Alert } from '@/components/icons/alert'
import { Plus } from '@/components/icons/plus'
import { Upload } from '@/components/icons/upload'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formPetSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Minimo de 3 caractéres' })
    .max(50, { message: 'Limite de 50 caractéres' }),
  about: z.string().max(300, { message: 'Limite de 300 caractéres.' }),
  energyLevel: z.string(),
  levelOfIndependence: z.string(),
  age: z.string(),
  size: z.string(),
  environment: z.string(),
  file: z.any().refine((val) => val.length > 0, 'File is required'),
})

type FormPetData = z.infer<typeof formPetSchema>

export function FormPet() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormPetData>({
    resolver: zodResolver(formPetSchema),
  })

  const [requirements, setRequirements] = useState<string[]>([])
  const [valueRequirements, setValueRequirements] = useState('')

  function handleChange(event: any) {
    setValueRequirements(event.target.value)
  }

  function handleAddRequirement() {
    setRequirements([...requirements, valueRequirements])
    setValueRequirements('')
  }

  async function handleRegisterPet(data: FormPetData) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    data.file = data.file[0]

    const final = { ...data, requirements }

    const pet = await api.post(
      '/pet/register',
      {
        final,
      },
      config,
    )
  }

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit(handleRegisterPet)}
      className="w-full flex flex-col gap-6 max-sm:w-[100%]"
    >
      <div>
        <label className="text-[#0D3B66]">Nome</label>
        <input
          type="text"
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5]  text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('name')}
        />
        {errors.name && (
          <span className="text-red-500 font-bold">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label className="text-[#0D3B66]">
          Sobre
          <span className="ml-3 text-xs text-[#8FA7B2] leading-[1.25rem]">
            Máximo de 300 catacteres
          </span>
        </label>
        <textarea
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5]  text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('about')}
        />
        {errors.about && (
          <span className="text-red-500 font-bold">{errors.about.message}</span>
        )}
      </div>

      <div>
        <label className="text-[#0D3B66]">Idade</label>
        <select
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5] text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('age')}
        >
          <option value="filhote">Filhote</option>
          <option value="adulto">Adulto</option>
        </select>
      </div>

      <div>
        <label className="text-[#0D3B66]">Porte</label>
        <select
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5] text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('size')}
        >
          <option value="pequeninho">Pequeninho</option>
          <option value="grandão">Grandão</option>
        </select>
      </div>

      <div>
        <label className="text-[#0D3B66]">Nivel de energia</label>
        <select
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5] text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('energyLevel')}
        >
          <option value="baixa">Baixa</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <div>
        <label className="text-[#0D3B66]">Nível de independência</label>
        <select
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5] text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('levelOfIndependence')}
        >
          <option value="baixo">Baixo (Precisa de companhia sempre)</option>
          <option value="grande">
            Grande (Não precisa de companhia sempre)
          </option>
        </select>
      </div>

      <div>
        <label className="text-[#0D3B66]">Ambiente</label>
        <select
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5] text-[#0D3B66] font-semibold text-[1.125rem]"
          {...register('environment')}
        >
          <option value="amplo">Ambiente Amplo</option>
          <option value="curto">Ambiente Curto</option>
        </select>
      </div>

      <label className="text-[#0D3B66]">Fotos</label>
      <div className="flex items-center -mt-5 justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-[#F5F8FA]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload />
            <p className="mt-2 text-sm text-[#0D3B66] font-semibold">
              Arraste e solte o arquivo
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            multiple
            className="hidden"
            accept="image/png, image/jpeg"
            {...register('file')}
          />
        </label>
      </div>

      <h1 className="text-[#0D3B66] mt-16 xl:text-3xl 2xl:text-[2.5rem] font-extrabold leading-[90%]">
        Requisitos para adoção
      </h1>

      <div className="w-full border border-[#D3E2E5] mt-[1.37rem] mb-[2.5rem]"></div>

      <div>
        <label className="text-[#0D3B66]">Requisito</label>
        <input
          type="text"
          value={valueRequirements}
          onChange={handleChange}
          className="w-full py-4 pl-2 bg-[#F5F8FA] rounded-[0.625rem] border border-[#D3E2E5]  text-[#0D3B66] font-semibold text-[1.125rem] placeholder:text-[#0D3B66] placeholder:font-semibold"
          placeholder="Defina um requisito"
        />
      </div>

      <button
        type="button"
        onClick={handleAddRequirement}
        className="w-full flex justify-center items-center mt-4 py-4 pl-4 bg-[#E44449] bg-opacity-10 rounded-[0.625rem] border border-dashed border-[#E44449] text-[#0D3B66] font-semibold text-[1.125rem] placeholder:text-[#0D3B66] placeholder:font-semibold"
      >
        <Plus />
      </button>

      {requirements &&
        requirements.map((requirement) => {
          return (
            <div
              key={requirement}
              className="w-full flex justify-start gap-[0.87rem] pl-10 py-[0.3rem] items-center rounded-[0.625rem] border border-[#F15156] bg-[#f15156] bg-opacity-20"
            >
              <Alert />
              <p className="text-[#F15156] text-[1.125rem] font-semibold leading-7">
                {requirement}
              </p>
            </div>
          )
        })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-[9.56rem] py-2 rounded-[1.25rem] bg-[#F4D35E] text-[#0D3B66] text-center font-extrabold leading-[1.625rem] text-[1.125rem] disabled:cursor-not-allowed"
      >
        Confirmar
      </button>
    </form>
  )
}
