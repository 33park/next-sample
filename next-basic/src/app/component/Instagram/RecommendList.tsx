import React from 'react'
import { X as CloseBtn } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox,offSet, DefaultBtn } from '@/style/styles/common'
import { theme } from '@/style/styles/theme';

interface ListProps {
    userId: string;
    userName: string;
    onUserFollow: () => void;
}

export default function RecommendList({userId, userName, onUserFollow}: ListProps): React.JSX.Element {
    return (
        <RecomList>
            <EleCloseBtn><CloseBtn stroke={theme.colors.dark}/></EleCloseBtn>
            <ProfileThumb>
                <div>
                    <img src={`/images/uploaded/${userId}/_profile.jpg`} alt=""/>
                </div>
            </ProfileThumb>
            <UserName>{userName}</UserName>
            <Recomment>회원님을<br/>위한 추천</Recomment>
            <FollowBtn onClick={onUserFollow}>팔로우</FollowBtn>
        </RecomList>
    )
}




const RecomList = styled.li`
    ${offSet({position:'relative'})}
    ${flexBox()}
    flex-direction: column;
    flex:none;
    width: 33vw;
    padding: 1rem;
    background-color: ${theme.colors.light};
    border-radius: .5rem;
`

const EleCloseBtn = styled.button`
    ${offSet({position:'absolute', top: '1rem', right:'1rem'})}
    svg{
        width: 1.6rem;
        height: 1.6rem;
    }
`

const ProfileThumb = styled.div`
    ${flexBox()}
    width: 100%;
    div {
        ${offSet({position:'relative'})}
        display: block;
        width: 75%;
        height: 0%;
        padding-bottom: 75%;
        border-radius: 10rem;
        margin: 0 auto;
        background-color: ${theme.colors.gray};
        overflow: hidden;
        img {
            ${offSet({position: 'absolute'})}
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
const UserName = styled.p`
    max-width: 90%;
    font-size: 1.5rem;
    color: ${theme.colors.black};
    text-align: center;
    padding: 0.4rem 0 0 0;
`

const Recomment = styled.p`
    max-width: 50%;
    font-size: 1.4rem;
    color: ${theme.colors.gray};
    text-align: center;
    padding: 0.4rem 0 0 0;
`

const FollowBtn = styled.button`
    ${DefaultBtn({width:"80%", height:'3.2rem'})}
    border: none;
    background-color: #00a0ff;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    margin: 0.4rem 0 0 0;
`