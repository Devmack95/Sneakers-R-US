import React from 'react'

const Home = (props) => {

  const { accessories, sneakers } = props

  const showSneakers = () => {
    return sneakers.slice(0, 6).map((sneaker) => {
      return (
        <div className='home_preview' key={sneaker.id}>
          <img src={sneaker.image} alt={sneaker.name} />
        </div>
      )
    })
  }

  const showAccessories = () => {
    return accessories.slice(0, 6).map((accessory) => {
      return (
        <div className='home_preview' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name} />
        </div>
      )
    })
  }
  return (
    <>
      <div className='home_sneaker'>
        <img src='https://odyssey.antiochsb.edu/wp-content/uploads/2016/01/sneaker-collage.png'/>
      </div>

      <div className='preview'>
        <div className='sneaker-preview'>
          sneakers
          {showSneakers()}
        </div>

        <div className='accessories-preview'>
          accessories
          {showAccessories()}
        </div>
      </div>
    </>
  )
}

export default Home