import { css } from 'styled-components'
import {theme} from '@/style/styles/theme'
import {flexBox} from '@/style/styles/common'

export const InputBox = () => css`
    display: block;
    width: 100%;
    line-height: 4rem;
    border: 0.1rem solid ${theme.colors.gray};
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    margin-bottom: 0.8rem;
`

export const Validation = () => css`
    ${flexBox({align:'center'})}
    padding: 0 0 0 .4rem;
    color: ${theme.colors.red};
    font-size: 1.2rem;
    
    svg {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.4rem;
    }
`