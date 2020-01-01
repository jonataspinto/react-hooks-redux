import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 220px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px ridge black;
    border-radius: 10px;
    transition: .1s;
    background-color: ${props => props.background};
    &:hover{
        background-color: #fff;
        box-shadow: 0px 0px 20px rgba(139, 139, 138, 0.938); 
        transition: .1s
    }

`
export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`

export const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
`

export const Desc = styled.p`
    font-size: 18px;
    font-weight: bold;
`