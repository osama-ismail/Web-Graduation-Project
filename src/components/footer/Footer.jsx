import FooterSvg from "./FooterSvg";
import styled from "styled-components";

const Ftr = styled.footer`
    background-color: #282828;
    padding: 10px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 1em;
`

const Logo = styled.div`
    color: white;
`

const Info = styled.div`
    color: white;
`

const Email = styled.a`
    text-decoration: none;
    color: white;
`

const SocialMediaLinks = styled.a`
    text-decoration: none;
    color: white;
`

const MobileApp = styled.div`
    color: white;
`

const Footer = () => {
    return (
        <div>
            <FooterSvg />
            <Ftr>
                <Wrapper>
                    <Logo>Site Logo Again (Image + Title)</Logo>
                    <Info>
                        <Email href="mailto:project@website.com">Email</Email>
                        <br />
                        Phone
                        <br />
                        <SocialMediaLinks href="#">Facebook logo</SocialMediaLinks>
                        <br />
                        <SocialMediaLinks href="#">Instagram logo</SocialMediaLinks>
                        <br />
                        <SocialMediaLinks href="#">Linked In logo</SocialMediaLinks>
                    </Info>
                    <MobileApp>Mobile App Image</MobileApp>
                </Wrapper>
            </Ftr>
        </div>
    )
}

export default Footer