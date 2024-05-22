'use client'
import React,{useEffect, useState} from 'react'
import { useRouter, useParams } from 'next/navigation';
import Link from "next/link";
import { Grid3X3, SquarePlay, ContactRound, PanelTopClose, Images  } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox, offSet } from '@/style/styles/common'
//layout component
import LayoutHeader from "../../component/Instagram/layout/Header"
import LayoutGNB from "../../component/Instagram/layout/GNB"
//content component
import ContentHead from "../../component/Instagram/profile/Head"
import FinderList from "../../component/Instagram/profile/Finder"
import ContentGallery from "../../component/Instagram/profile/Gallery"
//data
import boardData from "../../../../public/api/boardData"


export default function UserDetailPage() {
    const router = useRouter();
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        if (userId){
            const matchedUser = boardData.find(user => user.userId === userId);
            setUserData(matchedUser);
        }
    }, [userId]);

    if (!userData) return <>Loading...</>

    const handleFollow = () => {
        router.back();
        
    }

	return (
		<MainContainer>
            <LayoutHeader userId={userData.userId} historyBackFn={handleFollow}></LayoutHeader>
            {/* content */}
            <ContentHead 
                userId={userData.userId} 
                userBio={userData.content} 
                userPostAmount={userData.upLoadedImage ? userData.upLoadedImage.length : 0} 
                userFollower={userData.userFollower} 
                userFollowing={userData.userFollowing} 
                toggleRecommend={handleFollow}>
            </ContentHead>
            <ContentFinder>
                <RecommendTop>
                    <h3>사람 찾아보기</h3>
                    <a href="">모두 보기</a>
                </RecommendTop>
                <RecommendWrapper>
                    추천탭
                    {/* {boardItems.map((data, index)=>(
                        <ContentFinder
                            key={`${data.userId}${index}`}
                            userId={data.userId}
                            userName={data.userName}
                            onUserFollow={() => handleFollow(index)}>
                        </ContentFinder>
                    ))} */}
                </RecommendWrapper>
            </ContentFinder>
            <TabNavigation>
                <Link href="/"><Grid3X3/></Link>
                <Link href="/"><SquarePlay /></Link>
                <Link href="/"><PanelTopClose/></Link>
                <Link href="/"><ContactRound /></Link>
            </TabNavigation>
            <GalleryTable>
                {userData.upLoadedImage && userData.upLoadedImage.map((image, index) => (
                    <li key={index}>
                        {image.length > 1 && (
                            <i><Images stroke={'white'}/></i>
                        )}
                        <div>
                            <img src={`/images/uploaded/${userData.userId}/${image}.jpg`} alt="" />
                        </div>
                    </li>
                ))}
            </GalleryTable>
            {/* //content */}
            <LayoutGNB></LayoutGNB>
		</MainContainer>
	)
}

const MainContainer = styled.main`
    max-width: 46rem;
    margin: 0 auto;
`

const ContentFinder = styled.section`
    padding: 0 2rem;
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
        z-index: 0;
        ${flexBox({})}
        flex-wrap: wrap;
        li {
            ${offSet()}
            width: 33.3%;
            i {
                ${offSet({position:'absolute', top: '1rem', right: '1rem'})}
                z-index: 1;
            }
            div {
                ${offSet()}
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                overflow: hidden;
                img {
                    ${offSet({position:'absolute', top: '0', left: '0'})}
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
`