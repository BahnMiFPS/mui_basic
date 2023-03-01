import { Container } from "@mui/system"
import React from "react"
import BookCard from "../components/BookCard"
import books from "../books.json"
import Grid2 from "@mui/material/Unstable_Grid2"
import { Box, Pagination } from "@mui/material"
import AppPagination from "../components/AppPagination"
import SearchAppBar from "../components/SearchAppBar"

function HomePage() {
	return (
		<Container>
			<SearchAppBar />
			<Grid2 container spacing={{ xs: 2, md: 3 }} mt={2}>
				{books.slice(0, 5).map((book) => (
					<Grid2 md={6} xl={6} sm={12}>
						<BookCard book={book} />
					</Grid2>
				))}
			</Grid2>
			<AppPagination />
		</Container>
	)
}

export default HomePage
