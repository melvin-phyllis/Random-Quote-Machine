import axios from "axios"
import type { Dispatch, SetStateAction } from "react"
import type { Quote } from "../types"


const GetCitaion = async (list: Quote[], setList: Dispatch<SetStateAction<Quote[]>>) => {
  try {
    const req = await axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")

    if (!req) return

    const Array = Object.keys(req?.data?.quotes).map(key => ({
      id: key, ...req?.data?.quotes[key]
    }))


    setList!([...list, ...Array])



  } catch (error) {
    

  }
}

export default GetCitaion