import styled from 'styled-components';
import Icon from '../rock-n-roll-it-icon.png';

export const Wrapper = styled.div`
    height: calc(100% - 56px);
    display: flex;
    align-items: center;
    align-content: center;
    background-image: url(${Icon});
    background-size: contain;
    background-position: center;
`