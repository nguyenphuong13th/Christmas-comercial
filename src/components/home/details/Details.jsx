import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdStarRate} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { cartlistSelector } from '../../../controller/cartListSelector';
import { addCart } from '../../../controller/cartListReducerSlice'
import { removeItem } from '../../../controller/cartListReducerSlice'

export const Details = () => {

    const [data,setData] = useState([])
    const getdata = useSelector(cartlistSelector)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [itemQty,setItemQty] = useState(1)


    const compare = ()=>{
        let compareData = getdata.cart.filter((e)=>{
            return e.id == id
        })
        setData(compareData)
    }
    useEffect(()=>{
        compare()
    },[id])

    const increment = (item)=>{
        dispatch(addCart(item))
        // setItemQty(itemQty + 1)
        console.log(data)
    }
    const decrement = (item)=>{
        dispatch(removeItem(item))

    }
    // const deletes = (item)=>{
    //     dispatch(removeItem(item))
    //     navigate('/')
    // }

    const dataList = data.map((item)=>(
        <div className="details_content">
            <div className="details_content_img">
                <img src={require("components/assets"+item.cover)} alt="" />
            </div>
            <div className="details_content_detail">
                <h1>{item.title}</h1>
                <div className="rating">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <label htmlFor="">(1 customer reviewed)</label>
                </div>
                <h3>${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className="qty">
                    <div className="count">
                        <button onClick={()=>increment(item)}>
                            <AiOutlinePlus/>
                        </button>
                        <span>
                            <input type='text' value={item.qty} />
                        </span>
                        <button onClick={()=>decrement(item)}>
                            <AiOutlineMinus/>
                        </button>
                    </div>
                    <button className="button">
                        Add To Cart
                    </button>
                </div>
                <div className="desc">
                    <h4>Production Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vitae in ullam dicta debitis provident quo, sunt facere placeat perspiciatis quod nulla consequatur numquam doloribus odio possimus repellendus esse quaerat.</p>
                    <h4>Product Detail</h4>
                    <ul>
                        <li>
                            <p>
                                Material: Plastic, Wood
                            </p>
                        </li>
                        <li>
                             <p>Legs: Lacquered oak and black painted oak</p>
                        </li>
                        <li>
                            <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                        </li>
                        <li>
                            <p>Length: 48cm</p>
                        </li>
                        <li>
                            <p>Depth: 52 cm</p>
                        </li>
                        <li>
                            <p>Seat Height: 44 cm</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ))
  return (
    <>
    <article>
        <section className="details">
            <h2 className="details_title">
                {dataList}
            </h2>
        </section>
    </article>
    </>
  )
}
