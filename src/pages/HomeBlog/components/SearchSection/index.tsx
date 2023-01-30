
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../../contexts/PostContext";
import { getApi } from "../../../../utils/axios";
import { ContainerSearchMaster, InputSearch, RowPostCount, SpanCount, SpanText } from "./styles";

export function SearchSection() {

    const { posts, setSearchPosts } = useContext(PostContext)
    const [filter, setFilter] = useState('')

    async function searchFilter() {
        const searchApi = await getApi(`https://api.github.com/search/issues?q=${filter}repo:PheNog/github-Blog`)
        setSearchPosts(searchApi.items)
    }
    return (
        <ContainerSearchMaster>
            <RowPostCount>
                <SpanText>
                    Publicações
                </SpanText>
                <SpanCount>
                    {posts.length} publicações
                </SpanCount>
            </RowPostCount>
            <RowPostCount>
                <InputSearch onChange={(e) => setFilter(e.target.value)} placeholder="Buscar conteúdo" />
                <button onClick={searchFilter}>PESQUISAR</button>
            </RowPostCount>
        </ContainerSearchMaster>
    )
}