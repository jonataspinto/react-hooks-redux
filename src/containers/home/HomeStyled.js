import styled from 'styled-components'

export const HomeContainer = styled.div`
    background-color: #c4c4c4;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    @media screen and (min-width: 768px){
        
    }
`

export const Pagination = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    /* padding:10px; */
    Button:last-child{
        margin: 0 0 0 15px;
    }
`