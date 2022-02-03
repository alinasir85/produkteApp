import {useState} from "react";
import {useNavigate} from "react-router";


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        if(email === 'muenster@belegbar.de' && password === 'belegbar.2') {
            localStorage.setItem('isLoggedIn','Y');
            navigate('/products');
        }
    }

    return (
        <div className="container p-5 float-end mt-5">
            <form className="card p-5 w-50 text-white"  style={{backgroundColor:'#1a3a43', borderRadius: '3%'}} onSubmit={onSubmit}>
                <h2>Anmeldeng</h2>
                <span>Bitte gib deine E-mail Adresse und dein Passwort ein.</span> <hr/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="mt-3">E-mail Adresse</label>
                    <input type="email" className="form-control p-3 text-white" style={{backgroundColor:'#1a3a43'}} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="mt-3">Passwort</label>
                    <input type="password" className="form-control p-3 text-white" style={{backgroundColor:'#1a3a43'}} id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <div className="form-group form-check mt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Angemeldet bleiben</label>
                </div>
                <button type="submit" className="btn btn-primary btn-lg p-3 mt-3">Anmelden</button>
            </form>
        </div>
    );
};
export default Login;