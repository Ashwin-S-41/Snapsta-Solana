import { useEffect, useState } from 'react'
import Border from '../common/Border'
import PostHeader from './PostHeader'
import ActionButtons from './ActionButtons'
import Caption from './Caption'
import PostImage from './PostImage'
import { truncate } from '../../utils/truncate'




const FeedItem = ({ data,isLiked, walletKey, setEditPostModalOpen, toggleEditPostModal, setCreatePostModalOpen }) => {
    const [randomLikeNumber, setRandomLikeNumber] = useState(0)
    useEffect(() => {
        setRandomLikeNumber(Math.floor(Math.random() * 100))
    }, [])
    
    console.log("idhu",isLiked)
    return (
        <div className={` bg-white shadow-xl rounded-[34px] mx-1 feed-item-container mb-3 py-2 flex flex-col`}>
            <PostHeader username={data.owner.toString()} owner={data.owner} postId={data.id} />
            <Caption
                data={{
                    username: truncate(data.owner.toString()),
                    caption: data.title,
                }}
            />
            <PostImage imgUrl={data.image} alt="post" />

            <ActionButtons
                id={data.id.toString()}
                className={`feed-item-buttons-container w-full h-10 pl-2 pr-2 mt-2 flex items-center`}
                owner={data.owner}
                postId={data.id}
                walletKey={walletKey}
                isLiked={isLiked}
                setEditPostModalOpen={setEditPostModalOpen}
                toggleEditPostModal={toggleEditPostModal}
                setCreatePostModalOpen={setCreatePostModalOpen}
            />

            <a className={`feed-item-text text-14-bold mr-1 ml-4`}>{Number(data.likes.toString())+randomLikeNumber} likes</a>

            
        </div>
    )
}

export default FeedItem
