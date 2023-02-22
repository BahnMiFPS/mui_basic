import { Routes } from "react-router-dom"
import "./App.css"
import SearchAppBar from "./components/SearchAppBar"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
import { blue, deepOrange, grey, purple, red } from "@mui/material/colors"

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
])

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SearchAppBar />
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	)
}

export default App
