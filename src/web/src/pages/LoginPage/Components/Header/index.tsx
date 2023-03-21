import { Icon } from '@iconify-icon/react'
import { Heading, Banner, Logo, Text } from './styles';

export function Header() {
    return (
        <Heading>
            <Logo>
                <img src="/assets/logo-colp-report.svg" alt="Logo do Colp Report" />
            </Logo>
            
            <Banner>
                <img src="/assets/animated-1.svg" alt="Imagem Figurativa do Aplicativo" />

                <Text>
                    <h1>Tudo em um só lugar.</h1>
                    <p>Tenha o controle com o aplicativo #1 de Gerenciamento de campanhas de colportagem.</p>

                    <ul>
                        <li><Icon className='icons' icon="akar-icons:money" /></li>
                        <li><Icon className='icons' icon="akar-icons:cart" /></li>
                        <li><Icon className='icons' icon="akar-icons:clipboard" /></li>
                    </ul> 
                </Text>
            </Banner>               
        </Heading>
    );
}