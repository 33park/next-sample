'use client'

import React,{useState, useEffect} from 'react'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation';
import { flexBox, offSet } from '@/style/styles/common'
import { Send, Heart, Ellipsis } from 'lucide-react';
import Instargram from '@/app/components/Instargram'
import boardData from "../../apis/boardData"
import FooterGnb from '@/app/components/layout/GNB'
// import Comment from '@/app/components/section/Comment'
import { theme } from '@/style/styles/theme';

export default function Board() {
    const router = useRouter();
    const [boardItems, setBoardItems] = useState([]);
    const [handleComment, setHandleComment] = useState(false);
    const [commentHeight, setCommentHeight] = useState("");
    
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
        setCommentHeight('60vh');
        if(commentHeight == '60vh'){
            setCommentHeight('');
            setHandleComment(false);
        }
    }

    const handleInputChange = () => {
    }

    return (
        <>
            {handleComment ? (
                <>
                    <CommentContainer style={{height: commentHeight}}>
                        <UserTouchArea>
                            <button type="button" onClick={touchDown}></button>
                        </UserTouchArea>
                        <CommentTitle>
                            댓글
                            <button type="button"><Ellipsis/></button>
                        </CommentTitle>
                        <RegistCommentSec>
                            <div>
                                <div>
                                    <UserIcon>
                                        <img src={`/images/user/1000000chris/_profile.jpg`} alt={'1000000chris'}/>
                                    </UserIcon>
                                </div>
                                <CommentContentWrap>
                                    <CommentUserId><strong>userid</strong><span>registerd date</span></CommentUserId>
                                    <CommentUserContent>comment</CommentUserContent>
                                    <CommentBtnWrap>
                                        <div><button>답글달기</button><button>숨기기</button></div>
                                        <ShowMoreBtn>답글 1개 더보기</ShowMoreBtn>
                                    </CommentBtnWrap>
                                </CommentContentWrap>
                                <div><Heart/></div>
                            </div>
                        </RegistCommentSec>
                        <WriteArea>
                            <UserIcon>
                                <img src={`/images/user/1000000chris/_profile.jpg`} alt={'1000000chris'}/>
                            </UserIcon>
                            <UserComment>
                                <input 
                                    type="text" 
                                    value="" 
                                    onChange={handleInputChange}/>
                            </UserComment>
                            <button type="submit"><Send /></button>
                        </WriteArea>
                    </CommentContainer>
                    {/* <DimmedBg/> */}
                </>
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
const DimmedBg = styled.div`
    ${offSet({position: 'fixed', bottom:'0', left: '0'})}
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    opacity: 0.9;
`

/* comment */


const CommentContainer = styled.section`
    ${offSet({position: 'fixed', bottom:'0', left: '50%'})};
    width: 100%;
    max-width: 46rem;
    height: 100vh;
    transform: translateX(-50%);
    background-color: ${theme.colors.white};
    transition: height .3s ease;
    z-index: 2;
`

const UserTouchArea = styled.div`
    ${offSet()}
    ${flexBox({justify: 'center', align: 'center'})}
    height: 2.4rem;

    button {
        width: 8rem;
        height: 1rem;
        border-radius: 1rem;
        background-color: ${theme.colors.gray};
    }
`

const WriteArea = styled.div`
    ${flexBox()}
    height: 6.4rem;
    gap:.6rem;
`

const UserIcon = styled.div`
    flex:none;
    width:4rem;
    height: 4rem;
    border-radius: 4rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserComment = styled.label`
    flex:1;
    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.4rem;
        border-radius: 5rem;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
        box-sizing: border-box;
    }
`

const CommentTitle = styled.div`
    position: relative;
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: center;
    font-size: 1.6rem;
    background-color: ${theme.colors.white};

    button {
        ${offSet({position:'absolute', top: '0', right:'0'})}
        width: 4rem;
        height: 4rem;
        ${flexBox({justify:'center'})};
    }
`

const RegistCommentSec = styled.section`
    display: block;
    height: 100%;
    max-height: calc(100% - 12.8rem);
    background-color: ${theme.colors.white};
    
    > div {
        flex:none;
        ${flexBox({align:'flex-start'})}
        width: 100%;
        gap: .8rem;
        background-color: #efefef;
        padding: 1rem;
        box-sizing: border-box;
    }
`

const CommentContentWrap = styled.div`
    width: 100%;
    padding: 0.4rem 0;
    font-size: 1.4rem;

`

const CommentUserId = styled.p`
    line-height: 1;
    margin-bottom: 0.8rem;
    strong {
        font-weight: bold;
    }

    span {
        margin-left: .2rem;
    }
`

const CommentUserContent = styled.p`
    margin-bottom: 1rem;
`

const CommentBtnWrap = styled.div`
    display: block;
    font-size: 1.2rem;
    > div {
        ${flexBox()};
        margin-bottom: 1.6rem;
        gap: 1rem;

        > button {
            text-decoration: underline;
        }
    }
`

const ShowMoreBtn = styled.button`
    position: relative;
    padding-left: 4rem;

    &::before{
        content:'';
        ${offSet({position:'absolute', top: '50%', left:'0'})}
        width: 3.6rem;
        height: .1rem;
        background-color: ${theme.colors.gray};
    }
`