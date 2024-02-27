import Image from 'next/image'
import RightBarSuggestions from './RightBarSuggestions'
import DisplayName from './common/DisplayName'
// import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
// import truncateEthAddress from 'truncate-eth-address'
import { useGlobalState } from '../hooks'
import { truncate } from '../utils/truncate'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const style = {
    wrapper: `suggestions hidden  w-[25%] fixed left-0 lg:flex lg:flex-col items-center `,
    userInfoContainer: `right-bar-user-info flex items-center`,
    imageContainer: `h-[3rem] w-[3rem] relative rounded-full overflow-hidden cursor-pointer border-white border-2`,
    image: `object-cover`,
}

const HomeRightBar = ({ data }) => {
    
    //SOLANA STUFF
    const {
        isConnected,
        wallet,
        hasUserAccount,
        posts,
        userAccount,
        createUser,
        createPost,
        updatePost,
    } = useGlobalState();

    console.log(userAccount);

    return (
        <div className={style.wrapper}>
            {userAccount ? (
                <>
                    <div className={` flex items-center`}>
                        
                        <div className='user-info-texts ml-5 w-full flex flex-col items-center'>
                            <div className='story-photo-container p-8'>   
                                <Image
                                src={`https://api.dicebear.com/7.x/micah/svg?hair=dannyPhantom,fonze,mrT,pixie,turban&backgroundType=gradientLinear&backgroundColor=b6e3f4,ffdfbf&seed=${userAccount.owner.toString()}.svg`}
                                
                                alt={userAccount.owner.toString()}
                                height={100}
                                width={100}
                                className=' object-cover rounded-full'

                                /></div>
                            <div className='text-2xl  font-bold'>Ashwin Kumar</div>
                            <div className='text-xl font-semibold text-gray-500'>@axhwin.10</div>
                        </div>
                    </div>
                    <RightBarSuggestions data={data} />
                </>
            ):<>
            <div className='flex flex-col items-center justify-center gap-y-3'>
            <WalletMultiButton/>
            <div className='text-xl font-semibold '>Login to View Your Profile</div>
            </div>
            </>}
            
        </div>
    )
}

export default HomeRightBar
