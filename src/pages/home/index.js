import React, { useRef, useState, useEffect } from 'react'
import { MdOutlineCalendarViewDay, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import './styles.css'

import { api } from '../../service/api'


export default function Home() {

    const divRef = useRef(null)
    const [data, setData] = useState([])

    async function handlechange() {
        const { data } = await api.get('/assets/itens.json')
        setData(data)
    }

    useEffect(() => {
        handlechange()
    },[])

    return (
        <div className='container' ref={divRef} >
            <header className='container-logo'>
                <button className='button-logo'>
                    <MdOutlineCalendarViewDay className='logo' />
                </button>
            </header>
            {data.map((item, index) => {
                return (
                    <div className='container-itens' style={{ backgroundImage: `url(${item.backgroundImgUrl})`}} key={item.id}>
                        <div className='item'>
                            <img className='img-item' src={item.imgItem} alt='img-item' />
                            <span className='text-item'> {item.name} </span>
                        </div>
                    </div>
                )
            })}
            <div className='container-buttons'>
                <button className='button'>
                    <MdNavigateBefore className='navigateitens' size={150} color='#323232' />
                </button>
                <button className='button'>
                    <MdNavigateNext className='navigateitens' size={150} color='#323232' />
                </button>
            </div>
        </div>
    )
}