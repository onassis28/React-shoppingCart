import React from 'react'
import Navbar from './components/Navbar'
import ListItems from './components/ListItems'
import Addlist from './components/AddList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useRecoilValue, useRecoilState } from 'recoil';
import { itemstate } from './store';
import {count} from './store'


const App = () => {
const [counts, setCounter]=useRecoilState(count)
const [items, setItems] = useRecoilState(itemstate);
;

  return (
    <>
 <Container maxWidth='md'>
   <Box sx={{backgroundColor:'#f5f6f7', height:'100%'}}>
    <CssBaseline />
    <Navbar counts={counts}/>
    <ListItems/>
    <Addlist />
    </Box>
    </Container>
    </>
  )
}

export default App