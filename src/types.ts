import React, {Dispatch} from "react";

export interface ButtonAuthProps {
    title?: string;
    width?: number;
    height?: number;
    anim?: boolean;
    margin?: string;
    hover?: boolean;
    img?: string;
    background?:string;
    setOpen?: Dispatch<React.SetStateAction<boolean>>;
}

export interface Person {
    id?: number;
    fio?: string;
    title?: string;
    prepodFio?: string;
    link?: string;
    level?: number;
}

export interface TableHeadProps {
    pole1: string;
    pole2: string;
    pole3: string;
    pole4: string;
    pole5: string;
    pole6: string;
}

export interface TableWorkerPerson {
    id?: number;
    firstName?:string;
    lastName?: string;
    middleName?: string;
    posts?: Posts[];
}

export interface Posts {
    id: number;
    name: string;
}