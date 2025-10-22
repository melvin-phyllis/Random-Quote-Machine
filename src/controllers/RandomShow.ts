

import type { Quote } from "../types";

const RandomShow = (list: Quote[], setQuote: React.Dispatch<React.SetStateAction<Quote>>) => {
  if (!list) return
  

  const index = Math.floor(Math.random() * list.length)
  const random: Quote = list[index]

  setQuote(random)

}

export default RandomShow