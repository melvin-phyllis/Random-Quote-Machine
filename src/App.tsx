
import { useState } from 'react'
import Citation from './components/Citation'
import type { Quote } from './types'

function App() {


  const [list, setList] = useState<Quote[]>([])
  return (
    <>
      <Citation list={list} setList={setList} />
    </>
  )
}

export default App
