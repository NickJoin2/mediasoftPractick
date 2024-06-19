import React, {Dispatch} from 'react';

import '../styles/styles.scss'
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";



interface MainBlockProps {
    img?: string;
    gridColumn?: string;
    gridRow?: string;
    text?: string;
    mapLink: string;
    setOpen?: Dispatch<React.SetStateAction<boolean>>;
    disabled: boolean;
}

const MainBlock = ({img, gridColumn, gridRow, text, mapLink,setOpen,disabled}: MainBlockProps) => {

    const handleClick = () => {
        if(setOpen) {
            setOpen(true);
        }
    }

    const MapItem = styled.div`
        cursor: pointer;
        border-radius: 10px;
        background: linear-gradient(133deg, #456b92 0%, #9bc7e0 51.6%, #456b92 100%);
        grid-column: ${gridColumn};
        grid-row: ${gridRow};
        
        ${disabled ? 'filter: grayscale(100%);' : '' +
                'transition: all .6s ease-in;'}
  

        ${img? css`
            &:hover {
                ${disabled ? 
                        'filter: grayscale(100%);                transition: all .6s ease-in;'
                        : ''}
                background-image: url(${img});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;

            }` : ''}
    `;

    return (
        <MapItem onClick={() => handleClick(setOpen)}  className="map-item item5"><Link to={mapLink}><p className="map__title">{text}</p></Link></MapItem>
    );
};

export default MainBlock;