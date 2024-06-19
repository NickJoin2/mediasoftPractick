import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.scss'

const MainBlock = ({ img, title, icon }: { img?: string, title: string, icon?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseOver = () => {
      if(img)  setIsOpen(true);
    }

    const handleMouseOut = () => {
       if(img) setIsOpen(false);
    }

    const conditionalStyles = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (
        <Link to={'/'} className='mainBlock'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={isOpen ? conditionalStyles : {}}>
            <div className="mainBlock__row">
                <div className="mainBlock__block">
                    <h5>{title}</h5>
                    {icon && <img src={icon} alt="icon"/>}
                </div>
            </div>
        </Link>
    // <Link to={'/'} className='mainBlock'
    //       onMouseOver={handleMouseOver}
    //       onMouseOut={handleMouseOut}
    //       style={isOpen ? conditionalStyles : {}}>
    //     <div className="mainBlock__row">
    //         <div className="mainBlock__block">
    //             <h5>{title}</h5>
    //             {icon && <img src={icon} alt="icon"/>}
    //         </div>
    //     </div>
    // </Link>
    );
};

export default MainBlock;