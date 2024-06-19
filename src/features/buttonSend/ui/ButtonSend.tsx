import React, {Dispatch} from 'react';
import '../styles/styles.scss'



interface SendProps {
    title: string;
    img: string
}

const ButtonSend: React.FC<SendProps> = ({title, img}) => {
    return (
        <>
            <div className='send'>
                <button className='send__button'>
                    <span className='send__title'>{title}</span>
                    <img src={img} alt="img"/>
                </button>
            </div>
        </>
    )
};

export default ButtonSend;