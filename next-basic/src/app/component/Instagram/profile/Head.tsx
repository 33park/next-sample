import React, {useState} from 'react'
import { UserPlus} from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox, DefaultBtn } from '@/style/styles/common'

interface profileProps {
    userId: string;
    userBio: string;
    userPostAmount: number;
    userFollower: number;
    userFollowing: number;
    handleState: () => void;
    activeBtn: boolean;
}

export default function UserHead({userId, userBio, userPostAmount, userFollower, userFollowing, handleState, activeBtn}:profileProps) {
    // const [isActive, setIsActive] = useState(true);

    const formatNumber = (number) => {
        if ( number >= 1000 && number <10000) {
            return number.toLocaleString();
        } else if (number >= 10000) {
            return (number / 10000).toFixed(1)+'K';
        }
        return number.toString();
    }

    // const toggleActive = () => {
    //     setIsActive(!isActive); 
    // }

  return (
    <UserProfile>
        <UserProfileTop>
            <UserProfileIco>
                <img src={`/images/uploaded/${userId}/_profile.jpg`} alt=""/>
            </UserProfileIco>
            <UserProfileInfo>
                <div><strong>{formatNumber(userPostAmount)}</strong><span>게시물</span></div>
                <div><strong>{formatNumber(userFollower)}</strong><span>팔로워</span></div>
                <div><strong>{formatNumber(userFollowing)}</strong><span>팔로잉</span></div>
            </UserProfileInfo>
        </UserProfileTop>
        <UserProfileIntro>
            {userBio}
        </UserProfileIntro>
        <UserUtilSec>
            <UserUtilBtn $height={'3.6rem'} as="a" href='/'>프로픨 편집</UserUtilBtn>
            <UserUtilBtn $height={'3.6rem'}>Messages</UserUtilBtn>
            <UserUtilBtn $height={'3.6rem'} onClick={() => {handleState()}}><UserPlus fill={ activeBtn ? 'white' : 'black'}/></UserUtilBtn>{/* fill={plusBtn ? 'white' : 'black'} */}
        </UserUtilSec>
    </UserProfile>
  )
}


const UserProfile = styled.section`
    padding: 0 1.6rem;
`
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