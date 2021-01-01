import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
// import { Image } from  'cloudinary-react';

const Image = ({ src, nicotineStrength, size, description, width, height }) => {
    const [show, setShow] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleOverlay = (e) => {
        setOverlay(!overlay)
    }

    return (
        <>
            <div
                onClick={handleOverlay}
                className={`image-overlay ${overlay ? 'display' : ''}`}
            >
                <div className="text-overlay">
                    {description}
                </div>
            </div>
            <Card.Img
                variant="top"
                className="rounded-circle"
                src={src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`}
                onClick={handleOverlay}
            />
        </>
    )
}

export default Image
