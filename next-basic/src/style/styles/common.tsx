import { css } from 'styled-components'

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