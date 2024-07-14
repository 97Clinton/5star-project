import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();
    
    return (
        <div className="sidebar">
            <div className="menu">
                <a className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i className="fa-solid fa-bars"></i></a>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                        <div className="header">
                            <h2 className="offcanvas-title" id="offcanvasWithBackdropLabel">Odejinmi Samuel`s <br /> Team</h2>
                            <img src="/right-arrow.png" alt="" />
                        </div>
                        
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="list" onClick={() => navigate("/app")}>
                            <img src="/phone-icon.png" alt="" />
                            <p>Apps</p>
                        </div>
                        <div className="list" onClick={() => navigate("/app/members")}>
                            <img src="/users-icon.png" alt="" />
                            <p>Members</p>
                        </div>
                        <div className="list" onClick={() => navigate("/app/settings")}>
                            <img src="/settings-icon.png" alt="" />
                            <p>Settings</p></div>
                        <div className="list" onClick={() => navigate("/app/overview")}>
                            <img src="/create-icon.png" alt="" />
                            <p>Create New App</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box">
                
                <div className="header">
                    <h2>Odejinmi Samuel`s <br /> Team</h2>
                    <img src="/right-arrow.png" alt="" />
                </div>
                <div className="lists">
                    <div className="list" onClick={() => navigate("/app")}>
                        <img src="/phone-icon.png" alt="" />
                        <p>Apps</p>
                    </div>
                    <div className="list" onClick={() => navigate("/app/members")}>
                        <img src="/users-icon.png" alt="" />
                        <p>Members</p>
                    </div>
                    <div className="list" onClick={() => navigate("/app/settings")}>
                        <img src="/settings-icon.png" alt="" />
                        <p>Settings</p></div>
                    <div className="list" onClick={() => navigate("/app/overview")}>
                        <img src="/create-icon.png" alt="" />
                        <p>Create New App</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}