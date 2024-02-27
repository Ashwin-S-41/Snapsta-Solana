import Border from '../common/Border'
import StoryItem from './StoryItem'

const style = {
    wrapper: `stories-container sm:full-width mb-1`,
    
}

const Stories = ({ stories }) => {
    return (
        <div className={style.wrapper} border>
            <div className={ `stories-feed overflow-y-hidden pt-2 px-2 items-center stories-feed-floating flex relative transition ease-linear duration-300`}>
                {stories &&
                    stories.map(item => <StoryItem data={item} key={item.username} />)}
            </div>
        </div>
    )
}

export default Stories
