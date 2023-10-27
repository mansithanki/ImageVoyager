import React from 'react'

const Card = ({ item }) => {
    return [...Array(item).keys()].map((index) => (
        <div className="animate-pulse" key={index}>
        <div className="bg-gray-300 rounded-lg h-72 shadow-lg p-4">
         
        </div>
      </div>
      ))
}

export default Card