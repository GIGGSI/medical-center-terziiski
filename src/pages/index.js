import * as React from "react"
import Seo from "../components/Global/Seo/Seo"
import Layout from "../components/Layout/Layout"
import BlogSection from '../components/Global/BlogSection/BlogSection'

export default function Home() {
  return <Layout>
    <Seo
      title="Медицински Център Терзийски."
      description="МЦ Терзийски предлага висококачествена доболнична помощ в областта на Акушерството и Гинекологията"
    />
    <BlogSection />
  </Layout>
}
