import { css } from 'styled-components'

// flex setting
interface FlexProps  {
    // ? 는 선택적 속성을 나타냄
    justify?: 'start' | 'center';
    align?:'start' | 'center';
}

                        // 매개변수가 선택적으로 전달
export const flexBox = (props: FlexProps = {}) => css`
    display: flex;
    justify-content: ${props.justify || 'start'};
    align-items: ${props.align || 'center' };
`;

// position setting
interface PositionProps {
    position?: 'relative' | 'absolute' | 'fixed';
    top?: 0 | null;
    right?: 0 | null;
    bottom?: 0 | null;
    left?: 0 | null;
}

export const offSet = (props: PositionProps = {}) => css`
    position: ${props.position || 'relative'};
    top: ${props.top || 'unset'};
    right: ${props.right || 'unset'};
    bottom: ${props.bottom || 'unset'};
    left: ${props.left || 'unset'};
`

// border round
interface BorderProps {
    width?: '.1rme' | '';
    style?: 'solid' | '';
    color?: '#000' | '';
}

export const BorderSet = (props: BorderProps = {}) => css`
    border-width: ${props.width || '.1rem'};
    border-style: ${props.style || 'solid'};
    border-color: ${props.color || '#000'};
`