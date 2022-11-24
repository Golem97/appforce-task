import React, {useState,useContext } from 'react';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { UserContext } from "../context/UserContext";
import Modal from "@mui/material/Modal";
import DeleteModal from '../UIElement/DeleteModal';
import EditUserModal from '../UIElement/EditModal';

const theme = createTheme({
	palette: {
		primary: {
			light: "#000000",
			main: "#000000",
			dark: "#000000",
			contrastText: "#fff",
		},
		secondary: {
			light: "#FF385C",
			main: "#FF385C",
			dark: "#FF385C",
			contrastText: "#000",
		},
	},
});



export default function UserCard({ user }) {
const userContext = useContext(UserContext);

const submitDeleteHandler =  (e) => {
	e.preventDefault();
	userContext.delete(user.id);
	setOpenDeleteModals(false);
	};

	const submitEditHandler =  (e) => {
		e.preventDefault();
		setOpenEditModals(false);
		};

const [openDelete, setOpenDelete] = useState();
const [openDeleteModals, setOpenDeleteModals] = useState(false);
const [openEdit, setOpenEdit] = useState();
const [openEditModals, setOpenEditModals] = useState(false);

const handleOpenDeleteModals = () => {
    setOpenDeleteModals(true);
  };
  const handleOpenEditModals = () => {
    setOpenEditModals(true);
  };
  const handleCloseEditModals = () => {
    setOpenEditModals(false);
  };

  const handleCloseDeleteModals = () => {
    setOpenDeleteModals(false);
  };


	return (<>
	
	<Modal
		open={openDeleteModals}
		onClose={handleCloseDeleteModals}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	  >
		{openDelete ? (
		 <></>
		) : (
			<DeleteModal
				closeModal={handleCloseDeleteModals}
				submitHandler={submitDeleteHandler}
				userToDelete={user.id}
		  />
		)}
	  </Modal>

	  <Modal
		open={openEditModals}
		onClose={handleCloseEditModals}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	  >
		{openEdit ? (
		 <></>
		) : (
			<EditUserModal
				closeModal={handleCloseEditModals}
				userToEdit={user}
		  />
		)}
	  </Modal>
	  
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					pt: 8,
					pb: 6,
				}}>
					
				<Container maxWidth="sm">
					<Grid item xs={12} sm={6} md={4}>
						<Card
							sx={{
                                bgcolor:"inerhit",
                                padding:"10px",
								height: "80%",
								display: "flex",
								flexDirection: "column",
                                borderRadius: 7,
							}}
						>
							<CardMedia
								component="img"
								sx={{
									height: "55%",
									width: "35%",
									margin: "3%",
									marginLeft: "33%",
									borderRadius: "110px",
                                    border:"solid",
									border:3,
                                    borderColor:"#AF1B89"
								}}
								image={user.image}
								alt="random"
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography
									gutterBottom
									variant="4"
									component="h5"
									textAlign="center"
								>
									{user?.name.title}. {user?.name.first} {user?.name.last} 
								</Typography>
								<Typography
									gutterBottom
									sx={{ mb: 1 }}
									component="h2"
									textAlign="center"
								>
									<LocationOnIcon
										style={{ height: 20, width: 25 }}
                                        sx={{ mb:-0.5 ,mt:2}}
									/>
								    {user.location.country}
								</Typography>
                                <Typography
									gutterBottom
									sx={{ mb: 1 }}
									component="h2"
									textAlign="center"
								>
                                {user.location.city} {user.location.street}
                                </Typography>
								{/* <Typography
									gutterBottom
									sx={{ mb: 1 }}
									component="h2"
									textAlign="center"
								>
									<EmailIcon
										style={{ height: 20, width: 20 }}
										sx={{ mr: 1,mb:-0.5,mt:2 }}
									/>
									{user?.email}
								</Typography> */}
								<Typography textAlign="center">
								</Typography>
							</CardContent>
							<Stack
								sx={{ mt: "3%", mb:"10%" }}
								direction="row"
								spacing={2}
								justifyContent="center">
								<Button 
									onClick={() =>
										handleOpenEditModals()
									}
                                variant="contained"
                                fontWeight={"bold"}
                                style={{
                                  borderRadius:"8px",
                                  background: "linear-gradient(to right bottom, #C30772, #615EE0)",
                                  fontSize: "15px",

                                  }}>
									Edit
								</Button>
                                
								<Button variant="outlined"
								onClick={() =>
									handleOpenDeleteModals()
								}
                                fontWeight={"bold"}
                                >Delete</Button>
							</Stack>
						</Card>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
		</>
	);
}
