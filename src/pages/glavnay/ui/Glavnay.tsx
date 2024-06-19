import React, {useEffect, useState} from 'react';
import glavnay from '@/shared/image/glavnay/glavnay.png'
import glavnayControl from '@/shared/image/glavnay/glavnayControl.png'
import GlavnayFrame from "@/widgets/Glavnay/ui/GlavnayFrame";

const Glavnay = () => {
    const [select, setSelect] = useState<boolean>();
    useEffect(() => {
        setSelect(Math.random() < 0.5)
    }, []);


    return (
        select ? <GlavnayFrame text={'Курсовые и дипломные работы'} img={glavnay}/> : <GlavnayFrame text={'Перейти в управление'} img={glavnayControl}/>
    )
};

export default Glavnay;