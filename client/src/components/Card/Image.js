import React from 'react'
import Card from 'react-bootstrap/Card';
import { Image } from 'cloudinary-react';

const Image = ({ src }) => {
    return (
        <Card.Img
            variant="top"
            style={{ height: '18rem' }}
            className="rounded-circle "
            src={src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`} />
    )
}

export default Image
