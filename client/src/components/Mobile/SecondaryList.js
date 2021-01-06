import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream, faLeaf, faSnowflake, faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

const SecondaryList = ({ showSecondary, setData }) => {
    const handleFilterClick = async (e) => {
        const res = await fetch(`/api/v1/profile/${e}`)
        const data = await res.json();
        await setData(data);
    }

    return (
        <div className={`secondary-list ${showSecondary ? "display" : "display-none"}`}>
            <div
                style={{ backgroundColor: 'green' }}
                className={`menu-button-secondary `}
                onClick={() => handleFilterClick('cream')}
            >
                <FontAwesomeIcon icon={faIceCream} size="1x" />
            </div>
            <div
                style={{ backgroundColor: 'lightgreen' }}
                className={`menu-button-secondary`}
                onClick={() => handleFilterClick('tobacco')}
            >
                <FontAwesomeIcon icon={faLeaf} size="1x" />
            </div>
            <div
                style={{ backgroundColor: 'cyan' }}
                className={`menu-button-secondary `}
                onClick={() => handleFilterClick('menthol')}
            >
                <FontAwesomeIcon icon={faSnowflake} size="1x" />
            </div>
            <div
                style={{ backgroundColor: 'pink' }}
                className={`menu-button-secondary `}
                onClick={() => handleFilterClick('fruit')}
            >
                <FontAwesomeIcon icon={faAppleAlt} size="1x" />
            </div>
        </ div>
    )
}

export default SecondaryList
