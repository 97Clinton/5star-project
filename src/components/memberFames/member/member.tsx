import { Navbar } from "@/components/navbar/Navbar";
import "./member.scss";
import { Sidebar } from "@/components/sidebar/Sidebar";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";

export function Member() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
      event.preventDefault();
    };
    const navigate = useNavigate();

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <div className="member">
            <Navbar />
            
            <div className="body">
                <Sidebar />
                <div className="container">
                    <div className="up">
                        <input type="text" name="search" placeholder="Search for a member" />
                        <button onClick={handleOpen}><i className="fa-solid fa-plus"></i><span>Invite member</span></button>
                    </div>
                    <div className="users">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>USER</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>APP ACCESS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={() => navigate('/members/myaccount')}>
                                    <td className="user-row"><img src="../public/avatar.png" alt="" /><span>Emmy</span></td>
                                    <td className="mail">Emmy@gmail.com</td>
                                    <td className="role">Owner</td>
                                    <td className="user-row2"><span>All</span><i className="fa-solid fa-angle-right arrow1"></i></td>
                                </tr>
                                <tr>
                                    <td className="user-row"><img src="../public/avatar.png" alt="" /><span>Odejinmi Samuel</span></td>
                                    <td className="mail">Samji@gmail.com</td>
                                    <td className="role">Collaborator</td>
                                    <td className="user-row2"><span>All</span><i className="fa-solid fa-angle-right arrow2"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="backdrop">
                <Backdrop
                    sx={{ color: '#fff', backgroundColor: "#00000033", backdropFilter: 'blur(2px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <div className="content">
                        <div className="topHeader">
                            <h2>Invite a New member to Emmy`s Team</h2>
                            <i className="fa-solid fa-xmark" onClick={handleClose}></i>
                        </div>
                        <form action="">
                            <div className="first">
                                <div className="name">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" placeholder="New member`s name" />
                                </div>
                                <div className="email">
                                    <label htmlFor="mail">Email</label>
                                    <input type="text" name="mail" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="center">
                                <FormControl className="roleForm">
                                    <FormLabel id="demo-form-control-label-placement" style={{color: "#000000"}}>Organization Role</FormLabel>
                                    <RadioGroup
                                      className="radioForm"
                                      row
                                      aria-labelledby="demo-form-control-label-placement"
                                      name="position"
                                      defaultValue="top"
                                    >
                                        <div className="left">
                                            <FormControlLabel value="end" control={<Radio {...controlProps('a')} size="smaller" color="default"/>} label="Owner" />
                                        </div>
                                        <div className="right">
                                            <FormControlLabel value="end" control={<Radio {...controlProps('b')} size="smaller" color="default" />} label="Collaboration" />
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                <p>App access</p>
                                <div className="access">
                                    <div className="leftAccess">
                                        <img src="../public/access-logo.png" alt="" />
                                        <p>Giftbills</p>
                                    </div>
                                    <div className="rightAccess">
                                        <p>Admin</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <button type="button" onClick={handleClose}>Cancel</button>
                                <button>Send invite</button>
                            </div>
                        </form>
                    </div>
                </Backdrop>
            </div>

            
        </div>
    )
};

// export default Member;