import YtVideo from './YtVideo'
import VideoList from './VideoList'

const Video = () => {
	return (
		<div className='max-w-full over'>
			<div className="container flex gap-6">
				<YtVideo />
				<VideoList />
			</div>
		</div>
	)
}

export default Video