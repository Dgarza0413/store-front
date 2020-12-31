import React, { useState } from 'react';
import ButtonList from './ButtonList';
import './styles.css'

const Button = () => {
    const [show, setShow] = useState(false)

    const handleShowList = () => {
        setShow(!show)
    }

    return (
        <>
            <ButtonList show={show} />
            <div
                className="menu-button"
                onClick={handleShowList}
            >
                {
                    show
                        ? '-'
                        : '+'
                }
            </div>
        </>
    )
}

export default Button
