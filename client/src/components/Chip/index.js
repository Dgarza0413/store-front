import React from 'react';
import styled from '@emotion/styled';

export const Format = styled.span`
    background-color: #b2d8d8;
    border-radius: 25px;
    margin: 10px;
    padding: 5px 10px;
`

const Chip = ({price, title, quantity}) => {
    const xChar = `$`
    return (
        <Format>
          {quantity > 0 ?<span>&#9989;</span> : <span>&#10060;</span>} ${price} <span>{title === "Default Title"? "" : `- ${title}`}</span>
        </Format>
    )
}

export default Chip;