import React from 'react'
import './Header.css'
import tours from './tours'
import New from './New';

const Header = () => {
    return (
        <div className='container main'>
            <div className="row">
                <div className="col-6">
                    <h5 className='header1'>Know before you Go </h5>
                    <img src="src/assets/world.png" className='world' alt="world" />
                    <h1 className='header2'>Traveling opens the dore to cereat <spam>memories</spam></h1>
                    <p className="para1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eligendi quas pariatur nobis voluptate iusto eaque unde quisquam, animi ipsa deleniti ab nulla neque provident ad quam esse? Impedit, aut.</p>

                </div>
                <div className="col-2 col-2-1">
                    <img src="src/assets/hero-img01.jpg  " className='hero1' alt="" />

                </div>
                <div className="col-2 col-2-2" >
                    <img src="src/assets/gallery-05.jpg" className='hero2' alt=" " />

                </div>
                <div className="col-2 col-2-3" >
                    <img src="src/assets/hero-img02.jpg" className='hero1 ' alt="" />
                </div>
                <div className="row">
                    <div className="row re">
                        <div className="col-4">
                            <h6>Location</h6>
                            <input  className="in"loctype="text" placeholder='Where are you going' />
                            <div className="vl"></div>
                        </div>
                        
                        <div className="col-4">
                        <h6>Distance</h6>
                        <input className="in" type="text" placeholder='Distance in k/m' />
                        </div>
                        <div className="col-4">
                        <h6>Max people</h6>
                        <input type="text" className="in" placeholder='Count' />
                        </div>
                    </div>
                </div>

            </div>
            <hr className='hr' />
            {/* part2 */}

            <div className="header-2">
                <h4 className="head-red"> What we serve </h4>
                <div className="inner">
                    <div className="row">
                        <div className="col-3 ">
                            <h1 className='best'>We offer Our best <spam>Service</spam></h1>
                        </div>
                        <div className="col-3 col-33">
                            <button className='btn btn1'>
                                <img src="src/assets/weather.png" alt="weather" className='weather' />
                            </button>
                            <h6 className='he'>Calculate Weather</h6>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur! The king of ocean</p>

                        </div>
                        <div className="col-3 col-33">
                            <button className='btn btn1'>
                                <img src="src/assets/customization.png" alt="weather" className='weather' />
                            </button>
                            <h6 className='he'>Customization</h6>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur! The king of ocean</p>
                        </div>
                        <div className="col-3 col-33">
                            <button className='btn btn1'>
                                <img src="src/assets/guide.png" alt="weather" className='weather' />
                            </button>
                            <h6 className='he'>Guide</h6>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur! The king of ocean</p>
                        </div>
                    </div>
                </div>

            </div>




            {/* part3 */}

            <div className="container">
            <h5 className='header11'>Explore </h5>
            <h1>Our features Tours</h1>

            <div className="popular-item">
                { tours.map((item, i) => {
                    return <New key={i} id={item.id} title={item.title} city={item.city} price={item.price} photo={item.photo} rating={item.rating} />
                })}
            </div>
            </div>
            <hr className='hr' />



            {/* part4 */}

            <div className="container">
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


            {/* part5 */}


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

            <br/><br/>
            <hr className='hr' />


            {/* PART4 */}

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

            {/* part7 */}

            <div className="container sub">
                <div className="row">
                    <div className="col-6">
                    <h2 className='tra'>Subscrine now to get useful <spam>Traveling information </spam> </h2>
                    <input type="text" className='input' placeholder='Entery your Email'/>
                    <button className=" btn inputbtn"> Subscribe </button>
                    <p className='bg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reiciendis quo, minus quasi incidunt in sapiente iusto atque. Voluptatibus, eos.
                    </p>
                    </div>
                    <div className="col-5">
                        <img src="src/assets/male-tourist.png" alt=" here" className='here' />
                    </div>
                </div>
            </div><br/>


            {/* footer */}

            <div className="container footer">
                <div className="row">
                 <div className="col-3">
                    <img src="src/assets/logo.png"  className="lof" alt="logo" />
                </div>
                
                <div className="col-3">
                    <h2>Discover</h2>
                    <ul>
                        <li className='ht'>Home</li>
                        <li className='ht'> About</li>
                        <li className='ht'>Tour</li>
                    </ul>
                </div>
                
                <div className="col-3">
                <h2>Quick Link</h2>
                    <ul>
                        <li className='ht'>Gallery</li>
                        <li className='ht'>Login</li>
                        <li className='ht'>Register</li>
                    </ul>
                </div>
                
                <div className="col-3">
                <h2>Contact</h2>
                    <ul>
                        <li className='ht'>Address</li>
                        <li className='ht'>Email</li>
                        <li className='ht'>Phone</li>
                    </ul>
                </div>

                </div>
                
            </div>

        </div>
    )
}

export default Header
