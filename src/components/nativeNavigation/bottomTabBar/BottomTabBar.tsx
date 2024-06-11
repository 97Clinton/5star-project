import "./bottomTabBar.scss";

export function BottomTabBar() {
    return (
        <div className="bottomTabBar">
            <div className="default content">
                <div className="title">
                    <h2>Default Mode</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <p>
                    A Bottom Tab Bar menu is the most common native navigation menu component. 
                    You can configure your app with multiple tab bar menus to show on different pages 
                    and define optional icons and labels for each menu. You can also set and control 
                    the tab menu at runtime from your website using the JavaScript Bridge.
                </p>
                <form className="radioGroup">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">Hidden</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Active</label>
                    </div>
                </form>
            </div>
            <div className="styling content">
                <div className="title">
                    <h2>Styling</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <p>
                    iOS colors follow the Branding settings. Android colors are configured independently.
                    The iOS bottom tab menu follows Apple`s Human Interface Guidelines while Android 
                    bottom tab bar menu follows Google Material Design principles.
                </p>
                <div className="diagram first">
                    <div className="ios">
                        <p><i className="fa-brands fa-apple"></i> iOS</p>
                    </div>
                    <p>Background Color</p>
                    <div className="box">
                        <div className="left">
                            <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                            <p className="text"><span></span> #FFFFFF</p>
                        </div>
                        <div className="right">
                            <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                            <p className="background"><span></span> #000000</p>
                        </div>
                    </div>
                    
                </div>
                <div className="diagram second">
                    <div className="ios">
                        <p><i className="fa-brands fa-android"></i> Android</p>
                    </div>
                    <p>Tab Bar Background</p>
                    <div className="box">
                        <div className="left">
                            <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                            <p className="text"><span></span> #FFFFFF</p>
                        </div>
                        <div className="right">
                            <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                            <p className="background"><span></span> #000000</p>
                        </div>
                    </div>
                    <p>Tab Bar Text</p>
                    <div className="box">
                        <div className="left">
                            <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                            <p className="text"><span></span> #FFFFFF</p>
                        </div>
                        <div className="right">
                            <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                            <p className="background"><span></span> #000000</p>
                        </div>
                    </div>
                    <p>Tab Bar Indicator</p>
                    <div className="box">
                        <div className="left">
                            <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                            <p className="text"><span></span> #FFFFFF</p>
                        </div>
                        <div className="right">
                            <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                            <p className="background"><span></span> #000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};