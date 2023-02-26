import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./Meaning.module.css";

const Meaning = ({ data }) => {
  console.log("data", data);
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
        <div className={styles.Meaning__sound}>vliece</div>
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

export { Meaning };
