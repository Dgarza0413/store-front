import React, { useState, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
// import { Image } from  'cloudinary-react';



const Image = ({ src, nicotineStrength, size }) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        console.log(event.target)
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <>
            <Card.Img
                variant="top"
                style={{ height: '18rem' }}
                className="rounded-circle "
                src={src || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`} />
            <div ref={ref} className="d-flex position-absolute right bottom">
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
            </div >
        </>
    )
}

export default Image
