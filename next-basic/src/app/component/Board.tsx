import React from 'react'
import { styled } from 'styled-components'
import { Heart } from 'lucide-react';

interface BoardProps {
    userId: number;
    userName: string;
    title: string;
    isLiked: boolean;
    likedCount: number;
    upLoadedImage: string[];
}

export default function Board({ userId, userName, title, isLiked, likedCount, upLoadedImage }: BoardProps ) {
    return (
            <UserBox>
                <AlignCenter>
                    <UserIcon src={`/images/user/icon/${userId}.jpg`} alt={userName} width={50} height={50}/>
                    <span>{userName}({userId})</span>
                </AlignCenter>
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
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    margin: 10px 0;
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