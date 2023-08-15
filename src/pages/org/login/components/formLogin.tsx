/* eslint-disable camelcase */
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { hash } from 'bcryptjs'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function FormLogin() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormData) {
    const { email, password } = data
    const password_hash = await hash(password, 6)

    try {
      await api.post('/org/authenticate', {
        email,
        password: password_hash,
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex  flex-col gap-4 mt-20"
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="text-[#0D3B66] font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="nome@email.com"
          className="rounded-[0.625rem] pl-3 pr-28 py-2 border border-[#D3E2E5] bg-[#F5F8FA] placeholder:font-semibold  placeholder:text-[#0D3B66]"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-red-600 font-semibold">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-[#0D3B66] font-semibold">
          Senha
        </label>
        <input
          type="password"
          placeholder="*****"
          className="rounded-[0.625rem] pl-3 pr-28 py-2 border border-[#D3E2E5] bg-[#F5F8FA] placeholder:font-semibold  placeholder:text-[#0D3B66]"
          {...register('password')}
        />

        {errors.password && (
          <span className="text-red-600 font-semibold">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#0D3B66] py-2 flex justify-center items-center rounded-[1.25rem] xl:text-base 2xl:text-xl font-extrabold text-white
         hover:cursor-pointer disabled:cursor-not-allowed"
      >
        Login
      </button>

      <button
        type="button"
        className="bg-[#0D3B66] bg-opacity-5 py-2 flex justify-center items-center rounded-[1.25rem] xl:text-base 2xl:text-xl font-extrabold text-[#0D3B66] leading-[2.125rem]"
        onClick={async () => {
          await router.push('/org/register')
        }}
      >
        Cadastrar minha organização
      </button>
    </form>
  )
}
