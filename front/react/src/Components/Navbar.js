
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


const Navbar = ()=>{
    const products = useSelector((state)=>state.cart)
    const [count,setCount]=useState(0)

    const calc =()=>{
        var counter =0;
        products.forEach((el)=>{
            counter += el.count
        })
        setCount(counter)
    }
    useEffect(()=>{
        calc();
    },[products])
return(
    <>
        <div className={style['container']}>
            <div className={style['navbar']}>
                <h1 className={style['title']}><Link to="/">E-Commerce</Link></h1>
                <button className={style['navbar-toggler']} type="button">
                &dArr;
                </button>
                <ul className={style['nav-items']}>
                    <li>
                        <Link className={style["nav-item"]} to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className={style["nav-item"]} to="/products"> Products </Link>
                    </li>
                    <li>
                        <Link className={style["nav-item"]} id="cart" to="/cart">Cart ({count})</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
)
}

export default Navbar 