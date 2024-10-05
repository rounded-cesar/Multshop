'use client'

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logo from "@/assets/45c8955b-1394-4b55-90c6-86eed13d0ddf.png"
import SecondButton from "./Buttons/SecondButton";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ThirdButton from "./Buttons/ThirdButton";
import { Button } from "@mui/material";
import { useState } from "react";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import HamburguerButton from "./Buttons/HamburguerButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function Menu() {
    const [exibirMenu, setExibirMenu] = useState<boolean>(false);

    function verificarMenu(){
        if(exibirMenu){
            setExibirMenu(false);
        }else{
            setExibirMenu(true);
        }
    }

    return (
        <div className="w-full h-20 shadow-md cadastro ">
            <div className="pr-10 w-full h-full m-auto flex justify-between lg:pr-40">
                <img className="w-20" src={Logo.src} alt="" />
                
                <div className="hidden lg:flex items-center gap-4">

                    <ThirdButton
                        text="Sobre"
                    />

                    <ThirdButton
                        text="Loja"
                    />

                    <SecondButton
                        text="Cadastrar Produto"
                        icon={<ControlPointOutlinedIcon/>}                                  
                    />

                    <SecondButton
                    icon={<ShoppingCartOutlinedIcon/>}
                    />

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon/>}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />

                    
                </div>

                <div className="flex lg:hidden  ">
                    <Button
                        onClick={verificarMenu}
                    >
                        
                    {exibirMenu ? (
                        <HighlightOffRoundedIcon className="text-red-500"/>
                    ):(
                        <HamburguerButton/>
                    )

                    }

                    </Button>
                </div>

            </div>

            {exibirMenu && (
            <div className="cadastro w-full h-[100vh-80px] fixed top-20 lg:hidden">
                <div className="flex flex-col gap-2 px-10 mb-5">
                    
                    <span></span>
                    <ThirdButton
                        text="Sobre"
                    />

                    <ThirdButton
                        text="Loja"
                    />

                    <SecondButton
                        text="Cadastrar Produto"
                        icon={<ControlPointOutlinedIcon/>}                                  
                    />

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon/>}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />
                </div>
            </div>
            )}
        </div>
    );
}