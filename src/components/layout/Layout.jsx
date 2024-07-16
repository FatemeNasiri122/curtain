import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="max-w-[1440px] m-auto">
            <Outlet />
        </div>
    )
}

export default Layout;