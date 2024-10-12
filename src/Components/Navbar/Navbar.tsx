import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navLeft">
                <img src="/public/images/logo.svg" alt="" />
                <h3>Mostafa Admin</h3>
            </div>
            <div className="navRight">
                <img src="/public/images/search.svg" alt="" />
                <img src="/public/images/app.svg" alt="" />
                <img src="/public/images/expand.svg" alt="" />
                <div className="notification">
                    <img src="/public/images/notifications.svg" alt="" />
                    <span className="count">1</span>
                </div>
                <div className="user">
                    <img className="me" src="/public/images/acountImage.jpg" alt="" />
                    <span className="name">Mostafa</span>
                </div>
                <img src="/public/images/setting.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar
