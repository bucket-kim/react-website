import React from 'react'
import { Link } from 'react-router-dom'
import logoTitle from '../../assets/images/b_logo.png'
import './Home.scss'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={logoTitle} alt="" />
          rian Kim
          <br />
          Artist
        </h1>
        <h2>
          3D Artist / Creative Developer / Dancer
          <br />
          <Link to="/contact" className="flat-bottom">
            Let's link!
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default Home
