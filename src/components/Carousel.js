import { useState, useEffect } from 'react'

const Carousel = ({ images }) => {
 const [currentImage, setCurrentImage] = useState(0)

 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentImage((currentImage + 1) % images.length)
  }, 6000)

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
      opacity: index === currentImage ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
     }}
    >
     <div className="carousel-text">
      <h2>{image.title}</h2>
      <p>{image.description}</p>
      <div>
       <button
        className="btn"
        style={{
         height: '2rem',
         width: '6rem',
        }}
       >
        {' '}
        enter{' '}
       </button>
      </div>
     </div>
    </div>
   ))}
  </div>
 )
}

export default Carousel
