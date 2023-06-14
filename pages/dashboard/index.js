import { useSession, signIn, signOut } from "next-auth/react"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Component() {
  const { data: session } = useSession()
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          { session 
          ?<Button onClick={() => signOut()} color="inherit">Logout</Button>
          :<Button onClick={() => signIn()} color="inherit">Login</Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
} 