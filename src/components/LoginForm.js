import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
	Button,
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../hooks/AuthContext"
import { UserContext } from "../hooks/UserContext"

export default function LoginForm({ callback }) {
	const [username] = useState("Vu copy cai nay")
	const [password] = useState("123")

	const auth = useContext(AuthContext)
	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword(!showPassword)
	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}
	const handleLogin = () => {
		auth.singin(username, callback)
	}

	return (
		//sx={style}
		<Box component="form" gap={4}>
			<TextField
				disabled
				label="Username"
				default="user"
				value={username}
				sx={{ m: 1 }}
			/>
			<FormControl sx={{ m: 1 }} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
				<OutlinedInput
					disabled
					id="outlined-adornment-password"
					type={showPassword ? "text" : "password"}
					value={password}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label="Password"
				/>
			</FormControl>

			<Button
				onClick={handleLogin}
				sx={{ m: 1, width: "10ch" }}
				variant="contained"
			>
				Login
			</Button>
		</Box>
	)
}
