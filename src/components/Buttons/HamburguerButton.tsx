import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

type Props = {
    onClick?: VoidFunction;
}

export default function HamburguerButton({onClick}:Props){
    return(
        <span onClick={onClick} className='text-red-500 cursor-pointer lg:hidden'>
            <MenuRoundedIcon/>
        </span>
    );
}