'use client'
import React,{useState} from 'react'
import { styled } from 'styled-components'

import { flexBox,offSet, DefaultBtn,BorderSet } from '@/style/styles/common'
import { theme } from '@/style/styles/theme';

interface ButtonProps {
    btnHeight: string;
    placeHolderTxt:string;
    DropDownList:string[];
    // onChangeList: (selectedItem: string) => void;
}


export default function DropDown({btnHeight, placeHolderTxt, DropDownList, }:ButtonProps) {
    const [listOpen, setListOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeHolderTxt);
    const onToggle = () => {
        setListOpen(listOpen => !listOpen);
    }

    const handleItemClick = (item : string) => {
        setSelectedItem(item);
        setListOpen(false);
    }

    return (
    <DropDownBtn>
        <BasicBtn onClick={onToggle} $height={btnHeight} $status={listOpen}>{selectedItem}</BasicBtn>
        {listOpen && <DropWrapper $height={btnHeight}>
            {DropDownList.map((list, index) => (
                <Droplist $height={btnHeight} key={`${list}${index}`} onClick={handleItemClick(list[index])}>{list}</Droplist> 
            ))}
        </DropWrapper>}
        
    </DropDownBtn>
  )
}

const DropDownBtn = styled.div`
    ${offSet({position: 'relative'})};
    `

const BasicBtn = styled.div<{ $height: string, $status: Boolean}>`
    ${props => DefaultBtn({ height: props.$height })};
    border-radius: ${({$status}) => $status ? '0.5rem 0.5rem 0 0 ' : '0.5rem'};
    `

const DropWrapper = styled.ul<{ $height: string}>`
    ${props => offSet({ position: 'absolute', top: props.$height})};
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.white};
    ${BorderSet()};
    box-sizing: border-box;
`

const Droplist = styled.li<{ $height: string}>`
    ${flexBox({justify: 'center', align:'center'})};
    width: 100%;
    line-height: ${({ $height }) => $height};
    ${BorderSet({width: '.1rem 0 0 0'})};
    &:first-child {
        ${BorderSet({width: '0'})};
    }
`


