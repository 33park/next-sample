'use client'

import React,{useRef, useState} from 'react'
import { styled } from 'styled-components'
import { Heart, MoreHorizontal  } from 'lucide-react';
import { flexBox } from '@/style/styles/common';

interface BoardProps {
    userId: number;
    userName: string;
    content: string;
    isLiked: boolean;
    likedCount: number;
    upLoadedImage: string[];
    onLikeToggle: () => void;
}


export default function Instargram({ userId, userName, content, isLiked, likedCount, upLoadedImage, onLikeToggle }: BoardProps ) {

    return (
            <UserBox>
                <UserUtil>
                    <AlignCenter>
                        <UserIcon src={`/images/user/icon/${userId}.jpg`} alt={userName} width={50} height={50}/>
                        <span>{userName}</span>
                    </AlignCenter>
                    <button type="button"><MoreHorizontal /></button>
                </UserUtil>
                <ImageContainer>
                    <ImageWrapper>
                        {/* 타입스크립트가 image, index에 대한 명시적 타입 */}
                        {upLoadedImage.map((image: string, index: number) => (
                            <ImageBox key={index}>
                                <ThumbnailImage src={`/images/uploaded/${userId}/${image}.jpg`} alt={`Image ${index + 1}`} />
                            </ImageBox>
                        ))}
                    </ImageWrapper>
                </ImageContainer>
                <RightCenter>
                    <LikedIcon onClick={onLikeToggle}>
                        <Heart fill={isLiked ? 'gray' : 'red'} stroke={`transparent`}/>
                    </LikedIcon>
                    <span>{likedCount}</span>
                </RightCenter>
                <UserComment><strong>{userId}</strong>{content}</UserComment>
            </UserBox>
    )
}

const UserUtil = styled.div`
    ${flexBox({justify:'space-between'})}
`
const AlignCenter = styled.p`
    ${flexBox()}
`
const RightCenter = styled.p`
    ${flexBox({justify:'flex-end'})}
`

const UserBox = styled.li`
    flex:1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
    margin: 0 0 20px;
    border-top: 1px solid #eee;
    font-size: 1.6rem;
`
const UserIcon = styled.img`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 4.8rem;
    object-fit: cover;
    margin-right: .4rem;
`
const ImageContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    margin: 1rem 0;
    padding-bottom: 100%;
    overflow: hidden;
`

const ImageWrapper = styled.ul`
    position:absolute;
    top:0;
    left:0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
`

const ImageBox = styled.li`
    flex:none;
    width: 100%;
    height: 100%;
    `

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LikedIcon = styled.i`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 4px;
    cursor: pointer;

    svg{
        width: 100%;
        height: auto;
    }
`
const UserComment = styled.p`
    line-height: 1.25;
    strong {
        display: inline-block;
        margin-right: .4rem;
        font-weight: bold;
    }
    span {
        font-size: 0.9em;
    }
`
