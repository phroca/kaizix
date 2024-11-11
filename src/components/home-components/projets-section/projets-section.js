import * as React from "react";
import { useEffect, useState } from "react";
import "./projets-section.css";
import styled from "styled-components";
import SubHeader from "../../sub-header/sub-header";
// import Swiper styles
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules.
import SwiperCore, { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
// configure Swiper to use modules
SwiperCore.use([Pagination]);

const ProjetContainer = styled.div`
    height: 100vh;
    margin: 20px 0 20px 0;
    background: #1D1D1B;
    display: grid;
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        height: unset;
        padding-bottom: 40px;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        height: unset;   
  }
`;
const ProjectSubContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    width: 70vw;
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        width: unset;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        width: unset;
        margin: 40px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
    width: unset;
        margin: 40px;
  }
`;

const SubHeaderContainer = styled.div`
  display: grid;
  justify-self: start;
  margin: 20px 0 20px 0;
  @media(max-width: 640px) {
        justify-self: center;
    }
`;

const ProjetTitles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: center;
    align-items: center;
    @media(max-width: 640px) {
        grid-template-rows: auto auto;
        grid-template-columns: none;
        margin-bottom: 40px;
    }

`
const ProjetMainTitle = styled(motion.div)`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: white;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 30px;
        margin: 20px;
        text-align: center;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 30px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
        font-size: 40px;
    }
`
const ProjetSubTitle = styled(motion.div)`
    font-family: "FuturaLt";
    font-size: 30px;
    color: white;
    max-width: 750px;
    @media(max-width: 640px) {
        font-size: 24px;
        margin: 20px;
        text-align: center;
    }
    @media (min-width: 640px) and (max-width: 1080px) {
        font-size: 24px;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
        font-size: 26px;
    }
`
const ProjetElementList = styled(motion.div)`
    width: 70vw;
    @media (min-width: 640px) and (max-width: 1080px) {
        width: 80vw;
  }
  @media (min-width: 1081px) and (max-width: 1440px) {
    width: 80vw;
  }

`
const ProjetElement = styled.div`
    display: grid;
    width: 400px;
    height: 400px;
    padding: 20px;
    border: solid 1px #DDDDDD;
    border-radius: 10px;
    transition: all 0.6s ease;
    background: #1d1d1b;
    &:hover{
        background: white;
        h2, h3 {
            color: black;
        }
        div {
            background: #5BA4D9;
        }
    }
    @media(max-width: 640px) {
        width: 200px;
        height: 300px;
    }
        @media (min-width: 640px) and (max-width: 1080px) {
            width: 300px;
            height: 300px;
    }
    @media (min-width: 1081px) and (max-width: 1440px) {
        width: 300px;
            height: 300px;
  }
`
const ProjectImage = styled.img`
    
`
const ProjetTitle = styled.h2`
    font-family: "FuturaLt";
    font-weight: 900;
    font-size: 30px;
    color: white;
    @media(max-width: 640px) {
        font-size: 24px;
    }
`
const ProjetSlogan = styled.h3`
    font-family: "FuturaLt";
    font-weight: 500;
    font-size: 24px;
    color: white;
    @media(max-width: 640px) {
        font-size: 20px;
    }
    
`
const ProjetTechnologie = styled.p`
    font-family: "FuturaMedium";
    font-size: 16px;
    color: #DDDDDD;
    @media(max-width: 640px) {
        font-size: 14px;
    }
`
const ProjetLink = styled.div`
    height :60px;
    background: #1d1d1b;
    border: solid 1px #DDDDDD;
    border-radius: 10px;
    display: grid;
    align-items: center;
    justify-items: center;

`
const ProjetLinkText = styled.div`
    font-family: "FuturaMedium";
    font-size: 16px;
    color: #FFFFFF;
`

