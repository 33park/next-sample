import React  from 'react'
import Link from "next/link";
import { Grid3X3, SquarePlay,ContactRound,PanelTopClose   } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox } from '@/style/styles/common'
import boardData from "api/boardData.js"


export default function InnerContent() {
    return (
        <main>
            <ContentHead>
                <UserProfileTop>
                    <UserProfileIco>
                        <img src="/images/uploaded/Amanda12/_profile.jpg" alt=""/>
                    </UserProfileIco>
                    <UserProfileInfo>
                        <div><strong>1,739</strong><span>Posts</span></div>
                        <div><strong>715K</strong><span>Followers</span></div>
                        <div><strong>164</strong><span>Following</span></div>
                    </UserProfileInfo>
                </UserProfileTop>
                <UserProfileIntro>
                    <p>박소현, 개발자, 95년생</p>
                </UserProfileIntro>
                <section>
                    <div>Following</div>
                    <div>Messages</div>
                    <button type="button">down</button>
                </section>
                <section>
                    recommend
                </section>
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
        </main>
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