import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
  <>
    <Navbar/><div className="container">
                <div className="row">
                    <div className="col-6">
                    <h5 className='header111'>Experence </h5>
                    <h1>With our all experence we will serve you</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam in rerum vero quod assumenda repudiandae reiciendis hic pariatur? Sed, amet.</p>
                    <button className='btn btnw'>12k+</button>
                    <button  className='btn btnw'> 2k+</button>
                    <button  className='btn btnw'> 15k+</button>
                    <p className='test'> Sussesssfull trip</p>
                    <p className='test'> Regular clients</p>
                    <p className='test1 '> Year Experence </p>
                

                    </div>
                    <div className="col-6">
                        <img src="src/assets/experience.png" className='experence' alt="express" />
                    </div>
                </div>
            </div>




            
            <div className="container">

            <h5 className='header111'>Fans Love</h5>
            <h1>
            What oru fans saying about us 
            </h1>
            <div className="row">
                <div className="col-4 col-44">
                    <p className='para1w'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit molestias a praesentium reiciendis officiis sapiente consequuntur nesciunt perferendis illo doloribus ducimus voluptate pariatur  repellat!</p>
                    <div className="row">
                        <div className="col-4">
                        <img src="src/assets/ava-1.jpg"  className="avatar"alt="avatar" />
                        </div>
                        <div className="col-6">
                            
                    <h6 className='name'>Jhon Doe</h6><br/>
                    <p className='na'>Customer</p>
                        </div>
                    </div>
                  
                </div>
                <div className="col-4  col-44">
                <p className='para1w'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit molestias a praesentium reiciendis officiis sapiente consequuntur nesciunt perferendis illo doloribus ducimus voluptate pariatur  repellat!</p>
                    <div className="row">
                        <div className="col-4">
                        <img src="src/assets/ava-2.jpg"  className="avatar"alt="avatar" />
                        </div>
                        <div className="col-6">
                            
                    <h6 className='name'>Jhon Doe</h6><br/>
                    <p className='na'>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-4  col-44">
                <p className='para1w'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit molestias a praesentium reiciendis officiis sapiente consequuntur nesciunt perferendis illo doloribus ducimus voluptate pariatur  repellat!</p>
                    <div className="row">
                        <div className="col-4">
                        <img src="src/assets/ava-3.jpg"  className="avatar"alt="avatar" />
                        </div>
                        <div className="col-6">
                            
                    <h6 className='name'>Jhon Doe</h6><br/>
                    <p className='na'>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>


  </>
  )
}

export default About
