import React from 'react'
// import { flexBox } from '@/style/styles/common'
import { styled } from 'styled-components'

interface ImageProps {
    userId: string;
    image: string;
}

export default function UserGallery({userId,image}:ImageProps) {
    return (
        <GalleryItem>
            <div>
                <img src={`/images/uploaded/${userId}/${image}.jpg`} alt={`Uploaded ${image}`} />
            </div>
        </GalleryItem>
    )
}

const GalleryItem = styled.li`
`
