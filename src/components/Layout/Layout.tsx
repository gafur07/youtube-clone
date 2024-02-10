import Navbar from '../Navbar/Navbar'
import { Route, Routes } from "react-router-dom"
import Main from '../Main/Main'
import Video from '../../screens/YtVideo'

const Layout = () => {
	return (
		<>
		<Navbar />
		<Routes>
			<Route path='*' element={<Main />}/>
			<Route path='video/:videoId' element={<Video />}/>
		</Routes>
		</>
	)
}

export default Layout