import '../styles/styles.scss'
import styled from "styled-components";
import React, {useState} from "react";
import {Modal} from "@/widgets/modalWindow";
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";


const GlavnayFrame = ({text, img}: { text: string, img?: any}) => {

    const Glavnay = styled.div({
        position: 'absolute',
        top: 0,
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url(${img})`,
    })

    const [open, setOpen] = useState(false);

    return (
        <Glavnay>
            <div className="container">
                <div className="glavnay__block">

                    <h1>{text}
                        <br/>
                        <span>здесь</span>
                    </h1>

                    <div className="gl-button">
                        <ButtonAuth title={'Войти'} height={62} width={140} anim={true} setOpen={setOpen}/>
                    </div>

                </div>
            </div>

            <Modal open={open} setOpen={setOpen}/>
        </Glavnay>
    );
};

export default GlavnayFrame;