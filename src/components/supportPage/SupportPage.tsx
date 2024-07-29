import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import "./supportPage.scss";
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

export function SupportPage() {
    return (
        <div className="support">
            <TopNav />
            
            <div className="bigContainer">
                <div className="mainContainer">
                    <div className="header">
                        <div className="left">
                            <img src="/access-logo.png" alt="" />
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
                            <div className="topHeader">
                                <h1>Support & Updates</h1>
                            </div>
                            <div className="self-support">
                                <div className="self-header">
                                    <h2>Self-Support for free</h2>
                                    <i className="fa-solid fa-angle-up"></i>
                                </div>

                                <ul>
                                    <li>Six months of online app rebuilds for changes to your app configuration</li>
                                    <li>Apps function indefinitely subject to future compatibility with iOS and Android versions</li>
                                    <li>Community support through Median`s documentation and support portal</li>
                                </ul>
                                <button>Support Portal <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                            </div>
                            <div className="containers">
                                <div className="app-support">
                                    <div className="app-header">
                                        <h2>App Support & Updates</h2>
                                    </div>
                                    <ul>
                                        <li>Unlimited online app rebuilds and a guarantee of compatibility with iOS and Android updates</li>
                                        <li>Priority email support with one business day or sooner response from our team</li>
                                        <li>Engineering support for web to app integrationss and advanced troubleshooting</li>
                                    </ul>
                                    <div className="bottom">
                                        <h1>#20,000 <span>/year</span></h1>
                                        <button>Purchase</button>
                                    </div>
                                </div>
                                <div className="ent-support">
                                    <div className="app-header">
                                        <h2>Enterprise Support</h2>
                                    </div>
                                    <ul>
                                        <li>Technical support for MDM deploymens, private app stores, app security assessments</li>
                                        <li>Phone-based incidents reporting for business hours or 24-hour coverage</li>
                                        <li>SLA to provide certainty of ongoing compatibility and response yarget times</li>
                                    </ul>
                                    <div className="bottom">
                                        <h1>Custom Pricing</h1>
                                        <p>our team will contact you to discuss your requirements</p>
                                        <button>Contact Us</button>
                                    </div>
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
}