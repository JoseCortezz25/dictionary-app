import Head from 'next/head'
import { Header } from '../components/Header/Header'
import { useState } from 'react'
import { getMeaningWord } from 'src/services/dictionary'
import { Meaning } from '../components/Meaning/Meaning'
import { Footer } from '../components/Footer/Footer'

export default function Home() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const result = await getMeaningWord(search)
      setLoading(false)
      setData(result.data[0])
    } catch (error) {

    }
  }

  return (
    <>
      <Head>
        <title>Dictionary App</title>
        <meta name="description" content="La aplicación web de diccionario más completa en línea. Busca cualquier palabra y obtén su significado y sinónimos." />
        <meta name="keywords" content="diccionario, palabras, significado, sinónimos, definición" />
        <meta name="author" content="Boring Square" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className='App container'>
        <Header 
          setSearch={setSearch}
          search={search}
          handleSubmit={handleSubmit} 
        />
        {!loading ? (
          !!data ? (
            <Meaning data={data} />
          ) : (
            <p>No hay datos</p>
          )
        ) : (
          <p>Loading </p>
        )}
        <Footer />
      </main>
    </>
  )
}
