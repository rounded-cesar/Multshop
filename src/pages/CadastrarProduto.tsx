'use client'

import AlternativeButton from "@/components/Buttons/AlternativeButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Menu from "@/components/Menu";
import Eletro from "@/assets/eletro.jpeg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CadastrarProduto(){
    return(
        <div className="">
            <div><Menu/></div>
            
            <div className="m-20 ">{/*Div de informações*/}
                <div className="flex flex-col gap-4 flex items-center shadow-md cadastro cadastro p-10">{/*Div do forms*/}
                    <PrimaryButton
                    text="Enviar"   
                    />
                    <PrimaryButton/>
                    
                </div>
            </div>
        </div>

    );
}