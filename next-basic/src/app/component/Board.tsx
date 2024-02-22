import React from 'react'
import { styled } from 'styled-components'
// import Image from 'next/image'
import { Heart } from 'lucide-react';

interface BoardProps {
    userId: number;
    userName: string;
    title: string;
    isLiked: boolean;
    likedCount: number;
}

export default function Board({ userId, userName, title, isLiked, likedCount }: BoardProps ) {
    return (
            <UserBox>
                <AlignCenter>
                    <UserIcon src={`/images/user/icon/${userId}.jpg`} alt={userName} width={50} height={50}/>
                    <span>{userName}({userId})</span>
                </AlignCenter>
                <ImageContainer>image container</ImageContainer>
                <AlignCenter>
                    <Heart fill={isLiked ? 'gray' : 'red'} stroke={`transparent`}/>
                    <span>{likedCount}</span>
                </AlignCenter>
                <p>{title}</p>
            </UserBox>
    )
}


const AlignCenter = styled.p`
    display: flex;
    align-items: center;
`
const UserBox = styled.li`
    flex:1;
    display: inline-flex;
    flex-direction: column;
    width: 33.3%;
`
const UserIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
    margin-right: 4px;
`
const ImageContainer = styled.div`
    margin: 10px 0;
`