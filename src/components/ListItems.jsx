import { React } from 'react';
import ListItem from './ListItem';
import { itemstate } from '../store';
import { dateChange } from '../store';
import { useRecoilState } from 'recoil';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { sortByName, sortByDate } from '../utils';

const ListItems = ({ handleClick }) => {
	const [items, setItems] = useRecoilState(itemstate);
	const [dates, setDate] = useRecoilState(dateChange);

	/*const sortByDate = (a, b) => {
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
	};*/
	const handleDateSort = () => {
		setDate(true);
		const newarray = [...items];
		newarray.sort(sortByDate);
		setItems(newarray);
	};
	const handleNameSort = () => {
		setDate(false);
		const newarray2 = [...items];
		newarray2.sort(sortByName);
		setItems(newarray2);
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
