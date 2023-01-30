import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ContainerPostMaster, ContentPreview, LabelDate, TitleAndDateRow, TitlePost } from "./styles";


interface CardPostProps {
    title: string
    body: string
    created_at: string
}

export function CardPost({ body, created_at, title }: CardPostProps) {
    const date = formatDistanceToNow(new Date(created_at), {
        addSuffix: true,
        locale: ptBR
    })

    return (
        <ContainerPostMaster>
            <TitleAndDateRow>
                <TitlePost>
                    {title}
                </TitlePost>
                <LabelDate>
                    {date}
                </LabelDate>
            </TitleAndDateRow>
            <ContentPreview>
                <ReactMarkdown children={body} />
            </ContentPreview>
        </ContainerPostMaster>
    )
}