import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { theme } from '@/style/styles/theme'

interface routerProps{
    routerPath:string;
}

export default function routerFnBtn({routerPath}:routerProps) {
    const router = useRouter();

    const routerFn = (path: string) => {
        if(!path) {
            //default
            router.back();
        }else{
            router.push(path)
        }
    }

    return (
        <HistoryBack onClick={()=>routerFn(routerPath)}><ChevronLeft stroke={theme.colors.black}/></HistoryBack>
    )
}
const HistoryBack = styled.button`
    
`