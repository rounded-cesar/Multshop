'use client'

import { ReactElement } from "react";

type TextButton = {
    text?:string;
    icon?:ReactElement;
    type?: 'button' | 'submit' | 'reset';
    onclick?:()=> void;
}

export default function ThirdButton({text, icon, type='button', onclick}:TextButton){
    return(
        <button
            type={type}
            onClick={onclick}
            className="text-red-500 px-5 py-2 rounded-full flex justify-center items-center hover:bg-red-100 hover:transistion ease-in-out delay-100"
        >
            {text && <span className="mr-2">{text}</span>}
            {icon}
        </button>
    );
}