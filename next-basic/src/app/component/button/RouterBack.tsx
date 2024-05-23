import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function RouterBackBtn() {
    const router = useRouter();

    const routerBack = () => {
        router.back();
    }

    return (
        <HistoryBack onClick={() => routerBack()}><ChevronLeft stroke={'black'}/></HistoryBack>
    )
}
const HistoryBack = styled.button`
    
`