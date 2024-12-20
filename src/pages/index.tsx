import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import PhotoGrid from '../components/photoGrid'


type MySQLPageProps = {
  mysqlRandomPhoto: {
    idFoto: number;      
  }
};

const IndexPage = ({ data }: PageProps<MySQLPageProps>) => {
  return (
    <Layout randomId={data.mysqlRandomPhoto.idFoto}>
      <PhotoGrid type="Last"></PhotoGrid>
      <hr/>
      <h2 title="Najpopularniejsze">Najpopularniejsze</h2>
      <PhotoGrid type="Popular"></PhotoGrid>    
    </Layout>
  )
}

export const Head: HeadFC = () => <Seo title="Galeria" />

export default IndexPage

export const query = graphql`
  query IndexPage {
    mysqlRandomPhoto {
        idFoto
    }        
  }
`