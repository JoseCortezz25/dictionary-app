import axios from 'axios'
const API = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const getMeaningWord = (word) => {
  return axios.get(`${API}/${word}`);
}