import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import navStyles from "./nav.module.css" 

export default function Navbar() {
    
  return (
    <Box sx={{ flexGrow: 1 , width:'100%' }}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
       
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RFCV
          </Typography> */}
          <Link href={'/'}  className={navStyles.navLogo} > RFVC </Link>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Github</Button>
          <Button color="inherit">X</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
