// import { useAppContext } from '../../context/context'

import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { FaRegComment, FaEdit } from 'react-icons/fa'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine, RiDislikeFill } from 'react-icons/ri'
import { useGlobalState } from "../../hooks";
import { useSearchParams } from 'next/navigation';
import {useEffect, useState } from 'react';



const ActionButtons = ({data, owner, postId,isLiked, toggleEditPostModal, }) => {
    //   const { tipOwner } = useAppContext()
    const {isPostLiked,setLiked}= useState(false);
    const {
        wallet,
        hasUserAccount,
        likePost,
        dislikePost,
        likers,
    } = useGlobalState();
    const [randomLikeNumber, setRandomLikeNumber] = useState(0)
    useEffect(() => {
        setRandomLikeNumber(Math.floor(Math.random() * 100))
    }, [])
    

    return (
        <div className={"flex px-1 w-full justify-between"}>

            { isLiked?(
            <div className='flex items-center'>
              <button
            onClick={() =>dislikePost(owner, postId, wallet?.publicKey)} disabled={!hasUserAccount}
              variant="ghost"
              className={"m-2 color-black cursor-pointer"}>
              <img
                src={"/assets/icons/liked.svg"}
                alt="delete"
                width={24}
                height={24}
              />
            </button>
            <a className={` text-14-bold text-white `}>{Number(data.likes.toString())+randomLikeNumber} likes</a>
            
            </div>)
            :
             (
             <div className='flex items-center'>
             <AiOutlineHeart className={"m-2 text-white cursor-pointer"} size={24} onClick={() => likePost(owner, postId, wallet?.publicKey)} disabled={!hasUserAccount} />
             
             <a className={` text-14-bold text-white `}>{Number(data.likes.toString())+randomLikeNumber} likes</a>
             </div>
             )}
            
            
                {owner.toString()==wallet?.publicKey.toString()&&
            <button
                  size={22} onClick={() => toggleEditPostModal(true, postId, owner)} disabled={!hasUserAccount}
                  variant="ghost"
                  className={"m-2  cursor-pointer"}>
                  <img
                    src={"/assets/icons/edit2.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </button>}
            

        </div>
    )
}

export default ActionButtons
