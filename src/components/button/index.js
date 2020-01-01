import React from 'react'
import { ButtonContainer } from './ButtonStyled'
// import { makeStyles } from '@material-ui/core/styles'

const Button = (props) =>(
    <ButtonContainer 
        variant={props.variant}
        colors={props.colors}
        color={props.color}
        onClick={props.action}
        disabled={props.disabled}
    >
    {props.value}</ButtonContainer>  
)

export default Button
