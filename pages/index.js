import { data } from '../static/data'
import Layout from "../components/Layout";
import Stories from '../components/stories/Stories';
import HomeRightBar from '../components/HomeRightBar';
import FeedItem from '../components/feed/Item';
import { useGlobalState } from "../hooks";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import EditPostModal from '../components/modals/EditPostModal';
import CreatePostModal from '../components/modals/CreatePostModal';

export default function Home() {
  // States to grab the post and open modals
  const [editPostModalOpen, setEditPostModalOpen] = useState(false)
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false)
  const [currentEditPostID, setCurrentEditPostID] = useState(null)
  // Function to target which post is being edited
  const toggleEditPostModal = (value, postId, owner) => {
    setCurrentEditPostID(postId)


    setEditPostModalOpen(value)
  }

  
 
  const style = {
    container: `homepage-feed lg:mr-8 flex flex-col`,
  }

  //SOLANA STUFF
  const {
    wallet,
    posts,
    createPost,
    updatePost,
    likers,
  } = useGlobalState();
  const isLikedFunc = (post) => {
    if (likers) 

    return (likers.filter(liker => liker.liker.toString() === wallet?.publicKey?.toString()&&post?.id.toString() === liker.postId.toString() && post?.owner.toString() === liker.postOwner.toString()))[0]?true:false;
  }
  
  
  return (
    <Layout
      setCreatePostModalOpen={setCreatePostModalOpen}
      className='relative'
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex w-full lg:gap-3 justify-end '>
      <HomeRightBar className=" " data={  data.suggestions} />
      <div className={`  lg:pl-4  absolute overflow-hidden bg-[#000000]  rounded-2xl h-[89vh] w-full right-0 flex flex-col  lg:w-[75%]`}>
        <div className=' overflow-y-scroll scrollingu'>
         <div className='text-2xl font-semibold px-2 pt-2'>Stories</div>         
        <Stories stories={data.stories} />

<>
  {/* Render posts */}
  <div className='text-2xl font-semibold px-2 pb-2'>Feed</div>
  <div className='flex flex-wrap w-full '>
  {posts
    ?  Object.values(posts)
    .sort((a, b) => b.id - a.id).map((post, i) => (
      <FeedItem
        data={post}
        key={i}
        isLiked={isLikedFunc(post)}
        walletKey={wallet?.publicKey}
        setEditPostModalOpen={setEditPostModalOpen}
        toggleEditPostModal={toggleEditPostModal}

      />
    ))
    : "Loading..."}
  </div>
</>
<CreatePostModal createPost={createPost} createPostModalOpen={createPostModalOpen} setCreatePostModalOpen={setCreatePostModalOpen} />
<EditPostModal updatePost={updatePost} editPostModalOpen={editPostModalOpen} setEditPostModalOpen={setEditPostModalOpen} currentEditPostID={currentEditPostID} />

        </div>
      
      </div>
      </div>
    </Layout>
  );
}
