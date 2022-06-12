import React from 'react';
import { itemstate } from '../store';
import { useRecoilState } from 'recoil';
import { count } from '../store';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';

const ListItem = ({ text, id }) => {
	const [items, setItems] = useRecoilState(itemstate);
	const [, setCount] = useRecoilState(count);
	const handleItemRemoval = (id) => {
		setCount((prev) => prev - 1);
		const newItems = items.filter((note) => note.id !== id);
		setItems(newItems);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '2rem',
				alignItems: 'center',
				marginBottom: '1rem',
				justifyContent: 'space-between',
				maxWidth: '50%',
				backgroundColor: '#e8e9eb',
				borderRadius: '0.6rem',
				padding: '0.5rem',
			}}>
			<div>{text}</div>
			<Box onClick={() => handleItemRemoval(id)}>
				<ClearIcon />
			</Box>
		</Box>
	);
};

export default ListItem;
