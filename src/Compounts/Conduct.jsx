import React from 'react'
import Navbar from './Navbar'

const Conduct = () => {
  return (
    <div>
      <Navbar />
      <div className="container footer">
        <div className="row">
          <div className="col-3">
            
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

export default Conduct
