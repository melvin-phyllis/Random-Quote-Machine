import { useEffect, useState } from "react";
import { AiOutlineDingtalk } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaTumblr } from "react-icons/fa";
import GetCitaion from "../controllers/GetCitaion";
import RandomShow from "../controllers/RandomShow";
import type { Quote, QuoteListProps } from "../types";

const Citation = ({ list, setList }: QuoteListProps) => {

  const [quote, setQuote] = useState<Quote>({
    quote: "",
    author: ""

  })

  useEffect(() => { GetCitaion(list, setList) }, [])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  bg-amber-600">
        <div id="wrapper" >
          <div className="gap-1 flex flex-col bg-amber-50 rounded-2xl p-5  " id="quote-box">

            <div className="quote-text flex flex-col gap-3 " id="">
              <div className=" flex justify-start ">

              </div>
              <span className="text-center text-2xl w-full md:w-200 h-30 "><AiOutlineDingtalk className="text-3xl " />{!quote.quote ? ("Un clic sur le boutonsuffit pour faire apparaître une nouvelle étincelle de sagesse !") : (quote.quote)} </span>
              <div className=" flex justify-end ">
                <AiOutlineDingtalk className="text-3xl" />
              </div>
            </div>

            <div className="quote-author text-end mt-10" id="">
              <span className="author">{quote.author} </span>
            </div>

            <div className="buttons text-end flex items-center  mt-10 justify-around" id="">
              <ul className="text-start flex gap-3">
                <li className="bg-amber-700 text-white font-bold text-xl p-2"><a href="" id="tweet-quote"><CiTwitter /></a></li>
                <li className="bg-amber-700 text-white font-bold text-xl p-2"><a href="" id="tumblr-quote"><FaTumblr /></a></li>
              </ul>
              <button type="button" onClick={() => RandomShow(list, setQuote)} id="new-quote" className="bg-amber-700 text-white font-bold p-2 btn btn-soft btn-warning">New quote</button>
            </div>

          </div>
          <div className="footer font-bold text-center text-white  text-xl"> By Melvin.DEV</div>
        </div>
      </div>
    </>
  )
}

export default Citation