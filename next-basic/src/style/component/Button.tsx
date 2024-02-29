import React from 'react';
import { styled,css } from 'styled-components'
import { ColorType } from '../styles/theme'


export interface ButtonProps {
    bgColor?: ColorType;
    color?: ColorType;
    btnSize?: String | 'large' | 'middle';
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; //return type
}

type StyleType = Pick<ButtonProps, 'color' | 'bgColor' | 'btnSize'>
type SizeType = Pick<ButtonProps, 'btnSize'>

const Button: React.FC<ButtonProps> = ({ children, color, bgColor, btnSize, ...props }) => {
    return (
        <Wrapper color={color} bgColor={bgColor} btnSize={btnSize} {...props}>
            {children}
        </Wrapper>
    );
};

export default Button;

const sizeStyles = css<SizeType>`
    ${({ btnSize }) =>
        btnSize === 'string' && btnSize !== 'large' && btnSize !== 'middle' &&
        css`
            width: ${btnSize.width}; 
            height: ${btnSize.height};
        `
    }
    ${({ btnSize }) =>
        btnSize === 'large' &&
        css`
            width: 100%;
            height: 4.8rem;
            font-size: 1.6rem;
        `
    }
    ${({ btnSize }) =>
        btnSize === 'middle' &&
        css`
            width: 16rem;
            height: 4rem;
            font-size: 1.2rem;
        `
    }
`


const Wrapper = styled.div<StyleType>`
    color: ${({ theme, color }) => color || theme.colors.black};
    background-color: ${({ bgColor }) => bgColor};
    ${sizeStyles};
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
        border: 1px solid ${({ theme }) => theme.colors.dark};
    }
`