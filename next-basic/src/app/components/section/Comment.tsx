'use client'

import React from 'react'
import { styled } from 'styled-components'
import Link from 'next/link';
import { theme } from '@/style/styles/theme'
import { flexBox, offSet } from '@/style/styles/common'


interface CommentProps {
    userDataId: string;
    inputValue: string;
    touchButton: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CommentSection({userDataId, inputValue, touchButton, handleInputChange}:CommentProps) {
    return (
        <>
            <CommentContainer>
                <UserTouchArea>
                    <button type="button" onClick={touchButton}></button>
                </UserTouchArea>
                <CommentTitle>댓글</CommentTitle>
                <RegistCommentSec>contentSec</RegistCommentSec>
                <WriteArea>
                    <UserIcon>
                        <img src={`/images/user/${userDataId}/_profile.jpg`} alt={userDataId}/>
                    </UserIcon>
                    <UserComment>
                        <input 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange}/>
                    </UserComment>
                    <button type="submit"><Send /></button>
                </WriteArea>
            </CommentContainer>

        </>
    )
}

const CommentContainer = styled.section`
    ${offSet({position: 'fixed', bottom:0, left: 0})}
    display: block;
    z-index: 2;
    width: 100%;
    max-width: 46rem;
    height: 100%;
    background-color: ${theme.colors.white};
`

const UserTouchArea = styled.div`
    ${offSet()}
    ${flexBox({justify: 'center', align: 'center'})}
    height: 2.4rem;

    button {
        width: 8rem;
        height: 1rem;
        border-radius: 1rem;
        background-color: ${theme.colors.gray};
    }
`

const WriteArea = styled.div`
    ${flexBox()}
    height: 6.4rem;
    gap:.6rem;
`

const UserIcon = styled.div`
    flex:none;
    width:4rem;
    height: 4rem;
    border-radius: 4rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserComment = styled.label`
    flex:1;
    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.4rem;
        border-radius: 5rem;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
        box-sizing: border-box;
    }
`

const CommentTitle = styled.div`
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: center;
    font-size: 1.6rem;
    background-color: ${theme.colors.white};
`

const RegistCommentSec = styled.section`
    display: block;
    height: calc(100vh - 12.8rem);
`
