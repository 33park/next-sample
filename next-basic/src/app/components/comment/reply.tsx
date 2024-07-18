import React, { ReactNode } from "react";
import { styled } from 'styled-components';
import { theme } from '@/style/styles/theme';
import { flexBox, offSet } from '@/style/styles/common';
import { Heart } from 'lucide-react';

interface UserDataProps {
    userId: number;
    registDate: string;
    userContent: string;
    replies: UserDataProps[]; // 중첩된 덧글 데이터
}

interface ReplyItemProps {
    userData: UserDataProps;
    handleReply: () => void;
    hideReplyFn: () => void;
}

const ReplyItemComponent: React.FC<ReplyItemProps> = ({
    userData,
    handleReply,
    hideReplyFn,
}): React.JSX.Element => {

    console.log(userData)

    return (
        <ReplyItem>
            <UserIcon href={`/user/${userData.userId}`}>
                <img
                    src={`/images/user/${userData.userId}/_profile.jpg`}
                    alt={`${userData.userId}`}
                />
            </UserIcon>
            <CommentContentWrap>
                <CommentUserId>
                    <strong>{userData.userId}</strong>
                    <span>{userData.registDate}</span>
                </CommentUserId>
                <CommentUserContent>
                    {userData.userContent}
                </CommentUserContent>
                <CommentBtnWrap>
                    <div>
                        <button type="button" onClick={handleReply}>
                            답글달기
                        </button>
                        <button type="button" onClick={hideReplyFn}>
                            숨기기
                        </button>
                    </div>
                    {/* {userData.replies > 0 && (
                        <ShowMoreBtn>답글 {userData.replies.length}개 더보기</ShowMoreBtn>
                    )}
                    {userData.replies > 0 && userData.replies.map((reply, idx) => (
                        <ReplyItemComponent
                            key={idx}
                            userData={reply}
                            handleReply={handleReply}
                            hideReplyFn={hideReplyFn}
                        />
                    ))} */}
                </CommentBtnWrap>
            </CommentContentWrap>
            <div><Heart /></div>
        </ReplyItem>
    );
};

export default ReplyItemComponent;

const ReplyItem = styled.div`
    ${flexBox()}
    padding: 1rem 2rem;
`;

const UserIcon = styled.a`
    > img {
        display: inline-block;
        border-radius: 4rem;
        width: 4rem;
        height: 4rem;
    }
`;

const CommentContentWrap = styled.div`
    
`;

const CommentUserId = styled.div`
    
`;

const CommentUserContent = styled.div`
    
`;

const CommentBtnWrap = styled.div`
    
`;

const ShowMoreBtn = styled.div`
    
`;
