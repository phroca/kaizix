import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const BlogContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 140px;
`;
const BlogSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    
`;
const BlogH1 = styled.h1`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 20px;
    font-size: 60px;
`;
const BlogH2 = styled.h2`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 40px;
`;

const BlogNavContainer = styled.div`
    display: grid;
    justify-content: start;
`;
const BlogNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 40px;
    justify-content: center;
    
`;
const BlogElement = styled.div`
    display: grid;
    justify-content: center;
`;
const BlogLink = styled.a`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 20px;
    cursor: pointer;
`;

const BlogNavResultList = styled.div`
    display: grid;
    justify-content: center;
`;

const BlogCard = styled.div`
    
`
const BlogCardImageContainer = styled.div`
    
`
const BlogCardImage = styled.img`
    
`
const BlogCardTitle = styled.h3`
    
`
const BlogCardLabel = styled.p`
    
`

const Blog = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);
    const [contentBlog, setContentBlog] = useState([]);
    const handleFilterDevWeb = () => {

    }
    const handleFilterDevMobile = () => {

    }
    const handleFilterDesign = () => {

    }
    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
            <Seo title="KAIZIX - Notre Blog" description="C'est ici que nous rédigons nos histoires. La plupart sont à propos de design et de développement, d'autres sur l'accompagnement et la formation."/>
            <BlogContainer>
                <BlogSubContainer>
                    <BlogH1>Notre Blog</BlogH1>
                    <BlogH2>C'est ici que nous rédigons nos histoires. La plupart sont à propos de design et de développement, d'autres sur l'accompagnement et la formation.</BlogH2>
                    <BlogNavContainer>
                        <BlogNav>
                            <BlogElement>
                                <BlogLink onClick={handleFilterDevWeb}>Derniers</BlogLink>
                            </BlogElement>
                            <BlogElement>
                                <BlogLink onClick={handleFilterDevMobile}>Design</BlogLink>
                            </BlogElement>
                            <BlogElement>
                                <BlogLink onClick={handleFilterDesign}>Developpement</BlogLink>
                            </BlogElement>
                            <BlogElement>
                                <BlogLink onClick={handleFilterDesign}>Accompagnement</BlogLink>
                            </BlogElement>
                            <BlogElement>
                                <BlogLink onClick={handleFilterDesign}>Formation</BlogLink>
                            </BlogElement>
                        </BlogNav>
                    </BlogNavContainer>
                    <BlogNavResultList>
                            {contentBlog.map((element, index) => (
                                <BlogCard>
                                    <BlogCardImageContainer>
                                        <BlogCardImage/>
                                    </BlogCardImageContainer>
                                    
                                    <BlogCardTitle></BlogCardTitle>
                                    <BlogCardLabel></BlogCardLabel>
                                </BlogCard>
                            ))}
                    </BlogNavResultList>
                </BlogSubContainer>
            </BlogContainer>
        </Layout>
    )
}

export default Blog;