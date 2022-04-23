import React from 'react'

const Title = ({ title, username }) => {
  return (
    <div className="mb-20 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="font-semibold">{username}</p>
    </div>
  )
}

export default Title
