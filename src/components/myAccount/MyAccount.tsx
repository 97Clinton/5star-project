import { Navbar } from "../navbar/Navbar";
import "./myAccount.scss";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

export function MyAccount() {

    const [backdrop, setBackdrop] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleBackdropClose = () => {
      setBackdrop(false);
    };
    const handleBackdropOpen = () => {
      setBackdrop(true);
    };

    return (
        <div className="myAccount">
            <Navbar />
            <div className="container">
                <h2>My Account</h2>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                        <h6>Emmy</h6>
                    </div>
                    <div className="email">
                        <p>Email</p>
                        <h6>emmy@gmail.com</h6>
                    </div>
                </div>
                <div className="psw">
                    <p>Password</p>
                    <button onClick={handleBackdropOpen}><h6><img src="../public/psw-icon.png" alt="" /> Change Password</h6></button>
                </div>
                <div className="orgs">
                    <p>My Organizations</p>
                    <div className="org">
                        <h6>Emmy`s Team</h6>
                        <div>
                            <Button className="buttonComponent" aria-describedby={id} variant="contained" onClick={handleClick}>
                                View
                            </Button>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              style={{border:'1px solid black'}}
                            >
                              <Typography sx={{ p: 0.5 }} style={{border:'1px solid black', borderBottom:'none', borderTopLeftRadius:'4px',borderTopRightRadius:'4px'}}><button style={{fontSize:'12px', paddingLeft:'10px'}}>Settings</button> </Typography>
                              <Typography sx={{ p: 0.5 }} style={{border:'1px solid black', borderTop:'none', borderBottomLeftRadius:'4px',borderBottomRightRadius:'4px'}}><button style={{fontSize:'12px', paddingLeft:'10px'}}>Leave organizations</button></Typography>
                            </Popover>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    <div className="org">
                        <h6>Odejimi Samuel`s Team</h6>
                        <div>
                            <Button className="buttonComponent" aria-describedby={id} variant="contained" onClick={handleClick}>
                                    View
                            </Button>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              style={{border:'1px solid black'}}
                            >
                              <Typography sx={{ p: 0.5 }}style={{border:'1px solid black', borderBottom:'none', borderTopLeftRadius:'4px',borderTopRightRadius:'4px'}}><button style={{fontSize:'12px', paddingLeft:'10px'}}>Settings</button> </Typography>
                              <Typography sx={{ p: 0.5 }}style={{border:'1px solid black', borderTop:'none', borderBottomLeftRadius:'4px',borderBottomRightRadius:'4px'}}><button style={{fontSize:'12px', paddingLeft:'10px'}}>Leave organizations</button></Typography>
                            </Popover>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                    
                </div>
                <div className="btns">
                    <button><i className="fa-solid fa-trash-can"></i> Delete Account</button>
                    <button>Save changes</button>
                </div>
            </div>

            <div className="backdrop">
                <Backdrop
                    sx={{ color: '#fff', backgroundColor: "#00000033", backdropFilter: 'blur(2px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backdrop}
                >
                    <div className="content">
                      <div className="topHeader">
                        <h2>Change Password</h2>
                        <i className="fa-solid fa-xmark" onClick={handleBackdropClose}></i>
                      </div>
                      <form action="">
                        <div className="center">
                          <div className="psw">
                            <label htmlFor="psw">Current Password</label>
                            <input type="password" name="psw" placeholder="***************" />
                          </div>
                          <div className="newPsw">
                            <label htmlFor="new">Current Password</label>
                            <input type="password" name="new" placeholder="***************" />
                          </div>
                          <div className="confirmPsw">
                            <label htmlFor="confirm">Current Password</label>
                            <input type="password" name="confirm" placeholder="***************" />
                          </div>
                        </div>
                         
                        <div className="bottom">
                          <button type="button" onClick={handleBackdropClose}>Cancel</button>
                          <button>Change Password</button>
                        </div>
                      </form>
                    </div>
                </Backdrop>
            </div>
        </div>
    );
};