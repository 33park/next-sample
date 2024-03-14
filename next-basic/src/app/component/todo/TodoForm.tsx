'use Client'
import React,{useState} from 'react'
import { Plus } from 'lucide-react';
import styled from 'styled-components';
import { flexBox, offSet } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { devices } from '@/style/styles/MediaQuery';

interface TodoFormPros {
    defaultInputVal?: string;
    onFormSubmit: (order: number, content: string) => void;
}

export default function TodoForm({defaultInputVal = '', onFormSubmit}:TodoFormPros) {

    const [writeTodo, setWriteTodo] = useState<string>(defaultInputVal);
    const [checkOrder, setCheckOrder] = useState<number>(1)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setWriteTodo(value);
    };

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCheckOrder(Number(value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        onFormSubmit(checkOrder, writeTodo); // Pass the input value to the parent component
        setWriteTodo(''); // Clear the input field after submission
        setCheckOrder(1);
    };

    return (
            <>
                <TodoFormContainer>
                    <form onSubmit={handleSubmit}>
                        <select onChange={handleSelect} value={checkOrder.toString()}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label>
                            <input type="text" 
                                value={writeTodo} 
                                onChange={handleChange}
                            />
                        </label>
                        <button type="submit">등록</button>
                    </form>
                </TodoFormContainer>
                <AddTodoBtn type="button"><Plus stroke={theme.colors.white}/></AddTodoBtn>
            </>
    )
}

const TodoFormContainer = styled.div`
    ${offSet({position: 'absolute', right: '-15%', bottom: '-10%' })}
    ${flexBox({ justify: 'center' })}
    padding: 0 8rem 0 4rem;
    background-color: ${(theme.colors.primary)};
    box-sizing: border-box;
    border-radius: 2rem 6rem 6rem 2rem;

    select,input[type="text"] {
        margin: 0;
        padding: 0 1rem;
        border: none;
        line-height: 2rem;
        height: 2rem;
    }

    @media ${devices.md} {
        height: 6rem;
    }
`

const AddTodoBtn = styled.button`
    ${offSet({position: 'absolute', right: '-15%', bottom: '-10%' })}
    ${flexBox({ justify: 'center' })}
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${(theme.colors.primary)};
    border-radius: 100%;
    
    @media ${devices.md} {
        width: 6rem;
        height: 6rem;
    }
`