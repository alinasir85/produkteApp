import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useLocation} from "react-router";

const Products = () => {

    const [products,setProducts] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(()=> {
        const isLoggedIn = location.state ? location.state.isLoggedIn : "N";
        if("N" === isLoggedIn) {
            history.push('/');
        }
        axios.get('https://0e4ca3nfnc.execute-api.eu-central-1.amazonaws.com/stg/products').then((resp)=>{
            setProducts(resp.data);
        });
    },[]);

    const switchVisibility = (productId,isVisible) => {
        if(isVisible ==='1') {
            axios.put('https://0e4ca3nfnc.execute-api.eu-central-1.amazonaws.com/stg/deactivatevisability/'+productId).then((resp)=>{
            });
        } else {
            axios.put('https://0e4ca3nfnc.execute-api.eu-central-1.amazonaws.com/stg/activatevisability/'+productId).then((resp)=>{
            });
        }
    }
    return(
        <div className="container p-5">
            <div className="pb-4">
                <span className="h1">Produkte</span><br/>
                <span>Produkte temporär deaktivieren und nicht im Shop anziegen</span><hr style={{ borderTop: '2px solid black', borderRadius: '5px'}}/>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Produktname</th>
                    <th scope="col">Sichtbar?</th>
                </tr>
                </thead>
                <tbody>
                {products ? products.map(product => (
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" defaultChecked={product.is_visible === '1' ? 'checked' : ''}
                                 onChange={() => switchVisibility(product.id,product.is_visible)}/>
                            </div>
                        </td>
                    </tr>
                )) : ''}
                </tbody>
            </table>
        </div>
    );
};

export default Products;