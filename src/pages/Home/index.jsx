import React from 'react'
import { Link } from 'react-router-dom'

import products from '../../mocks/data.json'
import Herobanner from '../../components/Herobanner'
import Thumbnails from '../../components/Thumbnails'

function Home() {
  return (
    <div className="home">
      <div className="home_banner_container">
        <Herobanner />
        <section className="home_products">
          {products.map((product) => {
            return (
              <article key={product.id} className="home_products_single">
                <Link
                  to={`/products/${product.id}`}
                  className="home_products_link"
                >
                  <Thumbnails image={product.cover} title={product.title} />
                </Link>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default Home
