import {useSession} from'next-auth/react'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NextLink from 'next/link';
import {signOut,signIn} from 'next-auth/react'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import {useMediaQuery, useTheme} from "@mui/material";

export type HeaderProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const Header =( props:HeaderProps)=> {

  const {ColorModeContext} =props;

  const theme = useTheme();
  // const { data: session } = useSession();  
  // const userProfileImg = session?.user?.image as string;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const tabletCheck = useMediaQuery('(min-width: 768px)');

  return (
    <AppBar position="static" sx={{marginBottom:"40px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Data Dashboard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
   {
     tabletCheck &&(
       <Box sx={{paddingRight:5, marginLeft: 'auto'}}>
   {/* <Typography textAlign="center">{session?.user?.email}</Typography> */}
   <Typography textAlign="center">{"example@gmail.com"}</Typography>
   </Box> 
     )
   }
 <ThemeToggleButton ColorModeContext={ColorModeContext}/>
          <Box sx={{ flexGrow: 0 }}>
         
            <Tooltip title="Open Profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* <Avatar alt={session?.user?.name} src={userProfileImg} /> */}
              <Avatar alt={"username"} src={"userProfileImg"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
              <NextLink href={"/dashboard/profile"}
              style={{
                color: theme.palette.text.primary,
                textDecoration: "none"
              }}>

<Typography textAlign="center">{ 'Profile'}</Typography>

              </NextLink>
              </MenuItem>
                <MenuItem onClick={()=> signIn()}>
                {/* <MenuItem onClick={()=> session ? signOut():signIn()}> */}
                  <Typography textAlign="center">{ 'Login'}</Typography>
                  {/* <Typography textAlign="center">{session? 'Logout' : 'Login'}</Typography> */}
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header