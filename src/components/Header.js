import React from 'react'

const Header = ({ children }) => {
    return (
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl font-extrabold mb-4">Find Beautiful Images</h1>
          <p className="text-white text-lg mb-8">Discover stunning images from around the world.</p>
          {children}
        </div>
      </div>
  )
}

export default Header