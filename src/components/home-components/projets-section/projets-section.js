import * as React from "react";
import "./projets-section.css";
import styled from "styled-components";
import SubHeader from "../../sub-header/sub-header";
// import Swiper styles
import "swiper/swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules.
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow]);

const ProjetContainer = styled.div`
    height: 100vh;
    margin: 20px 0 20px 0;
    background: #1D1D1B;
    display: grid;
    
    justify-items: center;
    align-items: center;
`;
const ProjectSubContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    width: 70vw;
    justify-items: center;
    align-items: center;
`;

const SubHeaderContainer = styled.div`
  display: grid;
  justify-self: start;
  margin: 20px 0 20px 0;
`;

const ProjetTitles = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-items: center;
    align-items: center;

`
const ProjetMainTitle = styled.div`
    font-family: "FuturaMedium";
    font-size: 50px;
    color: white;
    max-width: 750px;
`
const ProjetSubTitle = styled.div`
    font-family: "FuturaLt";
    font-size: 30px;
    color: white;
    max-width: 750px;
`
const ProjetElementList = styled.div`
    width: 70vw;
`
const ProjetElement = styled.div`
    display: grid;
    width: 400px;
    height: 400px;
    padding: 20px;
    border: solid 1px #DDDDDD;
    border-radius: 10px;
    transition: all 0.6s ease;
    &:hover{
        background: white;
        h2, h3 {
            color: black;
        }
        div {
            background: #5BA4D9;
            border: solid 1px #DDDDDD;
        }
    }
`
const ProjectImage = styled.img`
    
`
const ProjetTitle = styled.h2`
    font-family: "FuturaLt";
    font-weight: 900;
    font-size: 30px;
    color: white;
`
const ProjetSlogan = styled.h3`
    font-family: "FuturaLt";
    font-weight: 500;
    font-size: 24px;
    color: white;
`
const ProjetTechnologie = styled.p`
    font-family: "FuturaMedium";
    font-size: 16px;
    color: #DDDDDD;
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
        "titre": "e-Fusion",
        "slogan": "Rechargez sur la route EN TOUTE SÉRÉNITÉ",
        "technologie": "Application mobile",
        "image": "",
        "lien": "https://efusion-ve.com"
    },
    {
        "id": 2,
        "titre": "Brainsport",
        "slogan": "Créer sa réserve cognitive",
        "technologie": "Application mobile",
        "image": "",
        "lien": "https://www.artistmarketing.fr/brainsport"
    },
    {
        "id": 3,
        "titre": "Caneyan Finance",
        "slogan": "L'accès aux marchés privés",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://caneyan.com"
    },
    {
        "id": 4,
        "titre": "Julien Durix",
        "slogan": "Artiste peintre français street art & pop art",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://juliendurix.com"
    },
    {
        "id": 5,
        "titre": "Jeff Barcelo",
        "slogan": "Artiste copywriter, mentalise conférencier",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://jeffbarcelo.com"
    },
    {
        "id": 5,
        "titre": "PhoenXCorp",
        "slogan": "Maîtres de conférences en cryptomonnaies",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://phoenxcorp.com"
    },
    {
        "id": 6,
        "titre": "Fleuryr Design",
        "slogan": "Directeur Artistique, Graphic Designer, Consultant",
        "technologie": "Site web | maintenance applicative",
        "image": "",
        "lien": "https://fleuryrdesign.com"
    },
    {
        "id": 7,
        "titre": "Alma Yoga Iyengan",
        "slogan": "Cours de Yoga sur Lyon",
        "technologie": "Site web | Design | Maintenance applicative",
        "image": "",
        "lien": "https://alma-yoga-iyengar.fr"
    },
    {
        "id": 8,
        "titre": "Yem Patrimoine",
        "slogan": "Gestionnaire de patrimoine",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://yem-patrimoine.com"
    },
    {
        "id": 8,
        "titre": "Table de Soie",
        "slogan": "Spécialiste dans l'art de la table",
        "technologie": "Site web | Maintenance applicative",
        "image": "",
        "lien": "https://tabledesoie.fr"
    },

]
const ProjetsSection = () => {

    return (
        <ProjetContainer>
            <ProjectSubContainer>
                <SubHeaderContainer>
                    <SubHeader mode="dark" color="#FFFFFF" text="Nos projets"/>
                </SubHeaderContainer>
                <ProjetTitles>
                    <ProjetMainTitle>Nous utilisons nos outils pour construire votre projet.</ProjetMainTitle>
                    <ProjetSubTitle>Nous aidons les entreprises qui nous font confiance à atteindre leurs objectifs. <u>Résoudre leurs problèmes.</u></ProjetSubTitle>
                </ProjetTitles>
                <ProjetElementList>
                <Swiper slidesPerView={2} grabCursor={true} centeredSlides={true} pagination={true} effect={"coverflow"} modules={[EffectCoverflow, Pagination]} 
                coverflowEffect={{
                    rotate: 50,
                    stretch: 100,
                    depth: 10,
                    modifier: 1,
                    slideShadows: false,
                     }} className="mySwiper">
                    {ListProjets.map((element, index) =>(
                        <SwiperSlide>
                            <ProjetElement>
                                <ProjectImage />
                                <ProjetTitle>{element.titre}</ProjetTitle>
                                <ProjetSlogan>{element.slogan}</ProjetSlogan>
                                <ProjetTechnologie>{element.technologie}</ProjetTechnologie>
                                <ProjetLink>
                                <ProjetLinkText>
                                    Voir plus
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