import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { useRecoilValue } from 'recoil';
import { count } from '../store';

const Navbar = () => {
	const counts = useRecoilValue(count);
	return (
		<Box
			sx={{
				width: '80%',
				display: 'flex',
				justifyContent: 'space-between',
				margin: '2rem auto',
				alignItems: 'center',
			}}>
			<div>
				<h1>Shopping list</h1>
			</div>
			<div>
				<Badge badgeContent={counts} color='primary'>
					<ShoppingCartIcon color='primary' fontSize='large' />
				</Badge>
			</div>
		</Box>
	);
};

export default Navbar;
