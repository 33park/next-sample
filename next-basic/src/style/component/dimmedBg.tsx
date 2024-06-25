import React from 'react';
import styled from 'styled-components';
import { offSet } from '@/style/styles/common'

export default function dimmedBg() {
  return (
    <DimmedBg></DimmedBg>
  )
}

const DimmedBg = styled.div`
    ${offSet({position: 'fixed', bottom:'0', left: '0'})}
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    opacity: 0.9;
`