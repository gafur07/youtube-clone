import YtVideo from './YtVideo'
import VideoList from './VideoList'

const Video = () => {
	return (
		<div className='max-w-full flex gap-6 items-start min-h-[85vh] mt-[80px] px-[1%] overflow-x-hidden'>
				<YtVideo />
				<VideoList />
		</div>
	)
}

export default Video