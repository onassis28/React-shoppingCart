import { React } from 'react';
import ListItem from './ListItem';
import { itemstate } from '../store';
import { dateChange } from '../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { sortByName, sortByDate } from '../utils';

const ListItems = () => {
	const items = useRecoilValue(itemstate);
	const [dates, setDate] = useRecoilState(dateChange);
	const handleDateSort = () => {
		setDate(true);
	};
	const handleNameSort = () => {
		setDate(false);
	};

	const renderByDate = [...items].sort(sortByDate).map((item) => {
		return (
			<ListItem id={item.id} key={item.id} text={item.text} date={item.date} />
		);
	});

	const renderByName = [...items].sort(sortByName).map((item) => {
		return (
			<ListItem id={item.id} key={item.id} text={item.text} date={item.date} />
		);
	});

	return (
		<>
			<Box sx={{ width: '80%', margin: '0 auto' }}>
				<Box sx={{ display: 'flex', gap: '3rem', marginBottom: '1rem' }}>
					<Button
						sx={{ borderRadius: '1rem' }}
						variant={dates ? 'contained' : 'outlined'}
						onClick={handleDateSort}>
						Sort by Date
					</Button>
					<Button
						sx={{ borderRadius: '1rem' }}
						variant={dates === false ? 'contained' : 'outlined'}
						onClick={handleNameSort}>
						Sort by Name
					</Button>
				</Box>
				<Stack spacing={2}>{dates ? renderByDate : renderByName}</Stack>
			</Box>
		</>
	);
};

export default ListItems;
