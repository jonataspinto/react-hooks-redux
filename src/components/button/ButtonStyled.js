import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { lighten } from 'polished'

export const ButtonContainer = styled(Button)`
    &&{
        background: ${props=> 
            props.colors && 
            `linear-gradient(
                45deg, 
                ${props.colors.a} 10%, 
                ${props.colors.b} 90%)
            `
        };
        &&:hover{
            background: ${props=> 
            props.colors && 
            `linear-gradient(
                45deg, 
                ${lighten(0.30, props.colors.a)} 10%, 
                ${lighten(0.30, props.colors.b)} 90%)
            `
        };
        }
        @media screen and (max-width: 600px){
            /* display: ${props => props.hide && 'none'} */
        }
    }
`