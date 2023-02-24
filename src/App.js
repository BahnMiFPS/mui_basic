import "./App.css"
import SearchAppBar from "./components/SearchAppBar"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { createContext, useState } from "react"
import { UserContext } from "./hooks/UserContext"
import { LoginModalContext } from "./hooks/LoginModalContext"

const theme = createTheme({
	// palette: {
	// 	mode: "dark",
	// 	primary: deepOrange,
	// 	divider: deepOrange[700],

	// 	text: {
	// 		primary: "#fff",
	// 		secondary: grey[500],
	// 	},
	// },
	palette: {
		mode: "dark",

		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
})

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <HomePage />,
	},
])

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [openLoginModal, setOpenLoginModal] = useState(false)

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LoginModalContext.Provider
					value={{ openLoginModal, setOpenLoginModal }}
				>
					<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
						<SearchAppBar />
						<RouterProvider router={router} />
					</UserContext.Provider>
				</LoginModalContext.Provider>
			</ThemeProvider>
		</div>
	)
}

export default App
