
import { useContext, useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { cartContext } from "../../context/Context";
import { Button, message, Rate, Spin, Typography } from 'antd'
import ProductCard from "../../components/ProductCard";

const Homepage = () => {
    const [data, setdata] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setdata(response.data);
            console.log(data);
        } catch (error) {
            alert(error.message)
        }

    };

    useEffect(() => {
        fetchData();
    }, []);
    const globalState = useContext(cartContext);
    const dispatch = globalState.dispatch;
    console.log(globalState);
    return (
        data == "" ?
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin />
            </div>
            :
            <div className="container">
                <div className="home">
                    {data.map((item, index) => {
                        item.quantity = 1;
                        return (
                            <ProductCard item={item} index={index} dispatch={dispatch} />
                        );
                    })}
                </div>
            </div>
    );
};

export default Homepage;