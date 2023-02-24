import { Grid3x3Rounded, Lock, Person } from "@mui/icons-material"
import {
	Button,
	Grid,
	Icon,
	Input,
	Modal,
	Paper,
	TextField,
	Typography,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box } from "@mui/system"
import React, { useContext, useState } from "react"
import App from "../App"
import { LoginModalContext } from "../hooks/LoginModalContext"
import { UserContext } from "../hooks/UserContext"
import LoginForm from "./LoginForm"
import LoginModal from "./LoginModal"

function LoginLogoutButton() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false)
	const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
	const { openLoginModal, setOpenLoginModal } = useContext(LoginModalContext)

	const handleLoginModal = () => setOpenLoginModal(true)
	const handleClose = () => setOpenLoginModal(false)

	const handleSignIn = () => {
		//checkauth(id,pass) => return true => set isloggedin , false = return
		if (isLoggedIn) return
		setIsLoggedIn(true)
		console.log(isLoggedIn)
	}

	const handleSignOut = () => {
		setIsLoggedIn(false)
	}

	return isLoggedIn ? (
		<Button
			color="primary"
			variant="contained"
			sx={{ marginLeft: 3 }}
			onClick={handleSignOut}
		>
			Logout
		</Button>
	) : (
		<div>
			<Button
				color="primary"
				variant="contained"
				sx={{ marginLeft: 3 }}
				onClick={handleLoginModal}
			>
				Login
			</Button>
			<LoginModal
				openLoginModal={openLoginModal}
				handleClose={handleClose}
				handleSignIn={handleSignIn}
			/>
		</div>
	)
}

export default LoginLogoutButton
