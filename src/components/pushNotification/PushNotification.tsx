import { AppSideNav } from "../customui/app/sidenav";
import { SimulationView } from "../global/simulationview";
import { TopNav } from "../global/topnav";
import "./pushNotification.scss";
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

export function PushNotification() {
    return (
        <div className="pushNotification">
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
                            <div className="top">
                                <h2>Push Notifications</h2>
                                <p>OneSignal</p>
                            </div>
                            <div className="content">
                                <div className="first tab">
                                    <p>OneSignal can be tested during development. A license is required to publish.</p>
                                    <h2>#20,000 <span>one-time payment</span></h2>
                                    <button>Add License</button>
                                </div>
                                <div className="second tab">
                                    <div className="title">
                                        <h2>Enable OneSignal</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <form className="radioGroup">
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                          <label className="form-check-label" htmlFor="inlineRadio1">Disable</label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                          <label className="form-check-label" htmlFor="inlineRadio2">Enable</label>
                                        </div>
                                    </form>

                                </div>
                                <div className="third tab">
                                    <div className="title">
                                        <h2>Legacy Mode</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>Your app will integrate with the latest OneSignal SDKs and user-centric data model by default. <br /> 
                                        Legacy mode provides support for OneSignal`s v4 SDKs and their previous device-centric data model. To migrate your app from legacy mode o the latest SDKs disable this
                                        setting and refer to OneSignal`s User Model Migration Guide as linked in our documentation.
                                    </p>
                                    <form className="radioGroup">
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                          <label className="form-check-label" htmlFor="inlineRadio1">Disable</label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                          <label className="form-check-label" htmlFor="inlineRadio2">Enable</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="fourth tab">
                                    <div className="title">
                                        <h2>App-ID</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        Median requires just your OneSignal App Id to configure OneSignal to send notifications to your app. You will find this on your OneSignal Dashboard under App Settings 
                                        <span><i className="fa-solid fa-arrow-right"></i></span> Keys & IDs.
                                    </p>
                                    <input type="text" name="app-id" placeholder="xxxxxxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx"/>
                                </div>
                                <div className="fifth tab">
                                    <div className="title">
                                        <h2>Automatic Registration</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        By default, on first launch your app will automatically register for push notifications and prompt for user consent. When set to manual,
                                        you must initiate registation using the Javascript Bridge.
                                    </p>
                                    <form className="radioGroup">
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                          <label className="form-check-label" htmlFor="inlineRadio1">Automatic</label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                          <label className="form-check-label" htmlFor="inlineRadio2">Manual</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="sixth tab">
                                    <div className="title">
                                        <h2>Automatic Data Transmission</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        By default, your app will automatically send device data to OneSignal prior to 
                                        requesting push notification consent. This includes obtaining  a OneSignalUserId 
                                        which can be used to associate the device and user. To facilitate GDPR compliance, 
                                        you may set this to manual which will defer sending device data until you obtain 
                                        consent from the user. You must then use the Javascript Bridge to confirm consent 
                                        has bbeen granted and begin transmitting data.
                                    </p>
                                    <form className="radioGroup">
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                          <label className="form-check-label" htmlFor="inlineRadio1">Automatic</label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                          <label className="form-check-label" htmlFor="inlineRadio2">Manual</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="seventh tab">
                                    <div className="title">
                                        <h2>Foreground Notifications</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <form className="radioGroup">
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                          <label className="form-check-label" htmlFor="inlineRadio1">Show</label>
                                        </div>
                                        <div className="form-check">
                                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                          <label className="form-check-label" htmlFor="inlineRadio2">Hide</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="eight tab">
                                    <div className="title">
                                        <h2>Foreground Notifications</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        Android notification icons are built into your app and 
                                        must be a monochromatic image with transparent background.
                                    </p>
                                    <div className="android">
                                        <h2><i className="fa-brands fa-android"></i> Android</h2>
                                        <div className="androidBottom">
                                            <button>Change Image</button>
                                            <i className="fa-brands fa-android"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="ninth tab">
                                    <div className="title">
                                        <h2>Automatic Data Transmission</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        Display a native UI within your app which users can use to toggle OneSignal 
                                        data tags on/off to self-manage their subscriptions. Host a JSON file your app 
                                        will load dynamically at routine to determine the data tags to display in the UI.
                                    </p>
                                    <input type="text" name="url" placeholder="https://www.topwisesz.com/assets/section2_4_.271c6ee4" />
                                </div>
                                <div className="tenth tab">
                                    <div className="title">
                                        <h2>Notification Sound</h2>
                                        <i className="fa-solid fa-angle-up"></i>
                                    </div>
                                    <p>
                                        Optionally include yoour own custom notification sounds to specify in OneSignal 
                                        and play on the user`s device when the push notification is received. mp3 and wav files are supported.
                                    </p>
                                    <div className="buttons">
                                        <div className="button">
                                            <p>CUSTOM_SOUND_1</p>
                                            <button>Upload</button>
                                        </div>
                                        <div className="button">
                                            <p>CUSTOM_SOUND_2</p>
                                            <button>Upload</button>
                                        </div>
                                        <div className="button">
                                            <p>CUSTOM_SOUND_3</p>
                                            <button>Upload</button>
                                        </div>
                                        <div className="button">
                                            <p>CUSTOM_SOUND_4</p>
                                            <button>Upload</button>
                                        </div>
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
};