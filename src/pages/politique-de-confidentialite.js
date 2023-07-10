import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout/layout";

const PdcContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 140px;
`;
const PdcSubContainer = styled.div`
    display: grid;
    width: 70vw;
    justify-content: center;
    
`;

const PdcH1 = styled.h1`
    display: ${props => props.hidden === true ? "none" : "block"};
`;
const PdcH2 = styled.h2`
    font-family: "FuturaBold";
    color: black;
    margin-bottom: 80px;
    font-size: 96px;
`;
const PdcH3 = styled.div`
    font-family: "FuturaBold";
    color: black;
    font-size: 32px;
    margin-bottom: 24px;
`;
const PdcH4 = styled.div`
    font-family: "FuturaMedium";
    color: black;
    font-size: 20px;
    margin-bottom: 24px;
`;
const PdcHr = styled.hr`
    color: #cccccc;
    width: 100%;
    border: 0 solid;
    border-top-width: 1px;
    margin-bottom: 40px;
`;

const PdcParagraph = styled.div`
    font-family: "FuturaLt";
    color: black;
    font-size: 20px;
    margin-bottom: 40px;
`;
const PdcOl = styled.ol`
    
`;
const PdcLi = styled.li`
    
`;

const PolitiqueDeConfidentialite = () => {
    const [isCTATouched, setIsCTATouched] = useState(false);
    return (
        <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
            <Seo title="KAIZIX - Politique de confidentialité" />
            <PdcContainer>
            <PdcSubContainer>
                <PdcH1 hidden={true}>Politique de confidentialité</PdcH1>
                <PdcH2>Politique de confidentialité</PdcH2>
                <PdcH3>Introduction</PdcH3>
                <PdcParagraph>
                    Kaizix.com («Nous» ou «Notre» ou «Notre» ou «Kaizix» ou «Site Web») 
                    s'engage à assurer votre confidentialité tout en fournissant nos services («Services»). 
                    Si vous souhaitez en savoir plus sur nos services, vous devez fournir certaines informations 
                    nécessaires via le formulaire de notre site Web. La soumission de ces informations personnelles 
                    est volontaire et vous pouvez refuser de répondre à nos questions à tout moment. Cependant, en 
                    fournissant vos informations personnelles, vous consentez à le faire dans le but de vous assister 
                    dans le cadre de notre service.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Que comprennent les informations personnelles que nous collectons</PdcH3>
                <PdcH4>Informations personnelles fournies par vous :</PdcH4>
                <PdcParagraph>
                    Nous recueillons le nom, l'adresse e-mail, le budget estimé de votre projet 
                    et toute autre information que vous nous soumettez volontairement.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Comment utilisons-nous vos données personnelles</PdcH3>
                <PdcH4>Pour fournir et améliorer le Service :</PdcH4>
                <PdcParagraph>
                    Nous pouvons utiliser des informations personnelles en interne afin de 
                    fournir et d'améliorer le service, pour améliorer l'expérience des clients.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Dans quelle mesure et à qui divulguons-nous vos données personnelles</PdcH3>
                <PdcParagraph>
                    Nous utilisons les informations personnelles collectées via notre site Web à 
                    diverses fins commerciales décrites ci-dessous. Nous traitons vos informations personnelles 
                    à ces fins sur la base de nos intérêts commerciaux légitimes, afin de conclure ou d'exécuter 
                    un contrat avec vous, avec votre consentement, et/ou pour nous conformer à nos obligations légales. 
                    Nous indiquons les motifs de traitement spécifiques sur lesquels nous nous appuyons à côté de chaque 
                    finalité énumérée ci-dessous. Nous utilisons les informations que Nous recueillons ou recevons :
                </PdcParagraph>
                <PdcH4>Pour vous envoyer des informations administratives.</PdcH4>
                <PdcParagraph>
                    Nous pouvons utiliser vos informations personnelles pour vous envoyer des détails sur le service, 
                    répondre à vos questions et fournir d'autres informations connexes et/ou des informations sur les modifications 
                    apportées à nos termes, conditions et politiques.
                </PdcParagraph>
                <PdcH4>Pour répondre aux demandes légales et prévenir les dommages.</PdcH4>
                <PdcParagraph>
                    Si nous recevons une citation à comparaître ou une autre demande légale, nous devrons peut-être inspecter les données 
                    que nous détenons pour déterminer comment répondre. Nous pouvons divulguer des informations agrégées sur nos 
                    utilisateurs à de telles fins légales.
                </PdcParagraph>
                <PdcH4>À d'autres fins commerciales.</PdcH4>
                <PdcParagraph>
                    Nous pouvons utiliser vos informations à d'autres fins commerciales, telles que l'analyse de données, 
                    l'identification des tendances d'utilisation, la détermination de l'efficacité de nos services, 
                    pour évaluer et améliorer nos services et votre expérience. Nous n'utiliserons pas d'informations 
                    personnelles identifiables sans votre consentement.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Vos informations seront-elles partagées avec quiconque</PdcH3>
                <PdcParagraph>
                    Lorsque vous nous fournissez les informations susmentionnées, vous consentez 
                    à ce que nous puissions traiter ou partager des données sur la base juridique suivante:
                </PdcParagraph>
                <PdcH4>Intérêts légitimes :</PdcH4>
                <PdcParagraph>
                    Nous pouvons traiter vos données lorsque cela est raisonnablement nécessaire pour atteindre nos intérêts commerciaux légitimes.
                </PdcParagraph>
                <PdcH4>Obligations légales:</PdcH4>
                <PdcParagraph>
                    Nous pouvons divulguer vos informations lorsque nous sommes légalement tenus de le faire afin de nous conformer à la loi applicable, 
                    aux demandes gouvernementales, à une procédure judiciaire, à une ordonnance d'un tribunal ou à une procédure judiciaire, par exemple 
                    en réponse à une ordonnance d'un tribunal ou à une citation à comparaître (y compris en réponse aux autorités publiques pour répondre 
                    aux exigences de sécurité nationale ou d'application de la loi).
                </PdcParagraph>
                <PdcH4>Marketing et promotion des produits ou services affiliés :</PdcH4>
                <PdcParagraph>
                    Nous pouvons divulguer vos informations à nos sociétés affiliées et partenaires afin de promouvoir les produits ou services liés à Kaizix.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Quels outils de sécurité sont utilisés pour protéger votre vie privée</PdcH3>
                <PdcParagraph>
                    Nous avons mis en place des mesures de sécurité conçues pour protéger vos informations personnelles contre toute perte accidentelle et contre 
                    tout accès, utilisation, modification ou divulgation non autorisés. Cependant, nous ne pouvons absolument pas garantir que des tiers non autorisés 
                    ne pourront jamais contourner ces mesures ou utiliser vos informations personnelles à des fins inappropriées.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Combien de temps conservons-nous vos information :</PdcH3>
                <PdcParagraph>
                    Nous conservons vos informations aussi longtemps que nécessaire pour atteindre les objectifs décrits dans la présente politique de confidentialité, 
                    sauf disposition contraire de la loi. Lorsque nous n'avons aucun besoin commercial légitime de traiter vos informations personnelles, nous les supprimerons 
                    ou les anonymiserons, ou, si cela n'est pas possible, nous stockerons en toute sécurité vos informations personnelles et les isolerons de tout traitement 
                    ultérieur jusqu'à ce que la suppression soit possible. Si vous demandez la suppression de vos informations personnelles, nous annulerons votre compte et 
                    les informations qui y sont associées pour exercer votre droit « à l'oubli ».        
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Vos droits de confidentialité :</PdcH3>
                <PdcParagraph>
                    Dans certaines régions (comme l'Espace économique européen), vous disposez de certains droits en vertu des lois applicables en matière de protection des données. 
                    Ceux-ci peuvent inclure le droit:
                    <PdcOl>
                        <PdcLi>de demander l'accès et d'obtenir une copie de Vos informations personnelles,</PdcLi>
                        <PdcLi>demander la rectification ou l'effacement;</PdcLi>
                        <PdcLi>restreindre le traitement de vos informations personnelles; et</PdcLi>
                        <PdcLi>le cas échéant, à la portabilité des données.</PdcLi>
                    </PdcOl>
                    Pour faire une telle demande, veuillez utiliser les coordonnées fournies ici. Nous examinerons et agirons sur toute demande conformément aux lois applicables en matière de protection des données.
                    Si nous comptons sur votre consentement pour traiter vos informations personnelles, vous avez le droit de retirer votre consentement à tout moment. 
                    Veuillez toutefois noter que cela n'affectera pas la licéité du traitement avant son retrait.  
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Désactivation du marketing par e-mail :</PdcH3>
                <PdcParagraph>
                    Vous pouvez vous désinscrire de notre liste de diffusion marketing à tout moment en nous contactant via notre centre de contact par e-mail à l'adresse roca.philippe63@gmail.com.
                </PdcParagraph>
                <PdcH2>Politique relatives aux cookies</PdcH2>
                <PdcH3>Utilisation des cookies</PdcH3>
                <PdcParagraph>
                    Nous pouvons utiliser des cookies et d'autres technologies de suivi lorsque vous visitez https://shakuro.com/ pour aider à personnaliser notre site Web et améliorer votre expérience. 
                    Nous utilisons des cookies sur le site Web pour, entre autres, garder une trace des services que vous avez utilisés, enregistrer vos préférences d'utilisateur et suivre les pages que vous visitez. 
                    Les cookies nous aident à comprendre comment le site Web est utilisé. Nous pouvons également partager des informations sur votre utilisation de notre site Web avec nos partenaires d'analyse qui 
                    peuvent les combiner avec d'autres informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de leurs services.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Types de cookies</PdcH3>
                <PdcParagraph>
                    Les types de cookies suivants peuvent être utilisés lorsque vous visitez le site Web :
                </PdcParagraph>
                <PdcH4>Cookies analytiques</PdcH4>
                <PdcParagraph>
                    Les cookies d'analyse surveillent la façon dont les utilisateurs ont accédé au site Web, et comment ils interagissent avec et se déplacent une fois sur le site Web. Ces cookies nous permettent de savoir 
                    quelles fonctionnalités du site Web fonctionnent le mieux et quelles fonctionnalités du site Web peuvent être améliorées.
                </PdcParagraph>
                <PdcH4>Nos Cookies</PdcH4>
                <PdcParagraph>
                    Nos cookies sont des «cookies propriétaires» et peuvent être permanents ou temporaires. Ce sont des cookies nécessaires, sans lesquels le site Web ne fonctionnera pas correctement ou ne pourra pas 
                    fournir certaines caractéristiques et fonctionnalités. Certains d'entre eux peuvent être désactivés manuellement dans votre navigateur, mais peuvent affecter la fonctionnalité du site Web.
                </PdcParagraph>
                <PdcHr />
                <PdcH3>Contacter KAIZIX</PdcH3>
                <PdcParagraph>
                    Si vous avez des questions ou des commentaires sur cette politique, vous pouvez nous contacter par e-mail à roca.philippe63@gmail.com.
                </PdcParagraph>
                <PdcParagraph>
                    Si vous pensez que Kaizix n'a pas adhéré à cette politique de confidentialité, veuillez nous contacter et nous déploierons des efforts commercialement raisonnables pour remédier au problème.
                </PdcParagraph>
                </PdcSubContainer>
            </PdcContainer>
        </Layout>
    )
}

export default PolitiqueDeConfidentialite;