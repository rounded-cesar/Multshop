'use client'

import AlternativeButton from "@/components/Buttons/AlternativeButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Menu from "@/components/Menu";
import Eletro from "@/assets/eletro.jpeg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Fim from "@/components/Fim";

export default function Sobre(){
    return(
        <div>
            <Menu/>
            <div className="bg-gradient">
                <div className="flex flex-col flex-wrap items-center p-5 lg:px-40 lg:flex-row">
                    <div className="flex flex-col px-4 text-center mb-5 lg:w-1/2 gap-4 lg:text-left">
                        <p className="text-limon font-bold lg:text2xl">Tudo que voce procura</p>
                        <h1 className="text-white text-3xl font-bold lg:text-5xl">Aqui você encontra os melhores eletrodomesticos de todo Brasil!</h1>
                        <p className="text-limon font-bold lg:text-2xl">Produtos de alta qualidade para seu dia a dia</p>
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <PrimaryButton
                                text="Ir para a loja"
                            />

                            <AlternativeButton
                                text="Ver carrinho"
                                icon={<ShoppingCartOutlinedIcon/>}
                            />

                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 "> 
                        <img className="border-8 border-limon-500" src={Eletro.src} alt="Eletrodomesticos" />
                    </div>
                </div>
            </div>
            
            <div className=" pt-10 px-10 lg:px-40"> {/*Div beneficios*/}

                <div className="flex text-center flex-col">{/*Div texto*/} 
                    <h1 className="font-bold text-2xl lg:text-5xl pb-5">Beneficios da compra</h1>
                    <p className="">Experimente a melhor experiência de compra de eletrodomésticos! Com a maior variedade de produtos do Brasil, entrega grátis e atendimento personalizado, sua satisfação é nossa prioridade. Nossos produtos combinam alta qualidade e design moderno, proporcionando o melhor custo-benefício para você.</p> 
                </div>
                
                <div className="lg:flex flex-row justify-around py-20 hidden">{/*Div containers lg*/}
                    <div className="bg-red-200 mr-10 beneficios rounded-xl cadastro">
                        <h1 className="pt-10 pb-2 px-3 font-bold">Entrega grátis para todo o Brasil!</h1>
                        <p className="px-3 pb-3">Receba seus eletrodomésticos novos no conforto da sua casa, sem se preocupar com custos adicionais de frete. A entrega é por nossa conta!</p>
                    </div>
                    <div className="rounded-xl beneficios cadastro">
                        <h1 className="pt-10 pb-2 px-3 font-bold">O maior inventário de eletrodomesticos do Brasil</h1>
                        <p className="px-3 pb-3">A maior variedade de eletrodomésticos do Brasil está aqui! Encontre tudo o que precisa para equipar sua casa, desde geladeiras e fogões até os últimos lançamentos em tecnologia. Aqui você encontra todas as soluções para sua casa em um único clique.</p>
                    </div>
                    <div className="bg-red-200 ml-10 beneficios rounded-xl cadastro">
                    <h1 className="pt-10 pb-2 px-3 font-bold">Produtos de alta qualidade e custo beneficios</h1>
                    <p className="px-3 pb-3">Invista em produtos de alta qualidade e durabilidade. Nossos eletrodomésticos são sinônimo de resistência e performance, garantindo seu investimento a longo prazo</p>
                    </div>
                </div>

                <div className="lg:hidden flex flex-col items-center">{/*Div containers mobile*/}
                    <div className="beneficiosmob rounded-xl cadastro mb-10 mt-5">
                        <h1 className="pt-10 pb-2 px-3 font-bold">Entrega grátis para todo o Brasil!</h1>
                        <p className="px-3 pb-3">Receba seus eletrodomésticos novos no conforto da sua casa, sem se preocupar com custos adicionais de frete. A entrega é por nossa conta!</p>
                    </div>
                    <div className="rounded-xl beneficiosmob cadastro mb-10">
                        <h1 className="pt-10 pb-2 px-3 font-bold">O maior inventário de eletrodomesticos do Brasil</h1>
                        <p className="px-3 pb-3">A maior variedade de eletrodomésticos do Brasil está aqui! Encontre tudo o que precisa para equipar sua casa, desde geladeiras e fogões até os últimos lançamentos em tecnologia. Aqui você encontra todas as soluções para sua casa em um único clique.</p>
                    </div>
                    <div className="beneficiosmob rounded-xl cadastro mb-10">
                    <h1 className="pt-10 pb-2 px-3 font-bold">Produtos de alta qualidade e custo beneficios</h1>
                    <p className="px-3 pb-3">Invista em produtos de alta qualidade e durabilidade. Nossos eletrodomésticos são sinônimo de resistência e performance, garantindo seu investimento a longo prazo.</p>
                    </div>
                </div>

            </div>

            <Fim/>
        </div>
    );
}