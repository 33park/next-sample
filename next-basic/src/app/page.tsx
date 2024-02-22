'use client'

import React from 'react'
import { styled } from 'styled-components'
import Board from '@/app/component/Board'
import boardData from "../../public/api/boardData"

export default function Page() {
    return (
        <>
            <ul>
                {boardData.map((data, index) => (
                    <Board
                        key={index}
                        userId={data.userId}
                        userName={data.userName}
                        title={data.title}
                        isLiked={data.isLiked}
                        likedCount={data.likedCount}
                    />
                ))}
            </ul>
        </>
    )
}

const UserBoardContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`