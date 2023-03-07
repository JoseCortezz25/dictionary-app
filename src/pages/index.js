import Head from 'next/head'
import { Header } from '../components/Header/Header'
import { useState, useEffect, useContext } from 'react'
import { getMeaningWord } from 'src/services/dictionary'
import { Meanings } from '../components/Meanings/Meanings'
import { Footer } from '../components/Footer/Footer'
import { Advice } from 'src/components/Advice/Advice'
import { ThemeContext } from 'src/context/useTheme'

import notFoundIcon from '@icons/images/emoji_confused_face.png'
import openBookIcon from '@icons/images/emoji_open_book.png'
import { Loader } from 'src/components/Loader/Loader'

export default function Home() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ status: false, message: '', resolution: '', title: '' })
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.classList.toggle('dark-mode', darkMode);
      html.classList.toggle('light-mode', !darkMode);
    }
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError({ status: false })

    try {
      setLoading(true)
      const result = await getMeaningWord(search)
      setLoading(false)
      setData(result.data[0])
    } catch (error) {
      const { message, resolution, title } = error.response.data
      setError({ status: true, title, message, resolution })
      setLoading(false)
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

      <main className="App container">
        <Header
          setSearch={setSearch}
          search={search}
          handleSubmit={handleSubmit}
        />

        {!error.status ? (
          !loading ? (
            !!data ? (
              <Meanings data={data} />
            ) : (
              search.length > 0 && !!data ? (
                <Advice
                  image={notFoundIcon}
                  title="No Definitions Found"
                  message="Sorry pal, we couldn't find definitions for the word you were looking for.  
                        You can try the search again at later time or head to the web instead."
                />
              ) :
                (
                  <Advice
                    image={openBookIcon}
                    title="Dictionary App"
                    message="Patient, but persistent. Never rushing, always playing the long-term game. Never waiting, always living with a bias toward action."
                  />
                )
            )
          ) : (
            <Loader />
          )
        ) : (
          <Advice
            image={notFoundIcon}
            title={error.title}
            message={`${error.message} ${error.resolution}`}
          />
        )}
        <Footer />
      </main>
    </>
  )
}
