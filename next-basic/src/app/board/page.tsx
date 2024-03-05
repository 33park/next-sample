'use client'

import React from 'react'
import { styled } from 'styled-components'
import Board from '@/app/component/Board'
import boardData from "../../../public/api/boardData"

export default function board() {
    return (
        <>
            <UserBoardContainer>
                {boardData.map((data, index) => (
                    <Board
                        key={index}
                        userId={data.userId}
                        userName={data.userName}
                        title={data.title}
                        isLiked={data.isLiked}
                        likedCount={data.likedCount}
                        upLoadedImage={data.upLoadedImage}
                    />
                ))}
            </UserBoardContainer>
        </>
    )
}

const UserBoardContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 46rem;
    margin: 0 auto;
`