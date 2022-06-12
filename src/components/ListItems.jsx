import { React } from 'react';
import List from './List';
import { itemstate } from '../Atom';
import { dateChange } from '../Atom';
import { useRecoilState } from 'recoil';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const ListItems = () => {
	const [items, setItems] = useRecoilState(itemstate);

	const [dates, setDate] = useRecoilState(dateChange);

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
	const handledate = () => {
		setDate(true);
		const newarray = [...items];
		newarray.sort(sortByDate);
		setItems(newarray);
	};
	const handleName = () => {
		setDate(false);
		const newarray2 = [...items];
		newarray2.sort(sortByName);
		setItems(newarray2);
	};

	const dataRender = [...items].sort(sortByDate).map((item) => {
		return (
			<List id={item.id} key={item.id} text={item.text} date={item.date} />
		);
	});

	const nameRender = [...items].sort(sortByName).map((item) => {
		return (
			<List id={item.id} key={item.id} text={item.text} date={item.date} />
		);
	});

	return (
		<>
			<Box sx={{ width: '80%', margin: '0 auto' }}>
				<Box sx={{ display: 'flex', gap: '3rem', marginBottom: '1rem' }}>
					<Button
						sx={{ borderRadius: '1rem' }}
						variant={dates ? 'contained' : 'outlined'}
						onClick={handledate}>
						Sort by Date
					</Button>
					<Button
						sx={{ borderRadius: '1rem' }}
						variant={dates === false ? 'contained' : 'outlined'}
						onClick={handleName}>
						Sort by Name
					</Button>
				</Box>
				<Stack spacing={2}>{dates ? dataRender : nameRender}</Stack>
			</Box>
		</>
	);
};

export default ListItems;
