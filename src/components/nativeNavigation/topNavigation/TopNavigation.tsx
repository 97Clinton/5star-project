import "./topNavigation.scss";

export function TopNavigation() {
    return (
        <div className="topNavigation">
            <div className="first content">
                <div className="title">
                    <h2>Legacy Mode</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <p>A native Top Navigation Bar can be used to helo your users navigate throughout your app. 
                    You can display dynamic titles depending on the page being shown. 
                    You may also add a search bar form, refresh functionality, and custom buttons. 
                    When a Sidebar Navigation Menu is also enabled, a "hamburger" toggle button is shown 
                    in the top nav bar to easily open the menu.
                </p>
                <div className="diagram">
                    <div className="ios">
                        <p><i className="fa-brands fa-apple"></i> iOS</p>
                        <form className="radioGroup">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label className="form-check-label" htmlFor="inlineRadio1">Auto</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label className="form-check-label" htmlFor="inlineRadio2">Always</label>
                            </div>
                        </form>
                    </div>
                    <div className="android">
                        <p><i className="fa-brands fa-android"></i> Android</p>
                        <form className="radioGroup">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label className="form-check-label" htmlFor="inlineRadio1">Auto</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label className="form-check-label" htmlFor="inlineRadio2">Always</label>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="second content">
                <div className="title">
                    <h2>Styling</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <p>Configure display settings for text in the top navigation bar and add an optional custom horizontal image.
                   To show different content based on the page being shown in your app, configure Dynamic Titles.
                   Note hat for iOS the color of any native UI elements such as the hamburger menu will follow the app-wide Theme colors set on the Branding tab. 
                </p>
                <div className="diagram">
                    <p><i className="fa-brands fa-apple"></i> iOS</p>
                    <div className="bottom">
                        <p>Default Display</p>
                        <form className="radioGroup">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label className="form-check-label" htmlFor="inlineRadio1">Text</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label className="form-check-label" htmlFor="inlineRadio2">Image</label>
                            </div>
                        </form>
                        <div className="color-card">
                            <div className="left">
                                <div className="box">
                                    <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                                    
                                    <p>BACKGROUND COLOR</p>
                                    <p className="background"><span></span> #FFFFFF</p>
                                    <p>TEXT COLOR</p>
                                    <p className="text"><span></span> #0E0D08</p>
                                </div>
                                <p>Default Display</p>
                                <form className="radioGroup">
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                      <label className="form-check-label" htmlFor="inlineRadio1">App icon</label>
                                    </div>
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                      <label className="form-check-label" htmlFor="inlineRadio2">New Image</label>
                                    </div>
                                </form>
                            </div>
                            <div className="right">
                                <div className="box">
                                    <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                                    
                                    <p>BACKGROUND COLOR</p>
                                    <p className="background"><span></span> #000000</p>
                                    <p>TEXT COLOR</p>
                                    <p className="text"><span></span> #0E0D08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="diagram">
                    <p><i className="fa-brands fa-android"></i> Android</p>
                    <div className="bottom">
                        <p>Default Display</p>
                        <form className="radioGroup">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label className="form-check-label" htmlFor="inlineRadio1">Text</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label className="form-check-label" htmlFor="inlineRadio2">Image</label>
                            </div>
                        </form>
                        <div className="color-card">
                            <div className="left">
                                <div className="box">
                                    <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                                    
                                    <p>BACKGROUND COLOR</p>
                                    <p className="background"><span></span> #FFFFFF</p>
                                    <p>TEXT COLOR</p>
                                    <p className="text"><span></span> #0E0D08</p>
                                </div>
                                <p>Default Display</p>
                                <form className="radioGroup">
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                      <label className="form-check-label" htmlFor="inlineRadio1">App icon</label>
                                    </div>
                                    <div className="form-check">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                      <label className="form-check-label" htmlFor="inlineRadio2">New Image</label>
                                    </div>
                                </form>
                            </div>
                            <div className="right">
                                <div className="box">
                                    <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                                    
                                    <p>BACKGROUND COLOR</p>
                                    <p className="background"><span></span> #000000</p>
                                    <p>TEXT COLOR</p>
                                    <p className="text"><span></span> #0E0D08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third content">
                <div className="title">
                    <h2>Top Navigate Bar Visual Editor</h2>
                    <div className="right-title">
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Advance Mode</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                    
                </div>
                <div className="mainContainer">
                    <div className="mainContainerTop">
                        <div className="mainExtra">
                            <div className="mainContainerLeft">
                                <p>Top Nav Bar Menu 1 - All Pages</p>
                            </div>
                            <div className="mainConatinerRight">
                                <i className="fa-solid fa-square-check"></i>
                                <i className="fa-regular fa-copy"></i>
                                <i className="fa-regular fa-trash-can"></i>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pages">
                        <p>Pages to Display Top Nav Bar</p>
                        <form action="" id="radios">
                            <div className="single">
                                <input type="radio" name="single" />
                                <label htmlFor="single">Single Page</label>
                            </div>
                            <div className="multiple">
                                <input type="radio" name="multiple" />
                                <label htmlFor="multiple">Multiple Pages</label>
                            </div>
                            <div className="all">
                                <input type="radio" name="all" />
                                <label htmlFor="all">All Page</label>
                            </div>
                            <div className="custom">
                                <input type="radio" name="custom" />
                                <label htmlFor="custom">Custom</label>
                            </div>
                        </form>
                    </div>
                    <h6>TEST RULE <i className="fa-solid fa-angle-right"></i></h6>
                    <div className="display">
                        <p>Display Mode</p>
                        <form action="" className="threeRadios">
                            <div className="page">
                                <input type="radio" name="page" />
                                <label htmlFor="page">Page Title</label>
                            </div>
                            <div className="custom">
                                <input type="radio" name="custom" />
                                <label htmlFor="custom">Custom Title</label>
                            </div>
                            <div className="img">
                                <input type="radio" name="img" />
                                <label htmlFor="img">Images</label>
                            </div>
                        </form>
                    </div>
                    <div className="last">
                        <i className="fa-solid fa-eye"></i>
                        <p>Page Title</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className="deleteAdd">
                    <p><i className="fa-solid fa-trash-can"></i> Clear All</p>
                    <p><i className="fa-solid fa-plus"></i> Add Top Nav Bar</p>
                </div>
            </div>
            <div className="lastly">
                <div className="title">
                    <h2>Auto New Windows</h2>
                    <div className="right-title">
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Advance Mode</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>
                </div>
                <p>
                    Define a hierarchy for your website so that pages in a higher level will open in a new Windows
                    within your app versus the current view. The top navigation bar will show a "<i className="fa-solid fa-angle-left"></i> Back" button
                    to allow easy navigation back to the same place on the lower level page. 
                </p>
                <div className="firstSquare">
                    <div className="secondSquare">
                        <div className="thirdSquare">
                            <p>Level</p>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
                <button><i className="fa-solid fa-plus"></i> Add Level</button>
            </div>
        </div>
    )
};