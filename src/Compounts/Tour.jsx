import React from 'react'
import Navbar from './Navbar'
import New from './New'
import tours from './tours'

const Tour = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="container">
        <h5 className='header11'>Explore </h5>
        <h1>Our features Tours</h1>

        <div className="popular-item">
          {tours.map((item, i) => {
            return <New key={i} id={item.id} title={item.title} city={item.city} price={item.price} photo={item.photo} rating={item.rating} />
          })}
        </div>
      </div>
      <hr className='hr' />
    </div>
    <div className="container">
                <h1>Vist Oru customer tour <spam>Gallery</spam></h1>
                <div className="con">
                    <img src="src/assets/gallery-01.jpg"  className="img1"alt="" />
                    <img src="src/assets/gallery-07.jpg"  className="img7"alt="" />
                    <img src="src/assets/gallery-02.jpg"  className="img2"alt="" />
                    <img src="src/assets/gallery-06.jpg"  className="img6"alt="" />
                    <img src="src/assets/gallery-05.jpg"  className="img5"alt="" />
                    <img src="src/assets/gallery-04.jpg"  className="img4"alt="" />
                    <img src="src/assets/gallery-03.jpg"  className="img3"alt="" />
                    <img src="src/assets/gallery-07.jpg"  className="img77"alt="" />
                    
                

                </div>
                </div>
    </>
  )
}

export default Tour
