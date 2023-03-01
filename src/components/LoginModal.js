import { Lock } from "@mui/icons-material"
import { Grid, Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
}

const textStyles = [
	{
		"&:hover": {
			cursor: "pointer",
			opacity: "0.9",
		},
	},
]
function LoginModal() {
	const navigate = useNavigate()
	const handleClose = () => {
		navigate(-1)
	}

	return (
		<>
			<Modal
				open={true}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={style}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					gap={2}
				>
					<Box
						sx={{
							padding: "10px",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						bgcolor={"secondary.main"}
					>
						<Lock />
					</Box>
					<Typography variant="h5">Login</Typography>
					<Box width={"100%"}>
						<LoginForm callback={() => {}} />
						<Grid
							justifyContent={"space-between"}
							display={"flex"}
							flexDirection={"row"}
							width={"100%"}
						>
							<Typography variant="text" color="error" sx={textStyles}>
								Forgot Password?
							</Typography>
							<Typography variant="text" color="error" sx={textStyles}>
								Dont have an account? Sign Up
							</Typography>
						</Grid>
					</Box>
				</Box>
			</Modal>
		</>
	)
}

export default LoginModal
