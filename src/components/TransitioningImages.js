import React, { useState, useEffect } from 'react'
import { Card, CardMedia } from '@mui/material'
import marbelo1 from '../images/marbelo1.jpg'
import marbelo2 from '../images/marbelo2.jpg'
import marbelo3 from '../images/marbelo3.jpg'

const images = [marbelo1, marbelo2, marbelo3]

const TransitioningImages = () => {
 const [currentImageIndex, setCurrentImageIndex] = useState(0)

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }, 5000)
  return () => clearInterval(interval)
 }, [currentImageIndex])

 return (
  <Card sx={{ maxWidth: 505, margin: '0 auto' }}>
   <CardMedia
    sx={{ height: 400 }}
    image={images[currentImageIndex]}
    title="Random Image"
   />
  </Card>
 )
}

export default TransitioningImages
