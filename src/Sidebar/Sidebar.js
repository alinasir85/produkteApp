import React, {useEffect, useState} from "react";
import classnames from "classnames";
import "./sidebar.css";
import {useHistory, useLocation} from "react-router";
import {NavbarBrand} from "reactstrap";

const Sidebar = (props) => {

    const [open,setOpen] = useState(window.matchMedia("(min-width: 1024px)").matches || false);
    const history = useHistory();
    const location = useLocation();
    const [isLoggedIn,setIsLoggedIn] = useState('N');

    useEffect(() => {
        setIsLoggedIn(location.state ? location.state.isLoggedIn : 'N');
    },[location]);

    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const ontoggleNav = () => {
        setOpen(!open);
    };

    const onLogOut = () => {
        history.push('/');
    }

    return (
    <div>
        <div className="bodyWrap">
            <NavbarBrand>
                <span className="hmbger" onClick={ontoggleNav} style={{cursor: "pointer"}}>&#9776;&nbsp;</span>
            </NavbarBrand>
            <div className={classnames({blur: mobile && open})}/>
            <div
                className={classnames(
                    "sidenav",
                    {sidenavOpen: open},
                    {sidenavClose: !open}
                )}
            >
                <a
                    href="javascript:void(0)"
                    className="closebtn hidex"
                    onClick={() => ontoggleNav("0px")}
                >
                    &times;
                </a>
                <div className="mt-4">
                    <span className="h2 text-white p-3">belegbar App</span><br/>
                    <span className="text-white p-3">Backend</span>
                </div>
                {
                    isLoggedIn === 'Y' ? (
                        <div className={"pt-5 mt-5"}>
                            <a href="javascript:void(0)">Produkte <hr/></a>
                            <a href="javascript:void(0)">Shops</a>
                            <a href="javascript:void(0)" className="pt-4">Umsätze</a>
                            <a href="javascript:void(0)" style={{position: 'absolute', bottom: '5%'}} onClick={onLogOut}>Abmelden</a>
                        </div>
                    ) : ''
                }
            </div>

            <div
                className={classnames(
                    "main",
                    {mainShrink: open},
                    {mainExpand: !open},
                    {noscroll: mobile && open}
                )}
            >
                {props.children}
            </div>
        </div>
    </div>
);
}

export default Sidebar;
