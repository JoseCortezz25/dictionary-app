import React, { useRef } from "react";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./Meanings.module.css";

const Meanings = ({ data }) => {
  const audioPlayer = useRef(null);

  const handleAudioPlayer = () => {
    if (audioPlayer.current.paused || audioPlayer.current.ended) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <section className={styles.Meaning}>
      <div className={styles.Meaning__header}>
        <nav>
          <h1>{data.word}</h1>
          {data.phonetic ? (
            <span>{data?.phonetic}</span>
          ) : (
            <span>{data?.phonetics[1]?.text}</span>
          )}
        </nav>
        <div className={styles.Meaning__sound}>
          {data.phonetics.length > 0 ? (
            <>
              <button
                className={styles.audio__player}
                onClick={handleAudioPlayer}
              >
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M175 .024V1920l1570.845-959.927z"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <audio controls ref={audioPlayer} className="hidden">
                <source
                  src={data.phonetics[data.phonetics.length - 1].audio}
                  type="audio/mp3"
                />
                Tu navegador no soporta la etiqueta de audio.
              </audio>
            </>
          ) : null}
        </div>
      </div>
      {data.meanings.map(({ partOfSpeech, definitions }) => (
        <>
          <Subtitle subtitle={partOfSpeech} />
          <h3 className={styles.Meaning__subtitle}>Meaning</h3>
          <ul>
            {definitions.map((definition) => (
              <li key={definition.definition} className={styles.definition}>
                <p>{definition.definition}</p>
                {definition.example && (
                  <p className={styles.example}>{definition.example}</p>
                )}
              </li>
            ))}
          </ul>
        </>
      ))}
    </section>
  );
};

export { Meanings };
