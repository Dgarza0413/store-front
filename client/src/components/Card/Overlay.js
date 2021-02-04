import React, { useState } from 'react'
import "./styles.css";

const Overlay = (props) => {
    const [overlay, setOverlay] = useState(false);

    return (
        <div
            onClick={() => setOverlay(!overlay)}
            className={`image-overlay ${overlay ? '' : 'display'}`}
        >
            <p className="text-overlay">
                {props.description}
            </p>
        </div>
    )
}

export default Overlay;