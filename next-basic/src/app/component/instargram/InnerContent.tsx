'use client'
import React,{useEffect, useState} from 'react'
import Link from "next/link";
import { Grid3X3, SquarePlay,ContactRound,PanelTopClose,UserPlus     } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox, DefaultBtn } from '@/style/styles/common'
import RecommendList from './RecommendList';
import boardData from "../../../../public/api/boardData"


export default function InnerContent() {
    const [boardItems, setBoardItems] = useState([]);
    useEffect(() => {
        setBoardItems(boardData);
    }, []);

    const [recomSec, setRecomSec] = useState(true);

    const toggleRecommend = ()=>{
        setRecomSec(recomSec => !recomSec);
    }
    const getUserFollow = (name) => {
        alert(`${name}를 팔로우합니다!`)
    }
    
    return (
        <section>
            <ContentHead>
                <UserProfileTop>
                    <UserProfileIco>
                        <img src="/images/uploaded/Amanda12/_profile.jpg" alt=""/>
                    </UserProfileIco>
                    <UserProfileInfo>
                        <div><strong>46</strong><span>게시물</span></div>
                        <div><strong>5</strong><span>팔로워</span></div>
                        <div><strong>25</strong><span>팔로잉</span></div>
                    </UserProfileInfo>
                </UserProfileTop>
                <UserProfileIntro>
                    <p>박소현, 개발자, 95년생</p>
                </UserProfileIntro>
                <UserUtilSec>
                    <UserUtilBtn $height={'3.6rem'} as="a" href='/'>프로픨 편집</UserUtilBtn>
                    <UserUtilBtn $height={'3.6rem'}>Messages</UserUtilBtn>
                    <UserUtilBtn $height={'3.6rem'} onClick={toggleRecommend}><UserPlus  fill={recomSec ? 'white' : 'black'}/></UserUtilBtn>
                </UserUtilSec>
                {recomSec && (
                    <section>
                        <RecommendTop>
                            <h3>사람 찾아보기</h3>
                            <a href="">모두 보기</a>
                        </RecommendTop>
                        <RecommendWrapper>
                            {boardItems.map((data)=>(
                                <RecommendList
                                    key={data.userId}
                                    userId={data.userId}
                                    userName={data.userName}
                                    onUserFollow={() => getUserFollow(data.userName)}
                                ></RecommendList>
                            ))}
                        </RecommendWrapper>
                    </section>
                )}
            </ContentHead>
            <TabNavigation>
                <Link href="/"><Grid3X3/></Link>
                <Link href="/"><SquarePlay /></Link>
                <Link href="/"><PanelTopClose/></Link>
                <Link href="/"><ContactRound /></Link>
            </TabNavigation>
            <GalleryTable>
                <li>
                    <div>
                        <img src="/images/uploaded/Amanda12/01.jpg" alt=""/>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="/images/uploaded/Amanda12/02.jpg" alt=""/>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="/images/uploaded/Amanda12/03.jpg" alt=""/>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="/images/uploaded/Amanda12/01.jpg" alt=""/>
                    </div>
                </li>
            </GalleryTable>
        </section>
    )
}

const ContentHead = styled.header`
    padding: 0 2rem;
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

const TabNavigation = styled.nav`
    ${flexBox()};
        a {
            flex:1;
            height: 6rem;
            ${flexBox({justify:'center', align: 'center'})}
            &:hover, &:visited, &:link, &:active
            {
                color: inherit;
                text-decoration: none;
            }
            svg {
                width: 2rem;
            }
        }
`

const GalleryTable = styled.ul`
        ${flexBox({})}
        flex-wrap: wrap;
        li {
            width: 33.3%;
            div {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                overflow: hidden;
                img {
                    position: absolute;
                    top:0;
                    left:0;
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
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
const RecommendTop = styled.div`
    ${flexBox({justify: 'space-between'})}
    padding: 2rem 0 1rem;
    h3 {
        font-size: 2rem;
        font-weight: bold;
    }
    a {
        font-size: 1.6rem;
        color: #00a0ff;
        text-decoration: underline;
    }
`
const RecommendWrapper = styled.ul`
    display: flex;
    width: 100%;
    gap:1rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`