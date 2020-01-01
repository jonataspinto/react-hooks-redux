import React from 'react'
import { CardContainer, Img, Title, Desc } from './CardStyle'

const Card = (props) => (
    <CardContainer>
        <Img src={props.src}/>
        <Title>{props.title}</Title>
        <Desc>{props.email}</Desc>
    </CardContainer>
)

export default Card
