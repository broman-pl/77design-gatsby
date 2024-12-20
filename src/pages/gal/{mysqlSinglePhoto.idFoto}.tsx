import * as React from 'react'
import { HeadFC, PageProps, graphql } from "gatsby"

import Layout from '../../components/layout'
import Seo from '../../components/seo'

import * as styles from './{mysqlSinglePhoto.idFoto}.module.css'

type MySQLPageProps = {
    mysqlSinglePhoto: {
      idFoto: number;
      title: string;
      file: string;
    };
    mysqlRandomPhoto: {
      idFoto: number;      
    }
  };

const PhotoPost: React.FC<PageProps<MySQLPageProps>> = ({ data }) => {    
    return (
        <Layout randomId={data.mysqlRandomPhoto.idFoto}>
          <div className={styles.fot} style={{ maxWidth: '1200px'}}>

          </div>
            <p>{data.mysqlSinglePhoto.title}</p>
        </Layout>
    )
}

export default PhotoPost

export const query = graphql`
  query ($idFoto: Int!) {
    mysqlSinglePhoto(idFoto: {eq: $idFoto}) {
        idFoto,
        title,
        file
    }
    mysqlRandomPhoto {
        idFoto
    }        
  }
`