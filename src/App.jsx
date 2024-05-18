
import './App.css'
import Navigation from './Navigation'
import Footer from './components/Footer'
import { MegaMenuDefault } from './components/Header'

function App() {
  return (
    <>
      <div className='relative h-screen home '>
        <div className='sticky bg-black/70 w-full z-10 top-0'>
          <MegaMenuDefault />
        </div>
        <div className='rounded-t-xl mt-6 w-full'>
          <Navigation />
        </div>
        <hr className='mt-4' />
        <div className='mt-6'>
          <Footer /> 
        </div>
      </div>


    </>
  )
}

export default App

