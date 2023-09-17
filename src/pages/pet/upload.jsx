import { useState } from 'react'
import { api } from '../../lib/axios'

export default function Upload() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState()
  const formData = new FormData()

  const handleUpload = async (e) => {
    e.preventDefault()

    formData.append('file', image[0])

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    await api.post('/pet/register', formData, config)
  }

  return (
    <div className="w-screen h-screen bg-background text-white flex items-center justify-center">
      <form
        encType="multipart/form-data"
        onSubmit={handleUpload}
        className="flex flex-col"
      >
        <label htmlFor="imagem">imagem</label>
        <input
          type="file"
          name="file"
          onChange={(e) => setImage(e.target.files)}
        />
        <button type="submit" className="bg-yellow-300 rounded-xl mt-8">
          Enviar
        </button>
      </form>
    </div>
  )
}
