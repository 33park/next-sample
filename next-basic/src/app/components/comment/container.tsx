import React, { Children, ReactNode } from 'react';
import { Ellipsis } from 'lucide-react';
import { styled } from 'styled-components';
import { theme } from '@/style/styles/theme';
import { flexBox, offSet } from '@/style/styles/common';


interface CommentContainerProps {
    Children: ReactNode;
    commentHeight: string;
    touchDown: () => void;
}

const CommentContainerComponent: React.FC<CommentContainerProps> = ({
    commentHeight,
    touchDown,
    children,
    }): React.JSX.Element => {
    return (
        <>
            <CommentContainer style={{ height: commentHeight }}>
                <UserTouchArea>
                    <button type="button" onClick={touchDown}></button>
                </UserTouchArea>
                <CommentTitle>
                    댓글
                    <button type="button"><Ellipsis /></button>
                </CommentTitle>
                <CommentWrapper>
                    {children}
                </CommentWrapper>
            </CommentContainer>
        </>
    );
};

export default CommentContainerComponent;

/* comment */

const CommentContainer = styled.section`
    ${offSet({ position: 'fixed', bottom: '0', left: '50%' })};
    width: 100%;
    max-width: 46rem;
    height: 100vh;
    transform: translateX(-50%);
    transition: height 0.3s ease;
    z-index: 2;
`;

const UserTouchArea = styled.div`
    ${offSet()}
    ${flexBox({ justify: 'center', align: 'center' })}
    height: 2.4rem;

    button {
        width: 6.4rem;
        height: 0.8rem;
        border-radius: 1rem;
        background-color: ${theme.colors.gray};
    }
`;

const CommentTitle = styled.div`
    position: relative;
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: center;
    font-size: 1.6rem;
    background-color: ${theme.colors.white};

    button {
        ${offSet({ position: 'absolute', top: '0', right: '0' })}
        width: 4rem;
        height: 4rem;
        ${flexBox({ justify: 'center' })};
    }
`;

const CommentWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
`
