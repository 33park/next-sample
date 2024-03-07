"use client"

import React,{ useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme'
import { MoreHorizontal } from 'lucide-react';

import InputCheck from '@/assets/images/icon/input_check_empty.svg'
import InputCheckComplete from '@/assets/images/icon/input_checked.svg'

interface TodoProps {
    calendarList: { date: number; count: number }[];
    registeredList: { order: number; content: string; status: boolean }[];
}


export default function TodoList({ registeredList }: TodoProps) {
    const getOrderColor = (order: number) => {
        switch (order % 5) {
            case 1:
                return '#FFE5A8';
            case 2:
                return '#F8FF97';
            case 3:
                return '#BCFFA4';
            case 4:
                return '#A6FFD3';
            case 0:
                return '#B9E3FF';
            default:
                return '#C1CCFF'; // Default color
        }
    };

    const [isChecked, setIsChecked] = useState("");
    const onChangeCheckBox = (e) => {
        setIsChecked(e.target.value);
    }

    return (
        <>
            {/* 할 일 목록 */}
            <ListContainer>
                {registeredList.map(({ order, content, status }) => (
                    <TaskItem key={order}>
                        <Order color={getOrderColor(order)}>{order}</Order>
                        <Content>
                            {content}
                        </Content>
                        <MoreHorizontal stroke={theme.colors.gray}/>
                        <CheckboxContainer className={isChecked ? 'checked' : ''}>
                            <input type="checkbox" value={status} onChange={onChangeCheckBox}/>
                        </CheckboxContainer>
                    </TaskItem>
                ))}
            </ListContainer>
        </>
    );
}


const ListContainer = styled.ul`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 4rem 2rem;
`;

const TaskItem = styled.li`
    flex:1;
    ${flexBox()}
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
`;

const Order = styled.div`
    display: block;
    width: 2rem;
    height: 100%;
    text-indent: -9999999px;
    padding: 1rem;
    background-color: ${({ color }) => color};
    box-sizing: border-box;
`;

const Content = styled.span`
    flex: 1;
    padding:1rem;
`;

const CheckboxContainer = styled.label`
    flex:none;
    ${flexBox({justify:'center'})}
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${InputCheck.src});
    background-position: center;
    background-size: 100% auto;
    input {
        opacity: 0;
    }

    &.checked {
        background-image: url(${InputCheckComplete.src});
    }
`;

