import { Route, Routes } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../../screens/Home/Home"
import History from "../../screens/History/History"

const Main = () => {
	return (
		<>
			<div className="flex gap-4 items-start">
				<Sidebar />
					<Routes>
						<Route path="/" element={<Home />}/>
						<Route path="/history" element={<History />}/>
					</Routes>
			</div>
		</>
	)
}

export default Main