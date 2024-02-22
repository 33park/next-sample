import React from 'react'
import Image from 'next/image'

interface BoardProps {
    userId: number;
    userName: string;
    title: string;
    isLiked: boolean;
    likedCount: number;
}

export default function Board({ userId, userName, title, isLiked, likedCount }: BoardProps ) {
    return (
        <div>
            <li>
                <p>
                    <Image src={`/images/user/icon/${userId}.jpg`} alt={userName} width={50} height={50}/>
                    <span>{userName}({userId})</span>
                </p>
                <div>image container</div>
                <p>
                    <span>{isLiked ? 'Liked' : 'Not Liked'}</span>
                    <span>{likedCount}</span>
                </p>
            </li>
        </div>
    )
}
