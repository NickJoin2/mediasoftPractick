import React, {Dispatch} from 'react';
import close from "@/shared/image/modal/close.svg";
import '@/widgets/modal/assent/styles/styles.scss'
import ButtonAuth from "@/features/buttonAuth/ui/ButtonAuth";

import {setAssentModal} from "@/features/employees/slice/employees";
import {useAppDispatch} from "@/app/appStore";

const AssentModal = ({
                         title,
                         submitGreen,
                         submitRed
                     }: {
    title: string,
    submitGreen: (e: React.FormEvent) => void,
    submitRed: (e: React.FormEvent) => void
}) => {

    const dispatch = useAppDispatch();

    return (
        <div className="assent__modal__overlay">
            <div className="assent__modal__content">
                <div className="assent__modal__form">


                    <h2 className="assent__modal__title">{title}</h2>

                    <div className="assent__modal-blocks">
                        <form onSubmit={submitRed}>
                            <ButtonAuth background="#CB0000" title="Отмена" width={200} height={80} anim={true} />
                        </form>

                        <form onSubmit={submitGreen}>
                            <ButtonAuth background="#0aef43" title="Подтвердить" width={200} height={80} anim={true} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssentModal