'use client'

import React,{useState, useEffect} from 'react'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation';
import { offSet } from '@/style/styles/common'
import Instargram from '@/app/components/Instargram'
import boardData from "../../apis/boardData"
import FooterGnb from '@/app/components/layout/GNB'
import Comment from '@/app/components/section/Comment'
import { theme } from '@/style/styles/theme';

export default function Board() {
    const router = useRouter();
    const [boardItems, setBoardItems] = useState([]);
    const [handleComment, setHandleComment] = useState(false);
    
    useEffect(() => {
        setBoardItems(boardData);
    }, []);

    const handleLikeToggle = (itemId) => {
        setBoardItems((prevBoardItems) => {
            return prevBoardItems.map((item, index) => {
                if (index === itemId) {
                    const newLikedCount = item.isLiked ? item.likedCount + 1 : item.likedCount - 1;
                    return { ...item, isLiked: !item.isLiked, likedCount: newLikedCount };
                }
                return item;
            });
        });
    };

    const handleUserProfile = (userId) => {
        router.push(`/user/${userId}`);
    }

    const showCommentSection = () => {
        setHandleComment(handleComment => !handleComment)
    }

    const touchDown = () => {
        console.log('touchDown');
        
    }

    return (
        <>
            {handleComment ? (
                <CommentSection>
                    <Comment touchButton={() => touchDown()}/>
                    {/* <DimmedBg/> */}
                </CommentSection>
            ) : null}
            <FooterGnb userId={''}/>
            <UserBoardContainer>
                {boardItems.map((data, index) => (
                    <Instargram
                        key={index}
                        itemId={index}
                        userId={data.userId}
                        userName={data.userName}
                        content={data.content}
                        isLiked={data.isLiked}
                        likedCount={data.likedCount}
                        upLoadedImage={data.upLoadedImage}
                        onUserRoute={() => handleUserProfile(data.userId)}
                        onLikeToggle={() => handleLikeToggle(index)}
                        onOpenComment={() => showCommentSection()}
                        // onEdit={() => handleUserProfile(data.userId)}
                    />
                ))}
            </UserBoardContainer>
        </>
    );
}


const UserBoardContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 0 auto;
`
const CommentSection = styled.div`
    ${offSet()}
`
const DimmedBg = styled.div`
    ${offSet({position: 'fixed', bottom:0, left: 0})}
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    opacity: 0.9;
`