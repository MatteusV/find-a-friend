import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Dog from '@/assets/dogs.png'
import { Logo } from '@/components/icons/logo'
import { api } from '@/lib/axios'
import { setCookie } from 'nookies'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormData) {
    try {
      const reply = await api.post('/org/authenticate', {
        email: data.email,
        password: data.password,
      })

      if (reply.data) {
        setCookie(null, '@find-a-friend:orgId', reply.data, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
          sameSite: true,
        })
      }

      await router.push('/')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }

  return (
    <div className="w-full  p-5 max-sm:p-0 flex items-center max-sm:flex-col">
      <header className="md:hidden h-20 w-screen bg-background flex justify-center items-center">
        <Logo />
      </header>

      <aside className="w-[30.5rem] h-[100%] rounded-[1.25rem] p-8 bg-background flex flex-col justify-between items-center max-sm:hidden max-sm:m-0 max-sm:p-0">
        <Logo />

        <Image src={Dog} alt="" />
      </aside>
      <main className="flex-1  flex flex-col items-center">
        <h1 className="text-[#0D3B66] text-[3.375rem] text-center font-bold leading-[90%] tracking-[-0.0675rem] xl:mt-20 2xl:mt-40 max-sm:mt-10 max-sm:text-4xl">
          Boas-vindas!
        </h1>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4 mt-20 max-sm:mt-5"
        >
          <div className="flex flex-col max-sm:mt-5">
            <label htmlFor="email" className="text-[#0D3B66] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="nome@email.com"
              className="rounded-[0.625rem] pl-3 pr-28 py-2 max-sm:p-0 max-sm:px-4 border border-[#D3E2E5] bg-[#F5F8FA] placeholder:font-semibold  placeholder:text-[#0D3B66]"
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
              className="rounded-[0.625rem] pl-3 pr-28 py-2 max-sm:p-0 max-sm:px-4 border border-[#D3E2E5] bg-[#F5F8FA] placeholder:font-semibold  placeholder:text-[#0D3B66]"
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
            className="bg-[#0D3B66] bg-opacity-20 py-2 px-5 flex justify-center items-center rounded-[1.25rem] xl:text-base 2xl:text-xl font-extrabold text-[#0D3B66] leading-[2.125rem]"
            onClick={async () => {
              await router.push('/org/register')
            }}
          >
            Cadastrar minha organização
          </button>
        </form>
      </main>
    </div>
  )
}
