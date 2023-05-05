import {  vector } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={vector} alt="logo" className='w-28 object-contain' />
            <button type='button'
            onClick={() => window.open('https://github.com/Fimber')}
            className='black_btn'
            >
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>Summarize your articles with <br className='max-md: hidden' /> <span className='purple_gradient'>GPT-4 Ai assistant</span></h1>
        <h2 className='desc'>
            Save yourself countless hours by using this AI summarizer assistant. Summarize any article in just 5 seconds!
        </h2>
    </header>
  )
}

export default Hero