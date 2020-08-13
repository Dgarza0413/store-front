import React from 'react';
import styled from '@emotion/styled';

export const Format = styled.div`
    background-color: #b2d8d8;
    border-radius: 25px;
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
`

const Chip = ({ price, title, quantity }) => {
    return (
        <Format>
            {
                quantity > 0
                    ? <div>&#9989;</div>
                    : <div>&#10060;</div>
            }
            <div>
                ${price}
            </div>
            <div>
                {
                    title === "Default Title"
                        ? ""
                        : `-${title}`
                }
            </div>
        </Format>
    )
}

export default Chip;