'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import boardData from "../../../public/api/boardData"

const EditPage = () => {
    const router = useRouter();
    const { id } = useParams(); // useRouter().query.id도 사용 가능
    const [data, setData] = useState(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        // 여기서 서버로부터 데이터 가져오기 (예시로 간단하게 mock 데이터 사용)
        // 실제로는 fetch를 사용하여 데이터를 가져옵니다.
        const fetchData = async () => {
            const response = await fetch(boardData);
            const result = await response.json();
            setData(result);
            setContent(result.content);
        };

        fetchData();
    }, [id]);

    const handleSave = () => {
        // 데이터 저장 로직 (예시로 간단히 console.log 사용)
        console.log('Saving data:', content);
        // 실제로는 서버에 PUT 요청 등을 사용합니다.
        // 저장 후 메인 페이지로 이동
        router.push('/');
    };

    if (!data) return <div>Loading...</div>;

    return (
        <Container>
            <h1>Edit Post {id}</h1>
            <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
            <Button onClick={handleSave}>Save</Button>
        </Container>
    );
};

export default EditPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #0056b3;
    }
`;
