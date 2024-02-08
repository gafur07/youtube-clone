import Home from '../../screens/Home/Home'
import Navbar from '../Navbar/Navbar'
import { Outlet } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar'
const Layout = () => {
	return (
		<>
		<Navbar />
		<div className='flex gap-4 items-start'>
			<Sidebar />
			<Home />
		</div>
		<Outlet />
		</>
	)
}

export default Layout