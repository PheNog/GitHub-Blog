import coverHeader from '../../assets/Cover.png'
import logo from '../../assets/logo.svg'
import { ContainerMaster, CoverImgHeader, Logo } from './styles'

export function Header() {

    return (
        <ContainerMaster> 
            <CoverImgHeader src={coverHeader} />
            <Logo src={logo} />
        </ContainerMaster>
    )
}