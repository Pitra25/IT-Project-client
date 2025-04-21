import { type FC } from 'react'
import { FooterStyledWrapper } from './Footer.styled.tsx'
import {pathsConfig} from "@/pathsConfig";
import {Link} from "react-router-dom";

const Footer: FC = () => {
    return (
        <FooterStyledWrapper>
            <h1>Footer</h1>

            <Link to={pathsConfig.login} className={`link`}
                  data-type='login'>
                login
            </Link>
        </FooterStyledWrapper>
    )
}

export default Footer
