'use client'

import React, { useState } from 'react';
import ListBoard from '@/app/components/board/ListBoard';
import { ListItem } from '@/app/interfaces/ListBoard';

const dummyData: ListItem[] = [
  { id: 1, title: 'Item 1', description: 'Description for item 1' },
  { id: 2, title: 'Item 2', description: 'Description for item 2' },
  { id: 3, title: 'Item 3', description: 'Description for item 3' },
];

const Home: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>(dummyData);

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleModify = (id: number) => {
    // Implement modify functionality as needed
    console.log(`Modify item with ID ${id}`);
  };

  return (
    <div>
      <h1>List Board Example</h1>
      <ListBoard items={items} onDelete={handleDelete} onModify={handleModify} />
    </div>
  );
};

export default Home;
