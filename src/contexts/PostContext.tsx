import React, { createContext, ReactNode, useState } from 'react'
import { getApi } from '../utils/axios';


interface InfosProfile {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
}

interface PostContextProviderProps {
    children: ReactNode
}

interface Post {
    id: number
    number: number
    title: string
    body: string
    created_at: string
}

export const PostContext = createContext({} as PostContextType)


interface PostContextType {
    getGitProfile: () => void
    infoProfile?: InfosProfile
    getPosts: () => void
    posts: Post[]
    loading: boolean
    setIsLoading: (isLoading: boolean) => void
    setSearchPosts: (posts: Post[]) => void
}



export function PostContextProvider({ children }: PostContextProviderProps) {

    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)
    const [infoProfile, setInfoProfile] = useState<InfosProfile>()

    function setIsLoading(isLoading: boolean){
        setLoading(isLoading)
    }

    function setSearchPosts(posts: Post[]){
        setPosts(posts)
    }

    async function getGitProfile() {
        const gitApiProfile = await getApi('http://api.github.com/users/PheNog')
        setInfoProfile({
            avatar_url: gitApiProfile.avatar_url,
            bio: gitApiProfile.bio,
            login: gitApiProfile.login,
            name: gitApiProfile.name,
            company: gitApiProfile.company,
            followers: gitApiProfile.followers
        })
    }

    async function getPosts() {
        const postIssue = await getApi(`https://api.github.com/repos/PheNog/GitHub-Blog/issues`)
        setPosts(postIssue)
        console.log("🚀 ~ file: PostContext.tsx:63 ~ getPosts ~ postIssue", postIssue)
    }
    return (
        <PostContext.Provider value={
            {
                loading,
                getGitProfile,
                infoProfile,
                getPosts,
                posts,
                setIsLoading,
                setSearchPosts
            }
        } >
            {children}
        </PostContext.Provider>

    )
}