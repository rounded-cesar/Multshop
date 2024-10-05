'use client'

import Logo from "@/assets/45c8955b-1394-4b55-90c6-86eed13d0ddf.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';


export default function Fim(){
    return(
        <div className="cadastro flex flex-row justify-between h-20"> {/*Div Geral */}
            <div className=""> {/*Div logo*/}
                <img className="w-20" src={Logo.src} alt="Logo" />
            </div>

            <div className="flex flex-row items-center"> 
                    <CopyrightOutlinedIcon/>
                    <p>MultShop Todos os direitos reservados</p>
                </div>

            <div className="flex flex-row justify-items-end items-center pl-2 pr-10">{/*Div informaçÕes*/}
                <div className="px-10"> {/*Div contato*/}
                    <div className="flex flex-row">
                        <LocalPhoneOutlinedIcon/>
                        <p>Telefone:&nbsp;</p>
                        <a className="underline" href="tel:+5592982013333">+55(92)98201-3333</a>
                    </div>
                    <div className="flex flex-row">
                        <EmailOutlinedIcon/>
                        <p>Email:&nbsp;</p>
                        <a className="underline" href="mailto:henrique.237363@fmm.org.br">henrique.237363@fmm.org.br</a>
                    </div>
                    <div className="flex flex-row">
                        <CameraAltOutlinedIcon/>
                        <p>Instagram:&nbsp;</p>
                        <a className="underline" target="_blank" href="https://www.instagram.com/hcesar0904/">@hcesar0904</a>
                    </div>
                </div>

                


                <div className="tam-ju"> {/*Div juridico*/}
                    <div className="flex flex-row">
                        <LocationOnOutlinedIcon/>
                        <a className="underline" target="_blank" href="https://maps.app.goo.gl/F7qXi51NYHWSPv2B8">Localizaçao</a>
                    </div>

                    <div className="flex flex-row">
                        <BadgeOutlinedIcon/>
                        <p>CNPJ:&nbsp;</p>
                        <p>59.260.358/0001-04</p>
                    </div>  
                </div>
            </div>
        </div>
    );
}