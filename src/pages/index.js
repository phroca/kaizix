import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout/layout"

import HeroSection from "../components/home-components/hero-section/hero-section"
import EngagementSection from "../components/home-components/engagement-section/engagement-section"
import ServiceSection from "../components/home-components/services-section/services-section"
import ProjetsSection from "../components/home-components/projets-section/projets-section"
import ContactSection from "../components/home-components/contact-section/contact-section"
import Seo from "../components/seo"

const IndexPage = () => {
  const [isCTATouched, setIsCTATouched] = useState(false);
  const handleClickCta = (e) => {
    e.preventDefault();
    setIsCTATouched(true);
  }
  return (
    <Layout modalContact={isCTATouched} modalContactUpdate={setIsCTATouched}>
      <Seo title="KAIZIX - Agence de développement web & création digitale" />
      <HeroSection click={(e) => handleClickCta(e)}/>
      <EngagementSection />
       <ServiceSection />
      <ProjetsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
