import React from 'react';
import styled from '@emotion/styled';

export const Format = styled.div`
    background-color: #b2d8d8;
    border-radius: 25px;
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const Chip = ({ price, title, quantity }) => {
    return (
        <Format>
            {
                quantity > 0
                    ? <span>&#9989;</span>
                    : <span>&#10060;</span>
            }
            <div>
                ${price}
            </div>
            <div>
                {
                    title === "Default Title"
                        ? ""
                        : `- ${title}`
                }
            </div>
        </Format>
    )
}

export default Chip;