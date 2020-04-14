import React from 'react'

const Home = (props) => {

  const { accessories, sneakers } = props

  const showSneakers = () => {
    return sneakers.slice(0, 6).map((sneaker) => {
      return (
        <div className ='mini-img' key={sneaker.id}>
          <img src={sneaker.image} alt={sneaker.name} />
        </div>
      )
    })
  }

  const showAccessories = () => {
    return accessories.slice(0, 6).map((accessory) => {
      return (
        <div className ='mini-img' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name} />
        </div>
      )
    })
  }

  return (
    <>
      <div className='home'>
        <p>hello</p>
      </div>

      <div className='preview'>
        <div className='item-preview'>
          {showSneakers()}
        </div>

        <div className='item-preview'>
          {showAccessories()}
        </div>
      </div>
    </>
  )
}

export default Home