import * as React from "react"

import {
	Button,
	Chip,
	Divider,
	Grid,
	Modal,
	Paper,
	TextField,
} from "@mui/material"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { UserContext } from "../hooks/UserContext"
import { useContext } from "react"
import { LoginModalContext } from "../hooks/LoginModalContext"
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
export default function BookCard({ book }) {
	const [openLearnMore, setOpenLearnMore] = React.useState(null)
	const navigate = useNavigate()
	const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
	const { openLoginModal, setOpenLoginModal } = useContext(LoginModalContext)

	const handleCloseLearnMore = () => setOpenLearnMore(false)
	const handleOpenLearnMore = () => setOpenLearnMore(true)

	const handleLearnMoreBtn = () => {
		if (isLoggedIn) {
			handleOpenLearnMore()
		} else setOpenLoginModal(true)
	}
	return (
		<Paper>
			<Grid2 xs={12} padding={2}>
				<Typography gutterBottom variant="h5" component="div">
					{book.title}
				</Typography>

				<Divider />
				{book.skills.slice(0, 4).map((skill) => (
					<Chip
						label={skill}
						sx={{ marginRight: 1, marginTop: 1 }}
						color="secondary"
					/>
				))}
				<Typography
					gutterBottom
					variant="subtitle1"
					component="div"
					marginTop={2}
				>
					{book.description}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "2em",
					}}
				>
					<Button
						variant="contained"
						color="primary"
						onClick={handleLearnMoreBtn}
					>
						Learn More
					</Button>
					<Modal
						open={openLearnMore}
						onClose={handleCloseLearnMore}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Grid width={"100%"} sx={style} gap={2} textAlign={"center"}>
							<Typography gutterBottom variant="h5" component="div">
								{book.title}
							</Typography>

							<Divider />
							<Typography
								gutterBottom
								variant="subtitle1"
								component="div"
								marginTop={2}
							>
								{book.description}
							</Typography>
							<Grid>
								<Typography>Skills:</Typography>
								{book.skills.slice(0, 4).map((skill) => (
									<Chip
										label={skill}
										sx={{ marginRight: 1, marginTop: 1 }}
										color="secondary"
									/>
								))}
							</Grid>
							<Typography mt={2}>City: {book.city}</Typography>
						</Grid>
					</Modal>
				</Box>
			</Grid2>
		</Paper>
	)
}
