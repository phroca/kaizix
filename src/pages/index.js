import * as React from "react"
import Layout from "../components/layout/layout"

import HeroSection from "../components/home-components/hero-section/hero-section"
import EngagementSection from "../components/home-components/engagement-section/engagement-section"

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <EngagementSection />
    </Layout>
  )
}

export default IndexPage
