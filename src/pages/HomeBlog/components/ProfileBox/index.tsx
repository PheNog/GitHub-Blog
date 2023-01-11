import { useEffect, useState } from "react";
import { getApi } from "../../../../utils/axios";
import { ContainerMasterBox, IconTextContainer, LinkGithub, LogoMini, NameAndDescriptionContainer, ProfileDescription, ProfileImage, ProfileName, RowBoxContainer, RowNameAndGithub, SpanToLogo } from "./styles";
import githubLogo from '../assets/github.svg'
import followers from '../assets/followers.svg'
import company from '../assets/company.svg'
import link from '../assets/link.svg'

interface InfosProfile {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
}

export function ProfileBox() {

    const [infoProfile, setInfoProfile] = useState<InfosProfile>()

    async function getGitProfile() {
        const gitApiProfile = await getApi('http://api.github.com/users/PheNog')
        console.log("🚀 ~ file: index.tsx:24 ~ getGitProfile ~ gitApiProfile", gitApiProfile)
        setInfoProfile({
            avatar_url: gitApiProfile.avatar_url,
            bio: gitApiProfile.bio,
            login: gitApiProfile.login,
            name: gitApiProfile.name,
            company: gitApiProfile.company,
            followers: gitApiProfile.followers
        })
    }

    useEffect(() => {
        getGitProfile()
    }, [])

    return (
        <ContainerMasterBox>
            <ProfileImage src={infoProfile?.avatar_url} />
            <NameAndDescriptionContainer>
                <RowNameAndGithub>
                    <ProfileName>{infoProfile?.name}</ProfileName>
                    <LinkGithub target={"_blank"} href="https://github.com/PheNog">GITHUB <img src={link} /> </LinkGithub>
                </RowNameAndGithub>
                <ProfileDescription>{infoProfile?.bio}</ProfileDescription>
                <RowBoxContainer>
                    <IconTextContainer>
                        <LogoMini src={githubLogo} />
                        <SpanToLogo>{infoProfile?.login}</SpanToLogo>
                    </IconTextContainer>
                    <IconTextContainer>
                        <LogoMini src={company} />
                        <SpanToLogo>{infoProfile?.company}</SpanToLogo>
                    </IconTextContainer>
                    <IconTextContainer>
                        <LogoMini src={followers} />
                        <SpanToLogo>{infoProfile?.followers} seguidores</SpanToLogo>
                    </IconTextContainer>
                </RowBoxContainer>
            </NameAndDescriptionContainer>
        </ContainerMasterBox>
    )
}