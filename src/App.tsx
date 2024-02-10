import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { routes } from "./utils/routes"

const App = () => {
	return (
		<>
		<Layout />
		{/* <Routes>
			<Route path="/" element={<Layout />} />
		</Routes> */}
		</>
	)
}

export default App