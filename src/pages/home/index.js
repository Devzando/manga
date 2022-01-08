import React from 'react'
import { MdOutlineCalendarViewDay, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import './styles.css'

import imgItem from '../../assets/imgItem.svg'
import imgBackground from '../../assets/legend.png'
import testeimg from '../../assets/solo leveling definitivo 1.svg'

export default function Home() {
    return (
        <div className='container'>

            <header className='container-logo'>
                <button className='button-logo'>
                    <MdOutlineCalendarViewDay className='logo' />
                </button>
            </header>
            <div className='container-itens'>

                <div className='item'>
                    <img className='img-item' src={imgItem} alt='img-item' />
                </div>
                <div className='item'>
                    <img className='img-item' src={testeimg} alt='img-item' />
                </div>
                <div className='item'>
                    <img className='img-item' src={imgItem} alt='img-item' />
                </div>
            </div>
            <div className='container-buttons'>
                <button className='button'>
                    <MdNavigateBefore className='navigateitens' size={150} color='#323232'/>
                </button>
                <button className='button'>
                    <MdNavigateNext className='navigateitens' size={150} color='#323232'/>
                </button>
            </div>
        </div>
    )
}