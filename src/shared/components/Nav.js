import React, {useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import AddModal from '../UIElement/AddModal';

function ResponsiveAppBar() {
const [openAdd, setOpenAdd] = useState();
  const handleOpenAddModals = () => {
    setOpenAddModals(true);
  };
  const handleCloseAddModals = () => {
    setOpenAddModals(false);
  };
  const [openAddModals, setOpenAddModals] = useState(false);

  return (<>
    <Modal
		open={openAddModals}
		onClose={handleCloseAddModals}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	  >
		{openAdd ? (
		 <></>
		) : (
			<AddModal
				closeModal={handleCloseAddModals}
				// submitHandler={submitAddHandler}
		  />
		)}
	  </Modal>
    <AppBar position="static"
    style={{ height: '116px',
    background:'#2D2D2D' 
    }}>
      <Container maxWidth="xl">
        <Toolbar 
        disableGutters 
        style={{ height: '116px' }}
        >
 
        <Typography
            component="a"
            fontWeight={"bold"}
            color="white"
            variant="h5"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            textDecoration:'none'
            
            }}
          >
            NATHANAEL BENICHOU
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
        {/* <Button
          variant="contained"
          // onClick={submitFilter}
          style={{
            height: "55px",
            width: "105px",
            alignContent: "auto",
            textTransform: "capitalize",
            borderRadius: 10,
            background: "linear-gradient(to right bottom, #C30772, #615EE0)",
            fontSize: "15px",
          }}
        //   endIcon={<PenIcon />
        // }
        >
          Create
        </Button> */}
            </IconButton>
       
          </Box>
          <Avatar
                sx={{
                  height: '50px', width: '50px',
                  display: { xs: "flex", sm: "flex" },
                  mr: 1,
                  background: "linear-gradient(to right bottom, #C30772, #615EE0)",
                  color:"#BBBBBB",
                }}
              >
                <Typography variant="h7" color="white" fontWeight={"bold"}>
                  {"NB"}
                </Typography>
              </Avatar>
          <Typography
            variant="7"
            noWrap
            color="white"
            component="a"
            fontWeight={"bold"}
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NATHANAEL BENICHOU
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton 
              // onClick={handleOpenUserMenu}
               sx={{ p: 0 }}>
              <Button
          variant="contained"
          onClick={() =>
            handleOpenAddModals()
          }
          // onClick={submitFilter}
          style={{
            height: "55px",
            width: "135px",
            alignContent: "auto",
            textTransform: "capitalize",
            borderRadius: 10,
            background: "linear-gradient(to right bottom, #C30772, #615EE0)",
            fontSize: "15px",
          }}

        >
            <Typography
              noWrap
              component="a"
              fontWeight={"bold"}
              color="white"
            >
                ADD USER
            </Typography>
    
        </Button>
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;