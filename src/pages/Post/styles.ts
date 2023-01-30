import styled from 'styled-components'

export const ContainerMasterPostFull = styled.div`
    max-width: 53.375rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxTitleAndActions = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 53.375rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;
    margin-top: -5rem;
    background: ${props => props.theme["base-profile"]};
`

export const RowButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
        text-decoration: none;
        text-transform: none;
    }
`

export const ActionButton = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${props => props.theme.blue};
    border-bottom: 1px solid transparent;
    &:hover{
        border-bottom: 1px solid ${props => props.theme.blue};
    }
`

export const TitlePost = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
    margin-bottom: 0.5rem;
`

export const RowMiniIcons = styled.div`
    display: flex;
    gap: 2rem;
`

export const MiniIconLabel = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const ContentPostFull = styled.div`
    padding: 2rem;
    max-width: 53.375rem;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        margin: 1rem 0;
        max-width: 51rem;
        width: 100%;
    }
`

export const IconButton = styled.img`

`

export const IconLabel = styled.img`
    width: 16.88px;
`
