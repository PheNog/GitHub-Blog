import styled from "styled-components"

export const ContainerSearchMaster = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 53.375rem;
    margin-top: 4.5rem;
`

export const RowPostCount = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    gap: 1rem;

    button {
        background: ${props => props.theme["base-post"]};
        border: 1px solid ${props => props.theme["base-border"]};
        color: white;
        padding: 0 1rem;
        cursor: pointer;
        border-radius: 6px;
        &:hover{
            background: ${props => props.theme["base-label"]};
        }
    }
`

export const SpanText = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${props => props.theme["base-subtitle"]};
`

export const SpanCount = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-align: right;
    color: ${props => props.theme["base-span"]};
`

export const InputSearch = styled.input`
    width: 100%;
    height: 3.125rem;
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0 1rem;
    color: white;

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }
`