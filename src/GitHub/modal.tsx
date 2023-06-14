import React from "react";
import s from "./modal.module.css"

type ModalProps = {
    active: boolean,
    setActive: (value: boolean) => void
    children: React.ReactNode
};

export function Modal(props: ModalProps) {
    return (
        <div className={props.active ? `${s.modal} ${s.modal__active}` : s.modal} onClick={() => props.setActive(false)}>
            <div className={props.active ? `${s.modal__content} ${s.modal__content__active}` : s.modal__content} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};