import {
    ActionButton,
    BoxTitleAndActions,
    ContainerMasterPostFull,
    ContentPostFull,
    IconButton,
    IconLabel,
    MiniIconLabel,
    RowButtons,
    RowMiniIcons,
    TitlePost
} from "./styles"
import arrowLeft from "./assets/arrow-left.svg"
import openIcon from "./assets/open-icon.svg"
import gitIcon from "./assets/github.svg"
import dateIcon from "./assets/date-icon.svg"
import commentIcon from "./assets/comment-icon.svg"
import { Link, useParams } from "react-router-dom"
import { getApi } from "../../utils/axios"
import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"



interface User {
    login: string
}
interface PostFullData {
    title: string
    body: string
    comments: number
    created_at: string
    user: User
    html_url: string
}

export function Post() {

    const { id } = useParams();

    const initializerArg = {
        title: '',
        body: '',
        comments: 0,
        created_at: '',
        user: {
            login: ''
        },
        html_url: ''
    }
    const [fullPost, setFullPost] = useState<PostFullData>(initializerArg)

    async function getFullPost() {
        const responseFullPost: PostFullData = await getApi(`https://api.github.com/repos/PheNog/github-blog/issues/${id}`)
        setFullPost(responseFullPost)
    }

    useEffect(() => {
        getFullPost()
    })

    return (
        <ContainerMasterPostFull>
            <BoxTitleAndActions>
                <RowButtons>
                    <Link to='/'>
                        <ActionButton>
                            <IconButton src={arrowLeft} />
                            VOLTAR
                        </ActionButton>
                    </Link>
                    <a target="_blank" href={fullPost.html_url}>
                        <ActionButton>
                            VER NO GITHUB
                            <IconButton src={openIcon} />
                        </ActionButton>
                    </a>
                </RowButtons>
                <TitlePost>{fullPost?.title}</TitlePost>
                <RowMiniIcons>
                    <MiniIconLabel>
                        <IconLabel src={gitIcon} />
                        {fullPost?.user.login}
                    </MiniIconLabel>
                    <MiniIconLabel>
                        <IconLabel src={dateIcon} />
                        {fullPost.created_at !== '' &&
                            formatDistanceToNow(new Date(fullPost.created_at), {
                                addSuffix: true,
                                locale: ptBR
                            })}
                    </MiniIconLabel>
                    <MiniIconLabel>
                        <IconLabel src={commentIcon} />
                        {fullPost.comments} comentários
                    </MiniIconLabel>
                </RowMiniIcons>
            </BoxTitleAndActions>
            <ContentPostFull>
                <ReactMarkdown children={fullPost.body} />
            </ContentPostFull>
        </ContainerMasterPostFull>
    )
}