import React from 'react'
import "./style/style.css"
const nav = () => {
  return (
    <div>
      <ul>
        <li><a style={{backgroundColor:"pink"}} href="www.gogle.com">About</a></li>
        <li><a className="product" href="www.gogle.com">Products</a></li>
      </ul>
    </div>
  )
}

export default nav