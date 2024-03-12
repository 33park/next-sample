"use client"

import React,{useState} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { MoreHorizontal } from 'lucide-react';

import InputCheck from '@/assets/images/icon/input_check_empty.svg';
import InputCheckComplete from '@/assets/images/icon/input_checked.svg';

interface TodoProps {
    order: number;
    content: string;
    status: boolean;
    toggleCheckBox: () => void; // Added toggleCheckBox function
}

export default function TodoList({ order, content, status, toggleCheckBox }: TodoProps) {


    const getOrderColor = (order: number) => {
        const colors = ['#FFE5A8', '#F8FF97', '#BCFFA4', '#A6FFD3', '#B9E3FF'];
        return colors[order % 5];
    };

    return (
        <TaskItem>
            <Order color={getOrderColor(order)} $isChecked={status}>{order}</Order>
            <Content $isChecked={status}>{content}</Content>
            <MoreHorizontal stroke={theme.colors.gray} />
            <CheckboxContainer $isChecked={status}>
                <input type="checkbox" defaultChecked={status} onChange={toggleCheckBox}/>
            </CheckboxContainer>
        </TaskItem>
        
    );
}



const TaskItem = styled.li`
    flex: 1;
    ${flexBox()}
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
`;

const Order = styled.div<{ color: string, $isChecked: Boolean}>`
    display: block;
    width: 2rem;
    height: 100%;
    text-indent: -9999px;
    padding: 1rem;
    background-color: ${({ $isChecked, color }) => $isChecked ? theme.colors.gray : color};
    box-sizing: border-box;
`;

const Content = styled.span<{$isChecked: Boolean}>`
    flex: 1;
    display: inline-block;
    padding: 1rem;
    color: ${({ $isChecked }) => $isChecked ? theme.colors.gray : '#000'};
    text-decoration: ${({ $isChecked }) => $isChecked ? 'line-through' : 'unset'};
`;

const CheckboxContainer = styled.label<{$isChecked: Boolean}>`
    flex: none;
    ${flexBox({ justify: 'center' })}
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${({ $isChecked }) => $isChecked ? InputCheckComplete.src : InputCheck.src});
    background-position: center;
    background-size: 100% auto;
    input {
        opacity: 0;
    }
`;
