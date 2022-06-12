import { React, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { itemstate } from '../Atom';
import { count } from '../Atom';
import { dateChange } from '../Atom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { nanoid } from 'nanoid';
import Alert from '@mui/material/Alert';

const Addlist = () => {
	const [text, setText] = useState('');
	const [alert, setAlert] = useState(false);
	const [items, setItems] = useRecoilState(itemstate);
	const [counts, setCount] = useRecoilState(count);
	const dates = useRecoilValue(dateChange);
	const handleChange = (event) => {
		setText(event.target.value);
	};
	const sortByDate = (a, b) => {
		return a.date - b.date;
	};

	const sortByName = (a, b) => {
		if (a.text.toLowerCase() > b.text.toLowerCase()) {
			return 1;
		} else if (b.text.toLowerCase() > a.text.toLowerCase()) {
			return -1;
		} else {
			return 0;
		}
	};

	const handleClick = (e) => {
		if (text === '') {
			setAlert(true);
		} else {
			setAlert(false);
			const date = new Date().getTime();
			setCount((prev) => prev + 1);
			const newitem = {
				id: nanoid(),
				text: text,
				date: date,
			};
			if (dates) {
				const newarray = [...items, newitem];
				newarray.sort(sortByDate);
				setItems(newarray);
			} else {
				const newarray2 = [...items, newitem];
				newarray2.sort(sortByName);
				setItems(newarray2);
			}
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
						onClick={handleClick}
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
