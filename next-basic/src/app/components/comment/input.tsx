import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import { styled } from 'styled-components';
import { theme } from '@/style/styles/theme';
import { flexBox } from '@/style/styles/common';

interface WriteAreaProps {
  replyInput: React.RefObject<HTMLInputElement>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WriteAreaComponent: React.FC<WriteAreaProps> = ({
    replyInput,
    handleInputChange,
    }) => {
    return (
        <WriteArea>
        <UserIcon>
            <img src={`/images/user/1000000chris/_profile.jpg`} alt={'1000000chris'} />
        </UserIcon>
        <UserComment>
            <input
            type="text"
            ref={replyInput}
            placeholder='메세지를 입력해주세요'
            value=""
            onChange={handleInputChange}
            />
        </UserComment>
        <button type="submit"><Send /></button>
        </WriteArea>
    );
};

export default WriteAreaComponent;

const WriteArea = styled.div`
    ${flexBox()}
    height: 6.4rem;
    gap: .6rem;
`;

const UserIcon = styled.a`
    flex: none;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const UserComment = styled.label`
    flex: 1;
    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.4rem;
        border-radius: 5rem;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
        box-sizing: border-box;
    }
`;
