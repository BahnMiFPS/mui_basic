import { Box, Pagination } from "@mui/material"
import React from "react"
import books from "../books.json"

const pageSize = 3
export default function AppPagination() {
	console.log(books.length)
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			sx={{
				margin: "20px 0px",
			}}
		>
			<Pagination count={10} color="secondary" />
		</Box>
	)
}
