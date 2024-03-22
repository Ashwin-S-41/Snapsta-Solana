import { useEffect, useState } from 'react'
import Border from '../common/Border'
import PostHeader from './PostHeader'
import ActionButtons from './ActionButtons'
import Caption from './Caption'
import PostImage from './PostImage'
import { truncate } from '../../utils/truncate'




const FeedItem = ({ data,isLiked, walletKey, setEditPostModalOpen, toggleEditPostModal, setCreatePostModalOpen }) => {
    
    return (
        <div className={` bg-[#09090A] border-2 border-[#1f1f22] shadow-xl rounded-[34px] mx-1 feed-item-container mb-3 py-4 flex flex-col`}>
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
                data={data}

                isLiked={isLiked}
                setEditPostModalOpen={setEditPostModalOpen}
                toggleEditPostModal={toggleEditPostModal}
                setCreatePostModalOpen={setCreatePostModalOpen}
            />



            
        </div>
    )
}

export default FeedItem
