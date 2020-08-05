import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export default function useAxios(url) {
  const [cards, setCards] = useState([]);
  const addCard = async () => {
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuidv4() }]);
  };
  return [cards, addCard]
}