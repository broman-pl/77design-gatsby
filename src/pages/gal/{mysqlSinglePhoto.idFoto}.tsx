import * as React from 'react'
import { HeadFC, PageProps, graphql } from "gatsby"

import Layout from '../../components/layout'
import PhotoView from '../../components/photoView'
import Seo from '../../components/seo'

import { PhotoProps } from '../../types/PhotoProps';

type MySQLPageProps = {
  mysqlSinglePhoto: PhotoProps;
  mysqlRandomPhoto: {
    idFoto: number;
  }
};

const PhotoPost: React.FC<PageProps<MySQLPageProps>> = ({ data }) => {
  return (
    <Layout randomId={data.mysqlRandomPhoto.idFoto}>
      <PhotoView photoData={data.mysqlSinglePhoto}></PhotoView>
    </Layout>
  )
}

export const Head: HeadFC<MySQLPageProps> = ({ data }) => {
  console.log(data)
  return (<Seo title={data.mysqlSinglePhoto.title} />)
}

export default PhotoPost

export const query = graphql`
  query ($idFoto: Int!) {
    mysqlSinglePhoto(idFoto: {eq: $idFoto}) {
        idFoto,
        title,
        file
        description, 
        number, 
        lat, 
        lon, 
        seoDescription, 
        location,
        nextPhoto,
        prevPhoto,
        nextTitle,
        prevTitle
    }
    mysqlRandomPhoto {
        idFoto
    }        
  }
`