import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Tech from './components/Tech/Tech'
import type { ITechType } from './types/techType'


const techFetch = async(): Promise<ITechType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}


function App() {

  const techPromise = techFetch();

  return (
    <>

      <Nav />
      <Banner />

      <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
        <Tech techPromise={techPromise} />
      </Suspense>

    </>
  )
}

export default App
