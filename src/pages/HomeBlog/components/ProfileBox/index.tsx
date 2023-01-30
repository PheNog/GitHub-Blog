import React, { useContext, useEffect, useState } from "react";
import { getApi } from "../../../../utils/axios";
import { ContainerMasterBox, IconTextContainer, LinkGithub, LogoMini, NameAndDescriptionContainer, ProfileDescription, ProfileImage, ProfileName, RowBoxContainer, RowNameAndGithub, SpanToLogo } from "./styles";
import githubLogo from '../assets/github.svg'
import followers from '../assets/followers.svg'
import company from '../assets/company.svg'
import link from '../assets/link.svg'
import { PostContext } from "../../../../contexts/PostContext";




export function ProfileBox() {

    const { getGitProfile, infoProfile, loading } = useContext(PostContext)

    useEffect(() => {
        getGitProfile()
    }, [])

    return (
        <>
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

        </>
    )
}