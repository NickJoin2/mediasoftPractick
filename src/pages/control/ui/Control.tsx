'use client'
import React from 'react';
import {MainBlock} from "@/widgets/mainBlock";
import '../styles/styles.scss'
import img1 from '@/shared/image/map/1.jpg'
import img2 from '@/shared/image/map/2.jpg'
import img3 from '@/shared/image/map/3.jpg'
import img4 from '@/shared/image/map/4.jpg'
import img5 from '@/shared/image/map/5.jpg'
import Title from "@/shared/ui/Title";

const Control = () => {
    return (
        <section className="control">
            <div className="container">
                <Title title={'Управление'}/>

                <ul className="control__list">
                    <MainBlock img={img1} gridColumn={'1 / 2'} gridRow={'1 / 12'} text={'Управление дисциплинами'} mapLink={'disciplines'}/>
                    <MainBlock img={img2} gridColumn={'2 / 2'} gridRow={'1 / 8'} text={'Студенты'} mapLink={'students'}/>
                    <MainBlock img={img3} gridColumn={'1 / 2'} gridRow={'14 / 34'} text={'Управление специализацией'} mapLink={'specialization'}/>
                    <MainBlock img={img4} gridColumn={'2 / 2'} gridRow={'10 / 24'} text={'Управление сотрудниками'} mapLink={'worker'}/>
                    <MainBlock img={img5} gridColumn={'2 / 2'} gridRow={'26 / 34'} text={'Управление группами'} mapLink={'group'}/>
                </ul>

            </div>
        </section>
    );
};

export default Control;