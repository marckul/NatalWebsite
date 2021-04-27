import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import Seo from "../components/seo"


const NotFoundPage = () => (
  <Layout >
    <Seo title="404: Not found" />
    <div className="container my-5 py-5" style={{minHeight: "fit-content"}}>
      {/* d-flex  flex-column flex-grow-1 */}
      <h1 className="pt-5 mt-5 display-4">Błąd 404</h1>
      <p>Strona której szukasz nie istnieje lub została usunięta :( </p>
      <AnchorLink to="/">Powrót do strony głównej</AnchorLink>
    </div>
  </Layout>
)

export default NotFoundPage
