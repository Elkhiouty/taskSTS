import { useEffect, useState } from "react"
import style from './Products.module.css'
import Product from "./Product"

const Products = ()=>{

    const [categories,setCategories] = useState([])
    const [products,setProducts] = useState([])

    const clear = ()=>{
        document.getElementById("all")?.classList.remove(style['active']);
        [...categories].forEach((cat)=>{
            document.getElementById(cat.title)?.classList.remove(style['active']);
        })
    }

    const getCategories = async ()=>{
        const api = await fetch('https://localhost:7005/category');
        const res = await api.json();
        setCategories(res.data);
    }

    const getProducts = async ()=>{
        const api = await fetch('https://localhost:7005/product/all');
        const res = await api.json();
        setProducts(res.data);
        clear();
        document.getElementById('all')?.classList.add(style['active'])
    }

    const getProductsByCat = async (cat)=>{
        const api = await fetch('https://localhost:7005/product/category/'+cat.id.toString());
        const res = await api.json();
        setProducts(res.data);
        clear();
        document.getElementById(cat.title)?.classList.add(style['active']);
    }

    useEffect(()=>{
        getCategories();
        getProducts();
    },[])

    return(
        <>
            <div className={style['container']}>
                <button id="all" onClick={getProducts}>All</button>
                {categories.length && categories.map((cat)=><button key={cat.id} id={cat.title} onClick={()=>getProductsByCat(cat)}>{cat.title}</button>)}
            </div>
            <div className={style["row"]}>
                {products && products.map((product)=>
                    <Product product={product} key={product.id} />
                )}
            </div>
        </>
    )
}

export default Products;