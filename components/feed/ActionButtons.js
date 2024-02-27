// import { useAppContext } from '../../context/context'

import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { FaRegComment, FaEdit } from 'react-icons/fa'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine, RiDislikeFill } from 'react-icons/ri'
import { useGlobalState } from "../../hooks";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const style = {
    wrapper: `flex px-1 w-full justify-between`,
    icon: `m-2 color-black cursor-pointer`,
    tipIcon: `flex align-center cursor-pointer mr-[1rem] mt-[10px]`,
}

const ActionButtons = ({ owner, postId,isLiked, toggleEditPostModal, }) => {
    //   const { tipOwner } = useAppContext()
    const {isPostLiked,setLiked}= useState(false);
    const {
        wallet,
        hasUserAccount,
        likePost,
        dislikePost,
        likers,
    } = useGlobalState();


    return (
        <div className={style.wrapper}>

            { isLiked?(
            <button
            onClick={() =>dislikePost(owner, postId, wallet?.publicKey)} disabled={!hasUserAccount}
              variant="ghost"
              className={style.icon}>
              <img
                src={"/assets/icons/liked.svg"}
                alt="delete"
                width={24}
                height={24}
              />
            </button>)
            :
             (
             <AiOutlineHeart className={style.icon} size={24} onClick={() => likePost(owner, postId, wallet?.publicKey)} disabled={!hasUserAccount} />)}
            
            
                {owner.toString()==wallet?.publicKey.toString()&&
            <button
                  size={22} onClick={() => toggleEditPostModal(true, postId, owner)} disabled={!hasUserAccount}
                  variant="ghost"
                  className={style.icon}>
                  <img
                    src={"/assets/icons/edit1.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </button>}
            

        </div>
    )
}

export default ActionButtons
