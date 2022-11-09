import { Icon } from '@iconify-icon/react'
import { Heading } from './styles';

export function Header() {
    return (
        <Heading>
            <img src="/assets/logo-colp-report.svg" alt="Logo do Colp Report" />
            <img src="/assets/animated-1.svg" alt="Imagem Figurativa do Aplicativo" />

            <h1>Tudo em um só lugar.</h1>

            <ul>
                <li><Icon className='icons' icon="akar-icons:money" /></li>
                <li><Icon className='icons' icon="akar-icons:cart" /></li>
                <li><Icon className='icons' icon="akar-icons:clipboard" /></li>
            </ul>                
        </Heading>
    );
}