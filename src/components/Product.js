
import React from "react";
import style from '../scss/style.module.scss'
import iphone from "../assets/iphone.jpg"
import watch from "../assets/watch.jpg"
import nofoto from "../assets/no-foto.jpg"

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
        
    }
    

    return (
        <div className={style.product}>
            <div className={style.body}>
                <div className={style.img}>
                    {(props.name == "Iphone")&&<img src={iphone}></img> ||
                    (props.name == "Watch")&&<img src={watch}></img> || 
                    (props.name !== "Watch" && "Iphone")&&<img src={nofoto}></img> }
                    
                </div>
                <h1 className={style.title}>{props.name}</h1>
                <div className={style.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;