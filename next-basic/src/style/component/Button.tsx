import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType, theme } from '../styles/theme';

export interface ButtonProps {
    bgColor?: ColorType;
    color?: ColorType;
    btnSize?: String | 'large' | 'middle';
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const sizeStyles = css<{ btnSize?: string }>`
    ${({ btnSize }) => {
        switch (btnSize) {
            case 'large':
                return css`
                    width: 100%;
                    height: 4.8rem;
                    font-size: 1.6rem;
                `;
            case 'middle':
                return css`
                    width: 16rem;
                    height: 4rem;
                    font-size: 1.2rem;
                `;
            default:
                return css`
                    width: ${btnSize?.width};
                    height: ${btnSize?.height};
                `;
        }
    }}
`;

const Wrapper = styled.div<{ bgColor?: ColorType; color?: ColorType; btnSize?: string }>`
    color: ${({ theme, color }) => color || theme.colors.black};
    background-color: ${({ bgColor }) => bgColor || theme.colors.gray};
    ${sizeStyles};
    cursor: pointer;
    box-sizing: border-box;
`;

const Button: React.FC<ButtonProps> = ({ children, color, bgColor, btnSize, ...props }) => {
    return (
        <Wrapper color={color} bgColor={bgColor} btnSize={btnSize} {...props}>
            {children}
        </Wrapper>
    );
};

export default Button;
