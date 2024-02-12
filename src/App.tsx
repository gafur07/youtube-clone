import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { routes } from "./utils/routes"

const App = () => {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}>
				{
					routes.map((item) => (
						<Route key={item.path} path={item.path} element={<item.element />} />
					))
				}
			</Route>
		</Routes>
		</>
	)
}

export default App