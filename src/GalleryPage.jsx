import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import card1 from './assets/Gallery/card.jpg'
import card2 from './assets/Gallery/card2.jpg'
import QuickContact from './components/QuickContact'
export default function GalleryPage() {
  let data = [
    {
        src: card1,
    },
    {
        src: card2,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },
    {
        src: card1,
    },

]
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
      <Gallery  data={data} cols={4} heading={`" Budget Me Best Servce "`}/>

    <QuickContact/>
      </main>
      <Footer/>
    </>
  )
}
