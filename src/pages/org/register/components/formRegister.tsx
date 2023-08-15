import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { hash } from 'bcryptjs'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  zipCode: z.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  address: z.string(),
  whatsapp: z
    .string()
    // eslint-disable-next-line no-useless-escape
    .regex(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, {
      message: 'Digite seu número como o exemplo.',
    }),
  password: z.string().min(5, { message: 'Digite mais de 5 caractéres.' }),
  confirmPassword: z.string().min(5),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function FormRegisterOrg() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  async function handleRegister(data: RegisterFormData) {
    if (data.password === data.confirmPassword) {
      try {
        const passwordHash = await hash(data.password, 6)
        await api.post('/org/register', {
          name: data.name,
          email: data.email,
          zipCode: data.zipCode,
          address: data.address,
          whatsapp: data.whatsapp,
          password: passwordHash,
        })

        await router.push('/org/login')
      } catch (err) {
        if (err instanceof AxiosError && err?.response?.data?.message) {
          alert(err.response.data.message)
          return
        }
        console.error(err)
      }
    } else {
      throw new Error('A senhas precisam ser iguais.')
    }
  }
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Nome do responsável
        </label>
        <input
          type="text"
          placeholder="Antônio Bandeira"
          {...register('name')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.name && (
          <span className="text-red-600 font-bold">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="nome@email.com"
          {...register('email')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.email && (
          <span className="text-red-600 font-bold">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          CEP
        </label>
        <input
          type="text"
          placeholder="12345-678"
          {...register('zipCode')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />
        {errors.zipCode && (
          <span className="text-red-600 font-bold">
            {errors.zipCode.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Endereço
        </label>
        <input
          type="text"
          placeholder="rua do meio"
          {...register('address')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.address && (
          <span className="text-red-600 font-bold">
            {errors.address.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Whatsapp
        </label>
        <input
          type="text"
          placeholder="(12) 12345-6789"
          {...register('whatsapp')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.whatsapp && (
          <span className="text-red-600 font-bold">
            {errors.whatsapp.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Senha
        </label>
        <input
          type="password"
          placeholder="*****"
          {...register('password')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.password && (
          <span className="text-red-600 font-bold">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[#0D3B66] xl:text-sm 2xl:text-base font-semibold">
          Confirma senha
        </label>
        <input
          type="password"
          placeholder="*****"
          {...register('confirmPassword')}
          className="pl-5 pr-20 py-1 rounded-[0.625rem] border border-[#D3E2E5] bg-[#F5F8FA] placeholder:text-[#0D3B66] 2xl:placeholder:text-base xl:placeholder:text-sm placeholder:font-semibold"
        />

        {errors.confirmPassword && (
          <span className="text-red-600 font-bold">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-center w-full bg-[#0D3B66] rounded-[1.25rem] text-white py-3 mt-2 hover:cursor-pointer disabled:cursor-not-allowed"
      >
        Cadastrar
      </button>

      <a
        href="../org/login"
        className="text-center text-[#0D3B66] text-base font-extrabold leading-[2.125rem]"
      >
        Já possui conta?
      </a>
    </form>
  )
}
