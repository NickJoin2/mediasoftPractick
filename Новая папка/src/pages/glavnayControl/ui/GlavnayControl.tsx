import React from 'react';
import GlavnayFrame from "@/widgets/Glavnay/ui/GlavnayFrame";
import glavnayControl from "@/shared/image/glavnay/glavnayTest.png";

const GlavnayControl = () => {
    return (
        <GlavnayFrame text={'Перейти в управление'} img={glavnayControl}/>
    );
};

export default GlavnayControl;