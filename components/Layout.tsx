const Layout = ({ children }) => {
    return (
        <>
            <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
                {children}
            </div>
        </>
    )
}

export default Layout;