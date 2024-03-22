import Image from 'next/image'
import DisplayName from './common/DisplayName'
import plusIcon from '../public/assets/icons/plus.svg'



const Highlights = ({ data }) => {
    
    return (
        <div className={`story-item w-20 flex-shrink-0 flex flex-col justify-center items-center cursor-pointer`}>
            <div className={`highlights-photo-container `}>
                <div className={ `h-[3.6rem] w-[3.6rem] relative rounded-full overflow-hidden cursor-pointer border-white border-2`}>
                    <Image
                        src={data?.image}
                        layout='fill'
                        className={`object-cover`}
                        
                    />
                </div>
            </div>
            <DisplayName username={data?.username} className={`story-username text-black text-12-light mt-1`} />
        </div>
    )
}

export default Highlights