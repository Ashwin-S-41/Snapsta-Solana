import Image from 'next/image'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import {logo} from '../public/assets/icons/logo2.svg'


import { GrHomeRounded } from 'react-icons/gr'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { HiPlus } from 'react-icons/hi'


// Solana Imports
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useGlobalState } from '../hooks'

Modal.setAppElement('#__next')





const Header = ({ setCreatePostModalOpen }) => {
    const router = useRouter()

    //SOLANA STUFF
    const {
        isConnected,
        wallet,
        hasUserAccount,
        posts,
        createUser,
        createPost,
        updatePost,
    } = useGlobalState();
    const username="Ashwin";
    return (
        <nav className={`navigation fixed z-20 top-0 w-full px-2 `}>
            <div className={` h-[54px] flex  justify-between items-center `}>
                <div className={`flex items-center gap-2 h-11 w-11 relative mt-[.6rem]`}>
                <img
                    src={"/assets/icons/logo2.svg"}
                    alt="edit"
                    width={80}
                    height={80}
                  />
                  <div className='text-transparent text-3xl italic font-semibold font-serif bg-gradient-to-b from-[#867dff] to-[#3222ff] bg-clip-text'>Snapsta</div>
                </div>

                <div className={`header-icons flex  items-center justify-around`}>
                    <HiPlus className={`mr-[.8rem] cursor-pointer`} size={22} onClick={() => setCreatePostModalOpen(true)} />

                    {!hasUserAccount && isConnected ? (
                        <button className={`border rounded-lg p-4 text-xs font-medium`} onClick={() => createUser( )}>Create user</button>

                    ) : (
                        <></>
                    )}
                    <WalletMultiButton />
                </div>
            </div>
        </nav>
    )
}

export default Header
