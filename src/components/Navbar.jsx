import React from 'react';
import { count } from '../Atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

const Navbar = ({ counts }) => {
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
