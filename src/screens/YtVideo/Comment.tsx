import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { getComment } from "@/store/reducers/comment/comment.action"
import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
interface ICommentID {
	id: string
}
const Comment: FC<ICommentID> = ({ id }) => {
	const { comment } = useTypedSelector(store => store.comment)
	console.log(comment);
	
	const dispatch = useAppDispatch()
	const params = useParams()

	// useEffect(() => {
	// 	dispatch(getComment(id))
	// },[params])
	return (
		<div>Comment</div>
	)
}

export default Comment