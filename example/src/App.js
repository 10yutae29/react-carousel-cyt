import React from 'react'
import Carousel from 'react-carousel-cyt'

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Carousel
        // imgs attribute is essential
        imgs={['favicon.ico', 'favicon.ico', 'favicon.ico', 'favicon.ico']}
        imgRatio='2/1'
        width='80%'
      />
    </div>
  )
}

export default App