const ListProjets = [
    {
        "id": 1,
        "titre": "Kursus AI",
        "slogan": "Générez des résumés de CV en un clic.",
        "technologie": "Site web | SaaS | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.kursus-ai.fr/"
    },
    {
        "id": 2,
        "titre": "Brainsport",
        "slogan": "Créer sa réserve cognitive",
        "technologie": "Site web | Design | Application mobile",
        "image": "",
        "lien": "https://coral-anteater-745325.hostingersite.com/"
    },
    {
        "id": 3,
        "titre": "Process2wine",
        "slogan": "Votre logiciel viticole et vinicole",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.process2wine.com/"
    },
    {
        "id": 4,
        "titre": "PAF PAF",
        "slogan": "ART DIRECTION - ART BUYING - PRODUCTION",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://pafpaf.fr/"
    },
    {
        "id": 5,
        "titre": "La Jungle Bijoux",
        "slogan": "Bijouterie éthique et créations sur mesure",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://lajunglebijoux.com/"
    },
    {
        "id": 6,
        "titre": "Risk Reward 7",
        "slogan": "Le RISK n'a jamais été aussi SAFE",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://riskreward7.com/"
    },
    {
        "id": 7,
        "titre": "Niquystore",
        "slogan": "Explorez la marketplace des produits numériques",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.niquystore.com/"
    },
    {
        "id": 8,
        "titre": "Honorine Évasion",
        "slogan": "Votre espace de séminaire bien-être et évènement privée",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://honorine-evasion.fr/"
    },
    {
        "id": 8,
        "titre": "Rising Boxe",
        "slogan": "Club de boxe à Orléans",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.rising-boxe-education.fr/"
    },
    {
        "id": 9,
        "titre": "e-Fusion",
        "slogan": "Rechargez sur la route EN TOUTE SÉRÉNITÉ",
        "technologie": "Application mobile",
        "image": "",
        "lien": "https://www.efusion-ve.com/"
    },
    {
        "id": 10,
        "titre": "Caneyan Finance",
        "slogan": "L'accès aux marchés privés",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.caneyan.com"
    },
    {
        "id": 11,
        "titre": "Julien Durix",
        "slogan": "Artiste peintre français street art & pop art",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://www.juliendurix.com"
    },
    {
        "id": 12,
        "titre": "Jeff Barcelo",
        "slogan": "Artiste copywriter, mentalise conférencier",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://www.jeffbarcelo.com"
    },
    {
        "id": 13,
        "titre": "PhoenXCorp",
        "slogan": "Maîtres de conférences en cryptomonnaies",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://www.phoenxcorp.com"
    },
    {
        "id": 14,
        "titre": "Fleuryr Design",
        "slogan": "Directeur Artistique, Graphic Designer, Consultant",
        "technologie": "Site web | maintenance applicative",
        "image": "",
        "lien": "https://www.fleuryrdesign.com"
    },
    {
        "id": 15,
        "titre": "Alma Yoga Iyengan",
        "slogan": "Cours de Yoga sur Lyon",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://www.alma-yoga-iyengar.fr"
    },
    {
        "id": 16,
        "titre": "Yem Patrimoine",
        "slogan": "Gestionnaire de patrimoine",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://www.yem-patrimoine.com"
    },
    {
        "id": 17,
        "titre": "Table de Soie",
        "slogan": "Spécialiste dans l'art de la table",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://www.tabledesoie.fr"
    },

]
const ProjetsSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    }, [])

    return (
        <ProjetContainer id="realisations">
            <ProjectSubContainer>
                <SubHeaderContainer>
                    <SubHeader mode="dark" color="#FFFFFF" text="Nos réalisations" />
                </SubHeaderContainer>
                <ProjetTitles>
                    <ProjetMainTitle>Nous utilisons nos outils pour construire votre projet.</ProjetMainTitle>
                    <ProjetSubTitle>Nous aidons les entreprises qui nous font confiance à atteindre leurs objectifs. <u>Résoudre leurs problèmes.</u></ProjetSubTitle>
                </ProjetTitles>
                <ProjetElementList>
                    <Swiper slidesPerView={isMobile ? 1 : 3} grabCursor={true} centeredSlides={true} pagination={true} navigation={true} modules={[Navigation, Pagination]}
                        className="mySwiper">
                        {ListProjets.map((element, index) => (
                            <SwiperSlide key={element.id}>
                                <ProjetElement>
                                    <ProjectImage />
                                    <ProjetTitle>{element.titre}</ProjetTitle>
                                    <ProjetSlogan>{element.slogan}</ProjetSlogan>
                                    <ProjetTechnologie>{element.technologie}</ProjetTechnologie>
                                    <ProjetLink onClick={() => window.open(element.lien, '_blank')}>
                                        <ProjetLinkText>
                                            Voir le projet
                                        </ProjetLinkText>
                                    </ProjetLink>
                                </ProjetElement>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ProjetElementList>
            </ProjectSubContainer>
        </ProjetContainer>
    )
};

export default ProjetsSection;