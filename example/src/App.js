import React from 'react'
import Carosel from 'react-carousel-cyt'

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Carosel
        imgRatio={'2/1'}
        imgs={['favicon.ico', 'favicon.ico', 'favicon.ico', 'favicon.ico']}
      />
    </div>
  )
}

export default App
