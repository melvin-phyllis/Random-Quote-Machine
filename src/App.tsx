
import { useState } from 'react'
import Citation from './components/Citation'
import type { listtype } from './types'

function App() {


  const [list, setList] = useState<listtype[]>([])
  return (
    <>
      <Citation list={list} setList={setList} />
    </>
  )
}

export default App
