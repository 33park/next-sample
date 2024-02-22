'use client'

import React from 'react'
import Board from '@/app/component/Board'
import boardData from "../../public/api/boardData"

export default function Page() {
    return (
        <>
            <h1>Hello, Next.js!</h1>
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