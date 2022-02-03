
import classes from './SideBar.module.css';
import {useNavigate} from "react-router";

const SideBar = () => {
    const navigate = useNavigate();
    const onLogOut = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn');

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
                            <li><a href="#">Produkte<hr/></a></li>
                            <li><a href="#">Shops</a></li>
                            <li className="pt-4"><a href="#">Umsätze</a></li>
                            <li style={{position: 'absolute', bottom: '5%'}}><a href="#" onClick={onLogOut}>Abmelden</a></li>
                        </ul>
                    ) : ''
                }
            </div>
        </div>
    );
}
export default SideBar;