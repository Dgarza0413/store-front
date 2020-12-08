import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
// import { Image } from  'cloudinary-react';

const Image = ({ src, nicotineStrength, size, description }) => {
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
            <div onClick={handleOverlay} className={`image-overlay ${overlay ? 'display' : ''}`}>
                {description}
            </div>
            <Card.Img
                variant="top"
                style={{ height: '16rem' }}
                className="rounded-circle "
                src={src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`}
                onClick={handleOverlay}
            />
            {/* <div ref={ref} className="d-flex position-absolute right bottom">
                <Button onClick={handleClick}>Sizes</Button>
                <Overlay
                    show={show}
                    target={target}
                    placement="right"
                    container={ref.current}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Title as="h3">Strength</Popover.Title>
                        <Popover.Content>
                            {
                                nicotineStrength.map(e => {
                                    return (
                                        <div>
                                            <strong>
                                                {e}
                                            </strong>
                                        </div>
                                    )
                                })
                            }
                        </Popover.Content>
                        <Popover.Title as="h3">Size</Popover.Title>
                        <Popover.Content>
                            {
                                size.map(e => {
                                    return (
                                        <div>
                                            <strong>
                                                {e}
                                            </strong>
                                        </div>
                                    )
                                })
                            }
                        </Popover.Content>
                    </Popover>
                </Overlay>
            </div > */}
        </>
    )
}

export default Image
