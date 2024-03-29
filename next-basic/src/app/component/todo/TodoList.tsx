"use client"

import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { MoreHorizontal } from 'lucide-react';
import Link from "next/link";

import InputCheck from '@/assets/images/icon/input_check_empty.svg';
import InputCheckComplete from '@/assets/images/icon/input_checked.svg';

interface TodoProps {
    priority: number;
    content: string;
    status: boolean;
    toggleCheckBox: () => void; // Added toggleCheckBox function
    openEditModal: () => void; // Added toggleCheckBox function
    editPop: boolean;
}

export default function TodoList({ priority, content, status, editPop, toggleCheckBox, openEditModal }: TodoProps) {


    const getOrderColor = (order: number) => {
        const colors = ['#FFE5A8', '#F8FF97', '#BCFFA4', '#A6FFD3', '#B9E3FF'];
        return colors[order % 5];
    };

    return (
        <TaskItem>
            <Order color={getOrderColor(priority)} $isChecked={status}>{priority}</Order>
            <Content $isChecked={status}>{content}</Content>
            <button type="button" onClick={openEditModal}>
                <MoreHorizontal stroke={theme.colors.gray} />
            </button>
            <CheckboxContainer $isChecked={status}>
                <input type="checkbox" defaultChecked={status} onChange={toggleCheckBox}/>
            </CheckboxContainer>
            { editPop  &&
                <EditBtnPopup>
                    <button type="button">수정</button>
                    <button type="button">삭제</button>
                </EditBtnPopup>
            }
        </TaskItem>
        
    );
}



const TaskItem = styled.li`
    position: relative;
    flex: 1;
    ${flexBox()}
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;

    &:nth-child(even) {
        background-color: #fafafa;
    }
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

const EditBtnPopup = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    ${flexBox()}
    flex-direction: column;
    transform: translate(100%, -50%);
    background-color: ${theme.colors.white};
    box-shadow: 0 0 .4rem rgba(0,0,0,0.2);
    
    button {
        width: 5rem;
        font-size: 1.4rem;
        line-height: 2;

        &:hover {
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
        }
    }
`