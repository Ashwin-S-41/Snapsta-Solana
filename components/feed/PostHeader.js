import Image from 'next/image'
import DisplayName from '../common/DisplayName'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalState } from "../../hooks";
import { truncate } from '../../utils/truncate';



const PostHeader = ({ username, owner, postId }) => {
    const {
        hasUserAccount,
        deletePost,
        wallet,
    } = useGlobalState();

    return (
        <div className="feed-item-header pl-2 pr-4 flex items-center">
            <div className="relative h-[3rem] w-[3rem] mr-2 rounded-full overflow-hidden">
                <Image
                    src={`https://api.dicebear.com/7.x/micah/svg?hair=dannyPhantom,fonze,mrT,pixie,turban&backgroundType=gradientLinear&backgroundColor=b6e3f4,ffdfbf&seed=${username}.svg`}
                    layout='fill'
                    alt={username}
                    className="object-cover"
                />
            </div>

            <DisplayName className="feed-item-header-text text-14-bold mr-1 ml-4 cursor-pointer" username={truncate(username)} />

            {/* <button className={style.moreIcon}>
                <AiOutlineClose onClick={() => deletePost(owner, postId)} disabled={!hasUserAccount} />
            </button> */}
            {owner.toString()==wallet?.publicKey.toString()&&
            <button
                   onClick={() => deletePost(owner, postId)} disabled={!hasUserAccount}
                  variant="ghost"
                  className="ml-auto flex">
                  <img
                    src={"/assets/icons/delete.svg"}
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </button>}
        </div>
    )
}

export default PostHeader
