import Image from 'next/image'



const PostImage = ({ imgUrl }) => {
    return (
        <div className={` flex relative p-2 items-center`}>
            <div className={` relative transition ease-linear duration-200 flex-1 flex h-[230px] w-[300px]  m-auto`}>
                <Image className={`object-cover rounded-2xl`} src={imgUrl} height={500} width={500} />
            </div>
        </div>
    )
}

export default PostImage
