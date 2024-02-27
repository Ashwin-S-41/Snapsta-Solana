import Link from 'next/link'
import SuggestionItem from './SuggestionItem'
import Image from 'next/image'
import Highlights from './Highlights'
import logoutIcon from '../public/assets/icons/logout.svg'
import settingsIcon from '../public/assets/icons/settings.svg'


const RightBarSuggestions = () => {
    const data = {
        stories: [
            {
                username: 'New',
                image:
                'https://www.freeiconspng.com/thumbs/plus-icon/plus-sign-icon-31.png',
            },
            {
                username: 'Goa',
                image:
                    'https://thumbs.dreamstime.com/b/tropical-concept-plumeria-flower-vector-illustration-icon-goa-traveling-lettering-90417937.jpg',
            },
            {
                username: 'Bali',
                image:
                    'https://cdni.iconscout.com/illustration/premium/thumb/bali-temple-4964872-4134153.png?f=webp',
            },
            {
                username: 'Kashmir',
                image:
                    'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-snow-hill-vector-png-image_6892208.png',
            },
            
        ],
    }
    return (
        <div className="flex flex-col mt-4">
            <div className='flex w-full justify-evenly'>

                <div className=' w-full flex flex-col items-center justify-center'> 
                    <div className=' font-bold'>472</div>
                    <div className=' font-semibold'>Posts</div>
                </div>
                <div className='border-gray-400 border-x-2 w-full flex flex-col items-center justify-center'> 
                    <div className=' font-bold'>472</div>
                    <div className=' font-semibold'>Posts</div>
                </div>
                <div className=' w-full flex flex-col items-center justify-center'> 
                    <div className='text-white font-bold'>472</div>
                    <div className=' font-semibold'>Posts</div>
                </div>
            </div>
            <div className='flex flex-col pt-5 px-4 '>
                <div className='text-base  font-bold'>
                    Ashwin Kumar
                </div>
                <div className=' pt-2 text-sm font-semibold'>
                    Cinephile 🎬|Software Engineer 💻| Student 🎓
                </div>
            </div>
            <div className='flex flex-col pt-5  '>
                <div className=' text-base font-bold px-4'>Story Highlights</div>
                <div className={ `stories-feed overflow-y-hidden py-4 px-2 items-center stories-feed-floating flex relative transition ease-linear duration-300`}>
                    {data &&
                        data.stories.map(item => <Highlights data={item} key={item.username} />)}
                </div>
            </div>
            
            <div className='px-4 mt-2 mx-4 py-2 flex cursor-pointer gap-2 w-full '>
                <Image
                        src={settingsIcon}
                        className={`object-contain `}
                        height={24}
                        width={24}
                        
                    />
                <div className='text-lg  font-semibold'>Settings</div>
            </div>
            <div className='px-4 mt-2 mx-4 py-2 flex cursor-pointer gap-2 w-full '>
                <Image
                        src={logoutIcon}
                        className={`object-contain`}
                        height={24}
                        width={24}
                        
                    />
                <div className='text-lg  font-semibold'>Logout</div>
            </div>

        </div>
    )
}

export default RightBarSuggestions
