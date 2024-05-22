'use client'
import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Grid3X3, SquarePlay, ContactRound, PanelTopClose } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox } from '@/style/styles/common'
//layout component
import LayoutHeader from "../component/Instagram/layout/Header"
import LayoutGNB from "../component/Instagram/layout/GNB"
//content component
import ContentHead from "../component/Instagram/profile/Head"
import ContentFinder from "../component/Instagram/profile/Finder"
// import ContentGallery from "../component/Instagram/profile/Gallery"
//data
import boardData from "../../../public/api/boardData"

export default function UserDetailPage() {
    const router = useRouter();
    const { userId } = router.query; // useRouter().query.id도 사용 가능
    const [boardItems, setBoardItems] = useState([]);
    
    useEffect(() => {
        if (!userId) return;
        const fetchData = async () => {
            const userBoardItems = boardData.filter(item => item.userId === userId);
            setBoardItems(userBoardItems);
        }

        fetchData();
    }, [userId]);

    const handleFollow = (index) => {
        console.log(`Follow user at index ${index}`);
    }

	return (
		<main>
            <LayoutHeader></LayoutHeader>
            {/* content */}
            <ContentHead userPostAmount={46} userFollower={2} userFollowing={12} handleRecommend={handleFollow}></ContentHead>
            <section>
                <RecommendTop>
                    <h3>사람 찾아보기</h3>
                    <a href="">모두 보기</a>
                </RecommendTop>
                <RecommendWrapper>
                    {boardItems.map((data, index)=>(
                        <ContentFinder
                            key={`${data.userId}${index}`}
                            userId={data.userId}
                            userName={data.userName}
                            onUserFollow={() => handleFollow(index)}>

                            </ContentFinder>
                    ))}
                </RecommendWrapper>
            </section>
            <TabNavigation>
                <Link href="/"><Grid3X3/></Link>
                <Link href="/"><SquarePlay /></Link>
                <Link href="/"><PanelTopClose/></Link>
                <Link href="/"><ContactRound /></Link>
            </TabNavigation>
            <GalleryTable>
                {/* <ContentGallery
                    key={`${data.userId}-${index}`}
                    userId={data.userId}
                    upLoadImage={data.upLoadedImage}
                ></ContentGallery> */}
            </GalleryTable>
            {/* //content */}
            <LayoutGNB></LayoutGNB>
		</main>
	)
}

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