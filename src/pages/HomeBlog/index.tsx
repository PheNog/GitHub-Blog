import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import { CardPost } from "./components/CardPost";
import { ProfileBox } from "./components/ProfileBox";
import { SearchSection } from "./components/SearchSection";
import { ContainerHomerBlog, LinkAndCardContainer, PostsContainer } from "./styles";

export function HomeBlog() {

    const { getPosts, posts, loading, setIsLoading } = useContext(PostContext)


    useEffect(() => {
        setIsLoading(true)
        getPosts()
    }, [])

    setIsLoading(false)

    return (
        <ContainerHomerBlog>
            {loading ? 'loading...' :
                <>
                    <ProfileBox />
                    <SearchSection />
                    <PostsContainer>
                        {
                            posts.map((post) => {
                                const path = `/post/${post.number}`
                                return (
                                    <LinkAndCardContainer>
                                        <Link to={path}>
                                            <CardPost
                                                key={post.id}
                                                created_at={post.created_at}
                                                title={post.title}
                                                body={post.body}
                                            />
                                        </Link>
                                    </LinkAndCardContainer>
                                )
                            })
                        }
                    </PostsContainer>
                </>
            }
        </ContainerHomerBlog>

    )
}