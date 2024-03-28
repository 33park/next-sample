'use Client'
import React,{useState} from 'react'
import { Plus, CirclePlus } from 'lucide-react';
import styled from 'styled-components';
import { flexBox, offSet } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { devices } from '@/style/styles/MediaQuery';

interface TodoFormPros {
    defaultInputVal?: string;
    onFormSubmit: (order: number, content: string) => void;
}

export default function TodoForm({defaultInputVal = '', onFormSubmit}:TodoFormPros) {

    const [formShow, setFormShow] = useState(false);
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
        toggleFormVisibility();
    };

    const toggleFormVisibility = () => {
        setFormShow(prevState => !prevState);
    };

    return (
            <>
                <TodoFormContainer>
                    {
                        !formShow && 
                        <AddTodoBtn type="button" onClick={toggleFormVisibility}>
                                <Plus stroke={theme.colors.white} width={24} height={24}/>
                                {/* <CirclePlus/> */}
                                <span>할 일 추가하기</span>
                        </AddTodoBtn>
                    }
                    {
                        formShow && 
                        <FormWrapper onSubmit={handleSubmit} className={formShow ? 'show' : ''}>
                            <HiddenFormBtn type="button" onClick={toggleFormVisibility}></HiddenFormBtn>
                            <label>
                                <input type="text" 
                                    value={writeTodo} 
                                    onChange={handleChange}
                                    placeholder='오늘의 할 일 작성하기'
                                />
                            </label>
                            <SelectTitle>카테고리</SelectTitle>
                            <PriorityWrapper>
                                <li><button>중요도1</button></li>
                                <li><button>중요도2</button></li>
                                <li><button>중요도3</button></li>
                            </PriorityWrapper>
                            <SelectTitle>중요도</SelectTitle>
                            <select onChange={handleSelect} value={checkOrder.toString()}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <SubmitBtn type="submit">등록</SubmitBtn>
                        </FormWrapper>
                    }
                    
                </TodoFormContainer>
            </>
    )
}

const TodoFormContainer = styled.div`
    ${offSet({position: 'absolute', right: '0', bottom: '0' })}
    ${flexBox({ justify: 'center' })}
    width: 100%;
    min-height: 6rem;
    padding: 1rem 1.6rem 1.4rem;
    background-color: ${(theme.colors.primary)};
    border-radius: 4rem 4rem 0 0 ;
    box-sizing: border-box;
`

const FormWrapper = styled.form`
    display: block;
    width: 100%;
    padding: 4rem 0 0 0;


    select, label, input, button {
        line-height: 1;
    }
    select {
        flex: none;
        display: block;
        width: 100%;
        height: 2.4rem;
    }

    label {
        display: block;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        box-sizing: border-box;
    }

`

const SubmitBtn = styled.button`
    ${flexBox({ justify: 'center' })}
    width: 6rem;
    height: 3rem;
    margin-top: 2rem;
    margin-left: auto;
    font-size: 1.6rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
`

const SelectTitle = styled.p`
    color: ${theme.colors.white};
    margin-top: 2rem;
    margin-bottom: .4rem;
    font-size: 1.2rem;
`

const AddTodoBtn = styled.button`
    ${offSet()}
    ${flexBox({ justify: 'center' })}
    width: 100%;
    border-radius: 100%;
    color: ${(theme.colors.white)};

    span {
        flex:none;
        display: inline-block;
        margin-left: .2rem;
    }
`

const HiddenFormBtn = styled.button`
    ${offSet({position:'absolute', left: '50%', top: '1rem'})}
    flex:none;
    display: block;
    width: 6rem;
    height: .6rem;
    background-color: ${(theme.colors.white)};
    border-radius: 1rem;
    transform: translate(-50%,0%);

`

const PriorityWrapper = styled.ul`
    ${flexBox()}
    flex-wrap: wrap;
    
    li {
        margin: 0 .4rem .4rem 0;
    }
`