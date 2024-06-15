import { TopNav } from "../global/topnav";
import "./createAppOverview.scss";
import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";

export function CreateAppOverview() {
    return (
        <div className="createAppOverview">
            <TopNav />
            <div className="bigContainer">
                <div className="mainContainer">
                    <div className="header">
                        <div className="left">
                            <img src="../../public/access-logo.png" alt="" />
                            <h2>WebhostingApp</h2>
                        </div>
                        <div className="right">
                            <p>Last saved 12days ago</p>
                            <button>Done Editing</button>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div className="leftContainer">
                        <div className="sidenav">
                            <AppSideNav style="relative desktopNav w-60 overflow-hidden dark:bg-zinc-800 bg-white me-2"/>
                        </div>
                        <div className="center">
                            <form action="">
                                <div className="inputs">
                                    <h2>Website URL</h2>
                                    <p>The webpage to display when your app loads.</p>
                                    <input type="url" name="url" placeholder="https://" />
                                </div>
                                <div className="inputs">
                                    <h2>App Name</h2>
                                    <p>Our App Name is displayed on the device home screen.</p>
                                    <input type="text" name="AppName" placeholder="App Name" />
                                </div>
                                <div className="inputs">
                                    <h2>Organization</h2>
                                    <p>The Organization account where this new app will reside.</p>
                                    <select className="form-select" aria-label="Default select example">
                                      <option value="1">Emmy`s Team</option>
                                    </select>
                                </div>

                                <button>Start Building your app</button>
                            </form>
                            
                        </div>
                    </div>        
                </div>
                <div className="simulator">
                    <SimulationView />
                </div>
            </div>        
        </div>
    )
};