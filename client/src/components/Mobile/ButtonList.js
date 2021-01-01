import React, { useState } from 'react';
import { Search, Filter, Home } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
import SecondaryList from './SecondaryList';
import './styles.css';

const ButtonList = (props) => {
    const [showSecondary, setShowSecondary] = useState(false)

    return (
        <div className={`${props.show ? 'display' : 'display-none'} menu-button-list `}>
            <div className="flex-align-right">
                <div
                    style={{ backgroundColor: 'yellow' }}
                    className={`menu-button-secondary`}>
                    <FontAwesomeIcon icon={faSearch} size="1x" />
                </div>
            </div>
            <div className="flex-align-right">
                <SecondaryList showSecondary={showSecondary} />
                <div
                    style={{ backgroundColor: 'red' }}
                    className={`menu-button-secondary`}
                    onClick={() => setShowSecondary(!showSecondary)}
                >
                    <FontAwesomeIcon icon={faFilter} size="1x" />
                </div>
            </div>
            <div className="flex-align-right">
                <div
                    style={{ backgroundColor: 'lightblue' }}
                    className={`menu-button-secondary`}
                    onClick={() => { window.scrollTo(0, 0) }}
                >
                    <FontAwesomeIcon icon={faHome} size="1x" />
                    {/* <Home color={"black"} /> */}
                </div>
            </div>
        </div>
    )
}

export default ButtonList
