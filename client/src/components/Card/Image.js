import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';
import "./styles.css"

const Image = ({ src, description, brand, flavor }) => {
    const [overlay, setOverlay] = useState(false);


    return (
        <>
            <div
                onClick={() => setOverlay(!overlay)}
                className={`${overlay ? '' : 'display'} ${isMobile ? "image-overlay-mobile" : "image-overlay"}`}
            >
                <p className={`${isMobile ? "text-overlay-mobile" : "text-overlay"}`}>
                    {description}
                </p>
            </div>
            <img
                className={`${isMobile ? "image-size-mobile" : "image-size"} rounded-circle margin-auto`}
                src={src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`}
                onClick={() => setOverlay(!overlay)}
            />
        </>
    )
}

export default Image
