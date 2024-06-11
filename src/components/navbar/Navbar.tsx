import "./navbar.scss";

export function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="../public/logo.png" alt="" className="logo"/>
            </div>
            <div className="user">
                <img src="../public/avatar.png" alt="" className="avatar"/>
                <img src="../public/chevron-down.png" alt="" className="arrow" />
            </div>
        </div>
    )
}