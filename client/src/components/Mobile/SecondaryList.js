import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream, faLeaf, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

const SecondaryList = (props) => {
    return (
        <div className={`secondary-list ${props.showSecondary ? "display" : "display-none"}`}>
            <div
                style={{ backgroundColor: 'green' }}
                className={`menu-button-secondary `}
            >
                <FontAwesomeIcon icon={faIceCream} size="1x" />
            </div>
            <div
                style={{ backgroundColor: 'lightgreen' }}
                className={`menu-button-secondary`}
            >
                <FontAwesomeIcon icon={faLeaf} size="1x" />
            </div>
            <div
                style={{ backgroundColor: 'cyan' }}
                className={`menu-button-secondary `}
            >
                <FontAwesomeIcon icon={faSnowflake} size="1x" />
            </div>
        </ div>
    )
}

export default SecondaryList
