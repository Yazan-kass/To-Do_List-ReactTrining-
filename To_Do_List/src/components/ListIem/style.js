import styled from 'styled-components'
import { Flex } from '../../theme/global';

export const Item =styled(Flex)`
    background: white;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 25px;
    margin: 0 0 20px;
    justify-content: space-between;
    border-radius: 20px;

`
export const InnerTitle = styled.p`
    font-size: 20px;
    color: black;
    width: 70%;
    font-weight: 600;
`