import styled from "styled-components";

export const ContainerMaster = styled.div`
    max-width: 90rem;
    max-height: 18.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
`

export const CoverImgHeader = styled.img`
    max-width: 90rem;
    width: 100%;
`

export const Logo = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    position: absolute;
    width: 148px;
    height: 98px;
    left: calc(50% - 148px/2);
    top: 64px;
`