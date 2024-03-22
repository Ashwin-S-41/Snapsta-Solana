import Router from 'next/router'

const DisplayName = ({ username }) => {

    return (
        <p
            className='text-14-bold text-white  mr-1 cursor-pointer'
        > 
            {username}
        </p>
    )
}

export default DisplayName
