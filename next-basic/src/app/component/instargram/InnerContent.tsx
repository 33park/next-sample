import React  from 'react'
import Link from "next/link";
import { Grid3X3, SquarePlay,ContactRound,PanelTopClose   } from 'lucide-react';
import { styled } from 'styled-components'
import { flexBox } from '@/style/styles/common'

export default function InnerContent() {
    return (
        <main>
            <header>
                <section>
                    <UserProfileIco>
                        <img src="/images/uploaded/Amanda12/_profile.jpg" alt="" srcset="" />
                    </UserProfileIco>
                    <section>
                        <div><strong>1,739</strong><span>Posts</span></div>
                        <div><strong>715K</strong><span>Followers</span></div>
                        <div><strong>164</strong><span>Following</span></div>
                    </section>
                </section>
                <section>
                    <p>박소현, 개발자, 95년생</p>
                </section>
                <section>
                    <div>Following</div>
                    <div>Messages</div>
                    <button type="button">down</button>
                </section>
                <section>
                    recommend
                </section>
            </header>
            <nav>
                <Link href="/"><Grid3X3/></Link>
                <Link href="/"><SquarePlay /></Link>
                <Link href="/"><PanelTopClose/></Link>
                <Link href="/"><ContactRound /></Link>
            </nav>
            <section>
                사진~
            </section>
        </main>
    )
}

const UserProfileIco = styled.section`
    
`