import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import "./pageLayout.scss";

export function PageLayout() {
    return (
        <div className="pageLayout">
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