import { useState, useEffect } from 'react'

const Carousel = ({ images }) => {
 const [currentImage, setCurrentImage] = useState(0)

 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentImage((currentImage + 1) % images.length)
  }, 4000)

  return () => clearInterval(intervalId)
 }, [currentImage, images.length])

 return (
  <div className="carousel">
   {images.map((image, index) => (
    <div
     key={index}
     className="carousel-image"
     style={{
      backgroundImage: `url(${image.src})`,
      display: index === currentImage ? 'block' : 'none',
     }}
    >
     <div className="carousel-text">
      <h2>{image.title}</h2>
      <p>{image.description}</p>
     </div>
    </div>
   ))}
  </div>
 )
}

export default Carousel
