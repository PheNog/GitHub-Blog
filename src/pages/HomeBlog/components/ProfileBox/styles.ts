import styled from "styled-components";

export const ContainerMasterBox = styled.div`
    max-width: 53.375rem;
    width: 100%;
    display: flex;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;
    margin-top: -5rem;
    align-items: center;
    background: ${props => props.theme["base-profile"]};
`

export const ProfileImage = styled.img`
    height: 148px;
    width: 148px;
    left: 40px;
    top: 32px;
    margin-right: 2rem;
    border-radius: 8px;
`

export const NameAndDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileName = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 0.5rem;
`

export const ProfileDescription = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${props => props.theme["base-text"]};
    margin-bottom: 1.5rem;
`

export const RowNameAndGithub = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LinkGithub = styled.a`
    display: flex;
    text-decoration: none;
    text-transform: none;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    color: ${props => props.theme.blue};
    justify-content: baseline;
    border: 0;

    &:focus {
        box-shadow: 0 0 0 2px transparent;

    }
    img{
        width: 11px;
        height: 11px;
        margin: 0.2rem 0.5rem;
    }
`

export const RowBoxContainer = styled.div`
    display: flex;
    align-items: center;
`

export const IconTextContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    padding-right: 1.5rem;
    align-items: center;
`

export const LogoMini = styled.img`
    width: 18px;
    height: 18px;
    opacity: 0.6;
`

export const SpanToLogo = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${props => props.theme["base-subtitle"]};

`