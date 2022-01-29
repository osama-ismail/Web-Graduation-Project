import FooterSvg from "./FooterSvg";
import styled from "styled-components";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

const Ftr = styled.footer`
    background-color: #2f2f2f;
    padding: 10px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0.5em;
`

const Logo = styled.div`
    color: white;
    text-align: center;
`

const Info = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Email = styled.a`
    text-decoration: none;
    color: white;
    text-align: center;
    margin: 10px 5px;
    display: flex;
    align-items: center;
`

const Phone = styled.span`
    display: flex;
    align-items; center;
`

const SocialMedia = styled.section`
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    margin: 10px 5px;
    width: 100%;
`

const MobileApp = styled.div`
    color: white;
    text-align: center;
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
    color: white;
    font-size: 12px;
    letter-spacing: 2px;
`

const Footer = () => {
    return (
        <div id="FooterElement">
            <FooterSvg />
            <Ftr>
                <Wrapper>
                    <Logo>Site Logo Again (Image + Title)</Logo>
                    <Info>
                        <Email href="mailto:project@website.com">
                            <MailOutlineRoundedIcon />
                            &nbsp;project@website.com
                        </Email>
                        <Phone>
                            <LocalPhoneRoundedIcon />&nbsp;
                            Any phone number
                        </Phone>
                        <SocialMedia>
                            <FacebookRoundedIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                        </SocialMedia>
                    </Info>
                    <MobileApp>Mobile App Image</MobileApp>
                </Wrapper>
            </Ftr>
            <Separator />
            <CopyrightWrapper>
                <Copyright>Copyright © 2022 | All rights reserved</Copyright>
            </CopyrightWrapper>
        </div>
    )
}

export default Footer