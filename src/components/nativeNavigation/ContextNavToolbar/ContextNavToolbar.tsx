import "./contextNavToolbar.scss";

export function ContextNavToolbar() {
    return (
        <div className="contextNavToolbar">
            <div className="content">
                <div className="title">
                    <h2>Enable</h2>
                    <div className="right-title">
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Advance Mode</label>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                        <i className="fa-solid fa-angle-up"></i>
                    </div>    
                </div>
                <p>
                    Unlike Android devices iPhones and iPads do not have a built-in back butto, 
                    which can make navigating your website frrom within your app challenging. 
                    This feature provides a native navigation toolbar that shows on the bottom 
                    of the device screen dependent on navigation history and page URL. By default, 
                    the toolbar will include a Back button but it can be customized to also show 
                    with Forward and Refresh buttons.
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
                </div>
            </div>
            <div className="Toolbar content">
                <div className="title">
                    <h2>Toolbar visibility by Pages</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <form className="radioGroup">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">All Pages</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Specific Pages</label>
                    </div>
                </form>
            </div>
            <div className="black content">
                <div className="title">
                    <h2>Black Button Configuration</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <h3>Label</h3>
                <form className="radioGroup">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">No Text</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Default Text</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Custom Text</label>
                    </div>
                </form>
                <h3>Pages to Activate Button</h3>
                <form className="radioGroup">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">All Pages</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Specific Pages</label>
                    </div>
                </form>
            </div>
            <div className="refresh content">
                <div className="title">
                    <h2>Refresh Button Configuration</h2>
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
            <div className="refresh content">
                <div className="title">
                    <h2>Forward Button Configuration</h2>
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
            <div className="preview content">
                <div className="title">
                    <h2>Preview</h2>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h6><img src="../../../light.png" alt="" /> LIGHT MODE</h6>
                        <div className="box">
                            <p><i className="fa-solid fa-angle-left"></i> Back</p>
                        </div>
                    </div>
                    <div className="right">
                        <h6><i className="fa-solid fa-moon"></i> DARK MODE</h6>
                        <div className="box">
                            <p><i className="fa-solid fa-angle-left"></i> Back</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};