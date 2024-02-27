import Header from './Header'

const style = {
    wrapper: `container`,
    appContainer: `homepage-container flex w-full `,
}

const Layout = ({ children, setCreatePostModalOpen }) => {
    return (
        <div className={style.wrapper}>
            <Header setCreatePostModalOpen={setCreatePostModalOpen} />
            <div className={`homepage-container  flex w-full  justify-center `}>{children}</div>
        </div>
    )
}

export default Layout