import Hero from '@/components/home/Hero'
import React from 'react'

const Home = () => {
  return (
    <main className='w-full h-auto'>
      <div className='max-w-[820px] mx-auto flex justify-center items-center'>
        <Hero />
      </div>
    </main>
  )
}

export default React.memo(Home)