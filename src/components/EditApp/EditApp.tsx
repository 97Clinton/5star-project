import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import "./editApp.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const buttonsVariant = {
  hidden: {
    opacity: 0,
    y: "50vw"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1
    }
  }
}

const contentVariant = {
  hidden: {
    opacity: 0,
    y: "50vw"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1
    }
  }
}

export function EditApp() {

    const navigate = useNavigate();

    return (
        <div className="editApp">
            <TopNav />

            <div className="container">
                <div className="left">
                    <motion.div className="top"
                      variants={buttonsVariant}
                      initial="hidden"
                      animate="visible"
                    >
                        <div className="topp">
                            <img src="/access-logo.png" alt="" id="accessLogo" />
                            <h2>WebhostingApp</h2>
                            <p>Last saved 12 days ago</p>
                        </div>
                        <div className="topButtons">
                            <button onClick={() => navigate("/app/edit/overview")}><i className="fa-solid fa-pen-to-square"></i>  Edit App</button>
                            <button><img src="/backup-icon.png" alt="" />  Manage App Backups</button>
                            <button><i className="fa-solid fa-copy"></i>  Cone App on 5star</button>
                        </div>
                    </motion.div>
                    <motion.div className="content"
                      variants={contentVariant}
                      initial="hidden"
                      animate="visible"
                    >
                        <div className="first">
                            <h2>Overview</h2>
                            <div className="boxes">
                                <div className="leftBox">
                                    <div className="leftLinkBox">
                                        <h6>Website URL</h6>
                                        <p>https://webhosting.5starcompany.com.ng/  <i className="fa-solid fa-copy"></i></p>
                                    </div>
                                    <div className="leftLinkBox">
                                        <h6>Website URL</h6>
                                        <p>https://webhosting.5starcompany.com.ng/  <i className="fa-solid fa-copy"></i></p>
                                    </div>
                                </div>
                                <div className="rightBox">
                                    <div className="rightLinkBox">
                                        <h6>Organization</h6>
                                        <p>Odejinmi Samuel`s Team <i className="fa-solid fa-copy"></i></p>
                                    </div>
                                    <div className="rightLinkBox">
                                        <h6>Public Sharing Link</h6>
                                        <p>https://webhosting.5starcompany.com.ng/ <i className="fa-solid fa-copy"></i></p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="download">
                            <div className="title">
                                <h2>Download your App</h2>
                            </div>
                            <div className="diagrams">
                                <div className="ios">
                                    <p><i className="fa-brands fa-apple"></i>  iOS</p>
                                    <button><i className="fa-solid fa-download"></i> Download iOS</button>
                                </div>
                                <div className="android">
                                    <p><i className="fa-brands fa-android"></i>  Android</p>
                                    <button><i className="fa-solid fa-download"></i> Download iOS</button>
                                </div>
                            </div>
                        </div>
                        <div className="license">
                            <div className="title">
                                <h2>License</h2>
                            </div>
                            <div className="licenseContainer">
                                <div className="leftLicense">
                                    <div className="list">
                                        <p>Application:</p>
                                        <h6>5star Free License</h6>
                                    </div>
                                    <div className="list">
                                        <p>Push Notification:</p>
                                        <h6>None</h6>
                                    </div>
                                    <div className="list">
                                        <p>Native Plugins:</p>
                                        <h6>None</h6>
                                    </div>
                                </div>
                                <div className="rightLicense">
                                    <div className="list">
                                        <p>App Development:</p>
                                        <h6>Self-Service</h6>
                                    </div>
                                    <div className="list">
                                        <p>App Store Publising:</p>
                                        <h6>Self-Publish</h6>
                                    </div>
                                    <div className="list">
                                        <p>App Support & Updates:</p>
                                        <h6>Self-Support</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="footerButton">
                                <button onClick={() => navigate("/app/edit/overview")}><i className="fa-solid fa-pen-to-square"></i>  Edit App</button>
                                <p>Last saved 12 days ago</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="right">
                    <SimulationView />
                </div>
            </div>
        </div>
    )
};