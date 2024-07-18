'use client'

import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

//component
import Instargram from '@/app/components/Instargram';
import FooterGnb from '@/app/components/layout/GNB';
import CommentContainer from '@/app/components/comment/container';
import CommentReply from '@/app/components/comment/reply';
import CommentInput from '@/app/components/comment/input';
import ReplyItemComponent from '@/app/components/comment/reply';

//apis
import boardData from "../../apis/boardData";
import replayData from "../../apis/replayData";

export default function Board() {
    const router = useRouter();
    const [boardItems, setBoardItems] = useState([]);
    const [handleComment, setHandleComment] = useState(false);
    const [commentHeight, setCommentHeight] = useState("");
    const replyInput = useRef(null);
    const [hideReply, setHideReply] = useState(false);
    const [replayItems, setReplayItems] = useState([]);

    useEffect(() => {
        setBoardItems(boardData); // 게시글 데이터
        setReplayItems(replayData); // 덧글 데이터
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
    };

    const showCommentSection = () => {
        setHandleComment((handleComment) => !handleComment);
    };

    const touchDown = () => {
        setCommentHeight('60vh');
        if (commentHeight === '60vh') {
            setCommentHeight('');
            setHandleComment(false);
        }
    };

    const handleReply = () => {
        replyInput.current.focus();
    };

    const hideReplyFn = () => {
        setHideReply(confirm('이 덧글을 정말 숨길까요?'));
        console.log(hideReply);
    };

    const handleInputChange = () => { };

    return (
        <>
            {handleComment && (
                <>
                    <CommentInput />
                    <CommentContainer 
                    Children={undefined} 
                    commentHeight={commentHeight} 
                    touchDown={touchDown}>
                        {replayItems.map((item, index) => (
                            <ReplyItemComponent
                                key={index}
                                userData={item}
                                handleReply={handleReply}
                                hideReplyFn={hideReplyFn}
                            />
                        ))}
                    </CommentContainer>
                </>
            )}
            <FooterGnb userId={''} />
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
`;
