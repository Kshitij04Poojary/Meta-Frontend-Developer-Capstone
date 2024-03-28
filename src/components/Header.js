import React from 'react'
import {Link} from 'react-router-dom'
import bannerImg from '../images/banner.jpg'
export const Header = () => {
  return (
    <header className="header">
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. 
                Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads,
                 is a testament to our belief that food is an art.
                </p>
                <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>

            <div className="banner-img">
                <img src={bannerImg} alt="banner"/>
            </div>
        </section>
    </header>
  )
}
