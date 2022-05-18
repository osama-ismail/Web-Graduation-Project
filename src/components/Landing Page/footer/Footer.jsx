import FooterSvg from "./FooterSvg";
import styled from "styled-components";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import logoImg from "../../../assets/images/iDrive.jpg";
import { Tablet } from "../../responsive/Responsive";
import mobile from "../../../assets/images/mobile.jpg";

const Container = styled.div``

const Ftr = styled.footer`
    background-color: #2f2f2f;
    padding: 10px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0.5em;

    ${Tablet({ flexFlow: "column nowrap", alignItems: "center" })}
`

const Logo = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;

    ${Tablet({ height: "80px" })}
`

const Info = styled.div`
    color: #dfe6e9;
    display: flex;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-start;
    margin: 10px 5px;
`

const Email = styled.a`
    text-decoration: none;
    color: #dfe6e9;
    text-align: center;
    margin: 10px 5px;
    display: flex;
    align-items: center;
`

const Phone = styled.span`
    margin: 10px 5px;
`

const MobileApp = styled.div`
    color: #dfe6e9;
    text-align: center;
    margin: 10px 5px;
`

const Separator = styled.div`
    border: 1px solid #191919;
`

const CopyrightWrapper = styled.div`
    padding: 1em;
    text-align: center;
    background-color: #212121;
`

const Copyright = styled.div`
    color: #dfe6e9;
    font-size: 12px;
    letter-spacing: 2px;
`

const Footer = () => {
    return (
        <Container id="FooterElement">
            <FooterSvg />
            <Ftr>
                <Wrapper>
                    <Logo src={logoImg} />
                    <Info>
                        <Left>
                            <MailOutlineRoundedIcon />
                            <LocalPhoneRoundedIcon />
                        </Left>
                        <Right>
                            <Email href="mailto:idrive252114@gmail.com">
                                idrive252114@gmail.com
                            </Email>
                            <Phone>
                                123456789-00
                            </Phone>
                        </Right>
                    </Info>
                    <MobileApp>
                        <img src={mobile} alt="" width="150px" height="300px" />
                    </MobileApp>
                </Wrapper>
            </Ftr>
            <Separator />
            <CopyrightWrapper>
                <Copyright>Copyright © 2022 | All rights reserved</Copyright>
            </CopyrightWrapper>
        </Container>
    )
}

export default Footer;