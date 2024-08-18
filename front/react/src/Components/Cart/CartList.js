import { useEffect, useState } from "react";
import styles from './CartList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../rtk/cartSlice";

const CartList =()=>{

    const products = useSelector((state)=>state.cart);
    const [sum,setSum]=useState({count:0,total:0});
    const dispatch = useDispatch();
    var dec = 1;
    useEffect(()=>{
        var c=0;
        var t=0;
        products.forEach(element => {
            c += element.count;
            t += element.count*element.price;
        });
        setSum({count:c,total:t.toFixed(2)})
    },[products])

    return(
    <>
    <div className={styles["card"]} >
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Control</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product,i)=>
                    <tr key={product.id}>
                        <td>
                            {i+1}
                        </td>
                        <td>
                            {product.title}
                        </td>
                        <td>
                            {product.price} $
                        </td>
                        <td>
                            <button className={styles["btn"]} onClick={()=>dispatch(addProduct(product))}>+</button>
                            <span className={styles["count"]}>{product.count}</span>
                            <button className={styles["btn"]} onClick={()=>{dec=1; dispatch(removeProduct({i,dec}))}}>-</button>
                        </td>
                        <td>
                            {product.count*product.price} $
                        </td>
                        <td>
                            <button className={styles["btn-red"]} onClick={()=>{dec=0;dispatch(removeProduct({i,dec}))}}>Remove</button>
                        </td>
                    </tr>
                )}
                <tr style={{color: 'white', backgroundColor: 'gray', position: 'sticky'}}>
                    <td><b>Sum</b></td>
                    <td>-</td>
                    <td>-</td>
                    <td><b>{sum.count}</b></td>
                    <td><b>{sum.total} $</b></td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
)
}

export default CartList;