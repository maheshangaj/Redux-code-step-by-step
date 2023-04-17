import React from 'react'
import "../App.css"


const Home = () => {
  return (
    <div>
    <div className='add-to-cart'>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
    </div>
      <h1>HomeComponent</h1>
      <div className='cart-wrapper'>
      <div className='image-wrapper item'>
      <img src='https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png'/>
      </div>
      <div className='text-wrapper item'>
      <span>I-phone</span>
      <span>price-$1000</span>
      </div>
      <div className='btn-wrapper item'>
      <button>Add to cart</button>
      </div>
      </div>
    </div>
  )
}

export default Home
