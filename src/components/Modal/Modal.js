import React from 'react';
import './Modal.scss';

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div className='modal'>
            <div className='modal__wrapper'>
                <h2 className='modal__title'>Цей функціонал ще не розроблений 😔</h2>
                <h3 className='modal__subtitle'>Але розробка триває, тому заходь пізніше 😉</h3>
            </div>

            <div
                className='modal__close'
                onClick={() => setIsModalOpen(!isModalOpen)}    
            ></div>
        </div>

    )
}