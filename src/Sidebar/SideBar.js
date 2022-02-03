
import classes from './SideBar.module.css';
import {useHistory, useLocation} from "react-router";
import {useEffect, useState} from "react";

const SideBar = () => {
    const history = useHistory();
    const location = useLocation();

    const onLogOut = () => {
        history.push('/');
    }
    const [isLoggedIn,setIsLoggedIn] = useState('N');

    useEffect(() => {
        setIsLoggedIn(location.state ? location.state.isLoggedIn : 'N');
    },[location]);

    return (
        <div className={`${classes.wrapper} row `}>
            <div className={`${classes.sidebar} col-sm-2`}>
                <div className="mt-4">
                    <span className="h2 text-white p-3">belegbar App</span><br/>
                    <span className="text-white p-3">Backend</span>
                </div>
                {
                    isLoggedIn === 'Y' ? (
                        <ul className="pt-5 mt-5">
                            <li><a href="javascript:void(0)">Produkte<hr/></a></li>
                            <li><a href="javascript:void(0)">Shops</a></li>
                            <li className="pt-4"><a href="javascript:void(0)">Umsätze</a></li>
                            <li style={{position: 'absolute', bottom: '5%'}}><a href="javascript:void(0)" onClick={onLogOut}>Abmelden</a></li>
                        </ul>
                    ) : ''
                }
            </div>
        </div>
    );
}
export default SideBar;