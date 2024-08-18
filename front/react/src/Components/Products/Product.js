import { useDispatch } from 'react-redux';
import style from './Product.module.css'
import { addProduct } from '../../rtk/cartSlice';

const Product =({product})=>{

    const dispatch = useDispatch()

    return(
        <div className={style["card"]}>
            <img src={product.image} alt={product.title}/>
            <div className={style["card-body"]}>
                <h3>{product.title}</h3>
                <h4>Price : {product.price} $</h4>
                <button className={style["btn"]} onClick={()=>dispatch(addProduct(product))} >Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;