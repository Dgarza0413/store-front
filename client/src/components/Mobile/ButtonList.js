import React from 'react';
import { Search, Filter } from 'react-feather';
import './styles.css';

const ButtonList = (props) => {
    console.log(props)
    return (
        <div
            className={`menu-button-list ${props.show ? 'display-none' : 'display'}`}>
            <div className="flex-align-right">
                <div
                    style={{ backgroundColor: 'yellow' }}
                    className={`menu-button-secondary`}>
                    <Search />
                </div>
            </div>
            <div className="flex-align-right">
                <span></span> <div
                    style={{ backgroundColor: 'red' }}
                    className={`menu-button-secondary`}>
                    <Filter color={"white"} />
                </div>
            </div>
        </div>
    )
}

export default ButtonList
