import React from "react";
import {AppBar , Box, Button, Toolbar, Typography ,IconButton, Avatar} from "@mui/material";

const Header = () => {
  const menus = ["Home","Admin","Trade"]
  return (
    <>
      <AppBar position="static" >
        <Toolbar sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>
           <Typography>
             LOGO
           </Typography>
           <Box sx={{flexFlow:1,display:{ md: 'flex', sm:'none'}}}>
              {menus.map((item,index) =><Button key={index} sx={{color: 'white'}}>{item}</Button>)}
           </Box>
           <Box>
            <IconButton>
              <Avatar src="" alt="userimg" />
            </IconButton>
           </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
