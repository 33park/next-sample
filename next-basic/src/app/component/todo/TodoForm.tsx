'use Client'
import React,{useState} from 'react'
import { Plus } from 'lucide-react';

interface TodoFormPros {
    defaultInputVal?: string;
    onFormSubmit: (value:string) => void;
}

export default function TodoForm({defaultInputVal = '', onFormSubmit}:TodoFormPros) {

    const [writeTodo, setWriteTodo] = useState<string>(defaultInputVal);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setWriteTodo(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        onFormSubmit(writeTodo); // Pass the input value to the parent component
        setWriteTodo(''); // Clear the input field after submission
    };

    return (
            <>
                <button type="button"><Plus /></button>
                <form onSubmit={handleSubmit}>
                    <select>eee
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
            </>
    )
}
