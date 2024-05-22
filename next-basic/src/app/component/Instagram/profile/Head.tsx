import React, {useState} from 'react'
import { UserPlus} from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox, DefaultBtn } from '@/style/styles/common'

interface profileProps {
    userPostAmount: number;
    userFollower: number;
    userFollowing: number;
    handleRecommend: () => void;
}

export default function UserHead({userPostAmount, userFollower, userFollowing, handleRecommend}:profileProps) {
    const [plusBtn, setPlusBtn] = useState(false);

    const toggleRecommend = () => {
        setPlusBtn(plusBtn => !plusBtn);
        handleRecommend();
    }

  return (
    <section>
        <UserProfileTop>
            <UserProfileIco>
                <img src="/images/uploaded/Amanda12/_profile.jpg" alt=""/>
            </UserProfileIco>
            <UserProfileInfo>
                <div><strong>{userPostAmount}</strong><span>게시물</span></div>
                <div><strong>{userFollower}</strong><span>팔로워</span></div>
                <div><strong>{userFollowing}</strong><span>팔로잉</span></div>
            </UserProfileInfo>
        </UserProfileTop>
        <UserProfileIntro>
            <p>박소현, 개발자, 95년생</p>
        </UserProfileIntro>
        <UserUtilSec>
            <UserUtilBtn $height={'3.6rem'} as="a" href='/'>프로픨 편집</UserUtilBtn>
            <UserUtilBtn $height={'3.6rem'}>Messages</UserUtilBtn>
            <UserUtilBtn $height={'3.6rem'} onClick={toggleRecommend}><UserPlus  fill={plusBtn ? 'white' : 'black'}/></UserUtilBtn>
        </UserUtilSec>
    </section>
  )
}


const UserProfileTop = styled.section`
    ${flexBox()};
`

const UserProfileIntro = styled.section`
    padding: 1rem 0;
    font-size: 1.2rem;
    
`
const UserProfileIco = styled.section`
    flex:none;
    display: block;
    width: 7rem;
    height: 7rem;
    border-radius: 7rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`
const UserProfileInfo = styled.section`
    flex:4;
    padding: 1rem 0 1rem 2rem;
    ${flexBox()};
    div {
        flex:1;
        ${flexBox({justify:'center', align: 'center'})}
        flex-direction: column;
        strong {
            font-size: 1.6rem;
            font-weight: bold;
        }
        span {
            font-size: 1.2rem;
        }
    }
`

const UserUtilSec = styled.section`
    display: grid;
    gap: .8rem;
    grid-template-columns: 6fr 6fr 1fr;

`

const UserUtilBtn = styled.button<{ $height: string}>`
    ${props => DefaultBtn({ height: props.$height })};
    font-size: 1.4rem;
    text-decoration: none;
    svg {
        width: 2rem;
    }
`