import { useContext } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa";
import { cartContext } from "../../context/Context";

const Navbar = () => {
    const globalState = useContext(cartContext);
    const state = globalState.state;
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart" style={{ position: 'relative' }}><FaCartPlus /><span style={{ position: 'absolute', bottom: '10px', color: 'red' }}>{state.length > 0 ? state.length : null}</span></NavLink>
        </div >
    );
};

export default Navbar;