'use client'

import React,{useRef, useState} from 'react'
import { styled } from 'styled-components'
import { MoreHorizontal  } from 'lucide-react';
import { flexBox } from '@/style/styles/common';
import Heart from './icon/Heart'

interface BoardProps {
    userId: number;
    userName: string;
    content: string;
    isLiked: boolean;
    likedCount: number;
    upLoadedImage: string[];
    onLikeToggle: () => void;
    onEdit: () => void;
}


export default function Instargram({ userId, userName, content, isLiked, likedCount, upLoadedImage, onLikeToggle, onEdit }: BoardProps ) {
    const [openEdit, setOpenEdit] = useState(false);
    
    const toggleEdit = ()=>{
        setOpenEdit(prev => !prev);
    }

    return (
            <UserBox>
                <UserUtil>
                    <AlignCenter>
                        <UserIcon src={`/images/uploaded/${userId}/_profile.jpg`} alt={userName} width={50} height={50}/>
                        <span>{userName}</span>
                    </AlignCenter>
                    <button type="button" onClick={toggleEdit}><MoreHorizontal /></button>
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
                    <LikedIcon>
                        {/* <Heart fill={isLiked ? 'gray' : 'red'} stroke={`transparent`}/> */}
                        <Heart onLikeToggle={onLikeToggle}/>
                    </LikedIcon>
                    <span>{likedCount}</span>
                </RightCenter>
                <UserComment><strong>{userId}</strong>{content}</UserComment>
                {openEdit && (
                    <EditBox>
                        <button onClick={onEdit}>Edit</button>
                        <button onClick={() => console.log('Delete clicked')}>Delete</button>
                    </EditBox>
                )}
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
    position: relative;
    flex:1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    margin: 0 0 2rem;
    border-top: .1rem solid #eee;
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

const LikedIcon = styled.div`
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    margin-right: .4rem;
    cursor: pointer;
/* 
    svg{
        width: 100%;
        height: auto;
    } */
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
const EditBox = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    ${flexBox({justify:'flex-end',align:'flex-end'})}
    flex-direction: column;
    box-shadow: 0 0 1rem 0 rgba(58, 58, 61, 0.1);
    button {
        flex:none;
        display: block;
        width: 8rem;
        line-height: 2.4rem;
        border: none;
        background-color: #fff;
        color: black;
        cursor: pointer;
        font-size: 1.1rem;

        &:hover {
            background-color: #eee;
        }
    }
`