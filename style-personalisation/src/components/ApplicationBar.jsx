import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

/** import images */
import logo from '../assests/logo.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    height: '4ch',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '55ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

export default function ApplicationBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{background:'#fff'}}>
        <Toolbar>
        <Typography
          variant="title"
          color="inherit"
        >
        <img 
          style = {{verticalAlign: 'middle',
          height: '60px',
          paddingBottom: '15px',
          paddingTop: '15px',
          cursor:'pointer'}} 
          src = {logo}
          alt="logo" 
        />
        </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer' } }}
          >
            MEN
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer'   } }}
          >
            WOMEN
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer'   } }}
          >
            KIDS
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer'   } }}
          >
            HOME & LIVING
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer'  } }}
          >
            BEAUTY
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block', color:'#282c3f', fontSize: '14px', letterSpacing: '.3px', fontWeight: '500', cursor:'pointer'  } }}
          >
            STUDIO
          </Typography>
          <Search style={{ background: '#f5f5f6', color: '#696e79'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
