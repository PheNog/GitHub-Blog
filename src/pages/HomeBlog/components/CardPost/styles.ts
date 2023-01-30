import styled from "styled-components"

export const ContainerPostMaster = styled.div`
    max-width: 411px;
    width: 100%;
    height: 260px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    background-color: ${props => props.theme["base-border"]};

    &:hover {
        outline: 2px solid #3A536B;
        border-radius: 10px;
    }
`

export const TitleAndDateRow = styled.div`
    width: 100%;
    display: flex;
`

export const TitlePost = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 160%;
    width: 280px;
    color: ${props => props.theme["base-title"]};
`

export const LabelDate = styled.label`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    margin-top: 0.3rem;
    width: 25%;
    color: ${props => props.theme["base-span"]};
`

export const ContentPreview = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    height:105px;
    color: ${props => props.theme["base-text"]};
    text-overflow: ellipsis;
    overflow: hidden;
`