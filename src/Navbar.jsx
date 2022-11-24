import { AppBar, Link, Toolbar ,Box} from '@mui/material';
import React from 'react'


const Navbar = () => {

  const rightLink={
    ml:3,
    color:'common.white',
    fontSize:16,
  }

  return (
    <div>
    <AppBar position="fixed">
    <Toolbar sx={{justifyContent:'space-between'}}>
    <Box sx={{flex:1}}>
    <Link 
    variant="h6"
    color="inherit"
    underline='none'
    href="/"
    sx={{fontSize:24}}
    >
    {'CL Technologies'}
    </Link>

    <Box sx={{flex:1,display:"flex",justifyContent:"flex-end"}}>
    <Link 
    variant="h6"
    color="inherit"
    underline='no'
    sx={{rightLink}}
    >{"sign up"}</Link>
    <Link 
    variant="h6"
    color="inherit"
    underline='no'
    sx={{...rightLink,color:"secondary.main"}}>
    {'SIGNIN'}</Link>
    </Box>
    
    </Box>
    </Toolbar>
    </AppBar>
    
    </div>
  )
}

export default Navbar