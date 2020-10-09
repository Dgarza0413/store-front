import React from 'react'
import Card from 'react-bootstrap/Card';

const Image = () => {
    return (
        <Card.Img
            variant="top"
            className="rounded-circle"
            src={`https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`} />
    )
}

export default Image
