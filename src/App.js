import React from 'react'
import Navbar from './components/Navbar'
import ListItems from './components/ListItems'
import Addlist from './components/AddList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const App = () => {

  return (
    <>
 <Container maxWidth='md'>
   <Box sx={{backgroundColor:'#f5f6f7', height:'100%'}}>
    <CssBaseline />
    <Navbar/>
    <ListItems/>
    <Addlist />
    </Box>
    </Container>
    </>
  )
}

export default App