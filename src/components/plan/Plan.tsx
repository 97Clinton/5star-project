import "./plan.scss";
import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import { AppSideNav } from "../customui/app/sidenav";
import { motion } from "framer-motion";

const layoutVariant = {
    hidden: {
      opacity: 0,
      y: "100vw",
      scale: 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.7
      }
    }
  }

export function Plan() {

    return (
        <div className="plan">
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
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <motion.div className="leftContainer"
                        variants={layoutVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="sidenav">
                            <AppSideNav style="relative desktopNav w-60 overflow-hidden dark:bg-zinc-800 bg-white me-2"/>
                        </div>
                        <div className="center">
                            <div className="header">
                                <h1>Plan</h1>
                            </div>
                            <div className="content">
                                <h6>Application</h6>
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Free Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>#0.00 <span>one-time payment</span></h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Gold Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>#10,000.00 <span>one-time payment</span></h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <p className="pLicense">5star Free License</p>

                                <div className="box">
                                    <div className="boxTop">
                                        <h6>Premium Plan </h6>
                                        <button>Add License</button>
                                    </div>
                                    <h1>#20,000.00 <span>one-time payment</span></h1>
                                    <p>
                                        A paid license is required to remove Median branding and to <br />
                                        access advanced functionality including the JavaScript Bridge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>    
                </div>

                <div className="simulator">
                    <SimulationView />
                </div>
            </div>        
        </div>
    )
};