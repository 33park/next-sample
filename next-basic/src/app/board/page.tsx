'use client'

import React,{useState, useEffect} from 'react'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation';
import Instargram from '@/app/component/Instargram'
import boardData from "../../../public/api/boardData"

export default function Board() {
    const [boardItems, setBoardItems] = useState([]);
    const router = useRouter();
    // 컴포넌트가 마운트될 때 JSON 데이터를 가져와서 boardItems 상태 변수에 설정합니다.
    useEffect(() => {
        setBoardItems(boardData);
    }, []);

    const handleLikeToggle = (itemId) => {
        setBoardItems((prevBoardItems) => {
            // 아이템의 좋아요 상태를 토글하여 새로운 배열을 생성합니다.
            return prevBoardItems.map((item, index) => {
                if (index === itemId) {
                    // isLiked 값에 따라 likedCount를 반대로 계산합니다.
                    const newLikedCount = item.isLiked ? item.likedCount + 1 : item.likedCount - 1;
                    return { ...item, isLiked: !item.isLiked, likedCount: newLikedCount };
                }
                return item;
            });
        });
    };

    const handleUserProfile = (userId) => {
        console.log(userId);
        router.push(`/user/${userId}`);
    }

    return (
        <>
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
    max-width: 46rem;
    margin: 0 auto;
`