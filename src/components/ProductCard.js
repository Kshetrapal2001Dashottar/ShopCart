import React, { useState, useEffect } from 'react'
import { Button, message, Rate, Spin, Typography } from 'antd'
import { useContext } from "react";
import { cartContext } from "../context/Context";

const ProductCard = ({ item, index, dispatch }) => {

    const [messageApi, contextHolder] = message.useMessage();
    const [click, setClick] = useState(false)
    const info = () => {
        messageApi.info('Successfully added to cart');
    };

    const globalState = useContext(cartContext);
    const state = globalState.state;

    const check = () => {
        for (const i of state) {
            if (i.id === item.id) {
                setClick(true)
            }
        }
    }

    useEffect(() => {
        check()
    }, [])

    return (
        <div className="card" key={index}>
            <img src={item.image} alt="" />
            <Typography.Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'More' }}>{item.title}</Typography.Paragraph>
            <h3>$. {item.price}</h3>
            <div >
                <Rate style={{ marginBottom: '10px' }} value={item.rating.rate} allowHalf disabled />
                <p>Count of reviews {item.rating.count}</p>
            </div>
            {contextHolder}
            <Button disabled={click} onClick={() => { dispatch({ type: "ADD", payload: item }); info(); setClick(!click) }}>
                {click ? 'Product Added to cart' : 'Add To Cart'}
            </Button>
        </div>
    )
}

export default ProductCard