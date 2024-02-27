import Image from 'next/image'
import DisplayName from '../common/DisplayName'
import { useGlobalState } from '../../hooks'



const StoryItem = ({ data }) => {
    const {
        wallet,
    } = useGlobalState();
    return (
        <div className={`story-item w-20 flex-shrink-0 flex flex-col justify-center items-center cursor-pointer`}>
            <div className={`story-photo-container `}>
                <div className={ `h-[4rem] w-[4rem] relative rounded-full overflow-hidden cursor-pointer border-white border-2`}>
                    <Image
                        src={data?.image}
                        layout='fill'
                        className={`object-cover`}
                        alt={data?.username}
                    />
                </div>
            </div>
            <DisplayName username={data?.username} className={`story-username text-black text-12-light mt-1`} user={wallet?.publicKey} />
        </div>
    )
}

export default StoryItem
