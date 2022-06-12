import { React, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { itemstate } from '../store';
import { count } from '../store';
import { dateChange } from '../store';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { nanoid } from 'nanoid';
import Alert from '@mui/material/Alert';

const Addlist = () => {
	const [text, setText] = useState('');
	const [alert, setAlert] = useState(false);
	const [items, setItems] = useRecoilState(itemstate);
	const [, setCount] = useRecoilState(count);
	const dates = useRecoilValue(dateChange);
	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleItemSave = () => {
		if (text.trim() === '') {
			setAlert(true);
			setText('');
		} else {
			setAlert(false);
			const date = new Date().getTime();
			setCount((prev) => prev + 1);
			const newitem = {
				id: nanoid(),
				text: text,
				date: date,
			};
			const newarray = [...items, newitem];
			setItems(newarray);
			setText('');
		}
	};
	return (
		<>
			<Box sx={{ width: '80%', margin: '2rem auto' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						width: '100%',
					}}>
					{alert ? <Alert severity='error'>Please Enter an Item</Alert> : ''}
					<textarea
						value={text}
						rows='4'
						placeholder='Add an Item'
						onChange={handleChange}
					/>
					<Button
						sx={{
							maxWidth: 'max-content',
							borderRadius: '1rem',
							marginBottom: '1rem',
						}}
						onClick={handleItemSave}
						variant='contained'
						endIcon={<SendIcon />}>
						Save
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Addlist;
