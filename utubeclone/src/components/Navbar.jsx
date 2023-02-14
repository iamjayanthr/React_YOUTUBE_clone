import React from 'react'
import { Stack } from '@mui/material'//same as stack from material ui
//hover on stack and go to demo to see the working and to api for seeing the properties
import link, { Link } from "react-router-dom" //user navigate to another page by clicking or tapping on it
import { logo } from './utils/constants'
import SearchBar from './SearchBar'
const Navbar=()=> {
  return (
    <Stack direction="row"
        alignItems="center"
        p={2}
        sx={{position:"sticky",background:"#000",top:0,justifyContent:"space-between"}}  
        >{/*p is for padding*/}
    
        <Link to="/" style={{display:"flex",alignItems:"center"}}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar