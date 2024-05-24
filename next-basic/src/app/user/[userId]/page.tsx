'use client'
import React,{useEffect, useState} from 'react'
import { useRouter, useParams } from 'next/navigation';
import { Images  } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox, offSet } from '@/style/styles/common'

//content component
import RouterBack from "@/app/_component/button/RouterBack"
import ContentHead from "@/app/component/Instagram/profile/Head"
import FinderList from "@/app/profile/Finder"
import TabNav from "@/app/profile/Tab"
//data
import boardData from "../../../../public/api/boardData"


export default function UserDetailPage() {
    const { userId } = useParams();
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [showRecommend,setShowRecommend] = useState(true);
    const [recommendData, setRecommendData] = useState([]);

    useEffect(() => {
        if (userId){
            const matchedUser = boardData.find(user => user.userId === userId);
            setUserData(matchedUser);
            if(matchedUser){
                const unMatchedUSer = boardData.filter((user) => user.userId !== userId);
                setRecommendData(unMatchedUSer);
            }else {
                console.log('No matching user data found');
                
            }
        }
    }, [userId]);

    const routerBackBFn = () => {
        router.back();
    }

    const toggleRecommendSection = () => {
        if(recommendData.length <= 0){
            setShowRecommend(false);
        }
        setShowRecommend(showRecommend => !showRecommend)
    }
    const deleteRecomFn = (userId) => {
        setRecommendData(recommendData.filter((user) => user.userId !== userId));
    }

    if (!userData) return <>Loading...</>
	return (
		<MainContainer>
            <LayoutHeader userId={userData.userId} historyBackFn={routerBackBFn}>
                <RouterBack routerPath={''}></RouterBack>
            </LayoutHeader>
            {/* content */}
            <ContentHead 
                userId={userData.userId} 
                userBio={userData.content} 
                userPostAmount={userData.upLoadedImage ? userData.upLoadedImage.length : 0} 
                userFollower={userData.userFollower} 
                userFollowing={userData.userFollowing}
                handleState={toggleRecommendSection}
                activeBtn={showRecommend}>
            </ContentHead>
            {showRecommend && recommendData.length > 0 && (
            <ContentFinder>
                <RecommendTop>
                    <h3>사람 찾아보기</h3>
                    <a href="">모두 보기</a>
                </RecommendTop>
                <RecommendWrapper>
                    {recommendData.map((data, index)=>(
                        <FinderList
                            key={`${data.userId}${index}`}
                            userId={data.userId}
                            userName={data.userName}
                            onUserFollow={() => alert('not now!')}
                            onDelete={() => deleteRecomFn(data.userId)}
                            >
                        </FinderList>
                    ))}
                </RecommendWrapper>
            </ContentFinder>)}
            <TabNav></TabNav>
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
           
		</MainContainer>
	)
}

const MainContainer = styled.main`
    max-width: 46rem;
    margin: 0 auto;
`

const ContentFinder = styled.section`
`

const RecommendTop = styled.div`
    ${flexBox({justify: 'space-between'})}
    padding: 2rem 1rem 1rem;
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