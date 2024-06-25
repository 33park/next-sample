// components/ListBoard.tsx
import React from 'react';
import styled from 'styled-components';

interface ListItem {
  id: number;
  title: string;
  description: string;
}

interface ListBoardProps {
  items: ListItem[];
  onDelete: (id: number) => void;
  onModify: (id: number) => void;
}

const ListBoard: React.FC<ListBoardProps> = ({ items, onDelete, onModify }) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItemContainer key={item.id}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
          <ButtonContainer>
            <ActionButton onClick={() => onModify(item.id)}>Modify</ActionButton>
            <ActionButton onClick={() => onDelete(item.id)}>Delete</ActionButton>
          </ButtonContainer>
        </ListItemContainer>
      ))}
    </ListContainer>
  );
};

export default ListBoard;

const ListContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

const ListItemContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ItemTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const ItemDescription = styled.p`
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #0070f3;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0053a0;
  }
`;
