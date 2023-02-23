import { useParams, Redirect } from 'react-router-dom'
import products from '../../mocks/data.json'

import Rating from '../../components/Rating'
import Server from '../../components/Server'
import Slider from '../../components/Slider'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'

function isValidId(id) {
  return products.some((product) => product.id === id)
}

const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)

  if (!isValidId(productId)) {
    return <Redirect to="../../components/Error" />
  }

  const { title, location, rating, host, equipments, description, pictures } =
    product

  return (
    <div className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct_content">
        <div className="singleproduct_informations">
          <h1 className="singleproduct_title">{title}</h1>
          <p className="singleproduct_location">{location}</p>
          <div className="singleproduct_tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct_rating-and-host">
          <Server host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="singleproduct_dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipement" content={equipments} />
      </div>
    </div>
  )
}

export default SingleProduct
