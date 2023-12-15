import React from 'react'
import Carosel from 'react-carousel-cyt'

const App = () => {
  return (
    <div style={{ width: '100vw' }}>
      <div style={{ width: '80%' }}>
        <Carosel
          // imgs attribute is essential
          imgs={['favicon.ico', 'favicon.ico', 'favicon.ico', 'favicon.ico']}
          imgRatio={'2/1'}
        />
      </div>
    </div>
  )
}

export default App
