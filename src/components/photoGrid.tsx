import * as React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from './photoGrid.module.css'

interface PhotoNode {
    idFoto: string;
    title: string;
    file: string;
}

interface PhotoGridQueryData {
    allMysqlLastPhotos: {
        nodes: PhotoNode[];
    };
    allMysqlPopularPhotos: {
        nodes: PhotoNode[];
    };
}

const PhotoGrid = ({ type }: { type: "Last" | "Popular" }) => {
    const data = useStaticQuery<PhotoGridQueryData>(graphql`
        query PhotoGrid {
        allMysqlLastPhotos {
            nodes {
                idFoto,
                title,
                file
            }
        }
        allMysqlPopularPhotos {
            nodes {
                idFoto,
                title,
                file
            }
        }    
        }
    `)

/*

query Photos {
  allMysqlPopularPhotos(limit: 3, sort: {fotoId: DESC}) {
    nodes {
      idFoto
      title
      file
    }
  }
}

query Photos {
  allMysqlPopularPhotos(
    limit: 3
    sort: {fotoId: DESC}
    filter: {status: {eq: 1}}
  ) {
    nodes {
      idFoto
      title
      file
    }
  }
}
*/



    const key = `allMysql${type}Photos` as keyof PhotoGridQueryData;

    return (
        <div className={styles.lastPhotos}>{            
            data[key]?.nodes.map((node) => (
                <div className={styles.lastPhoto} style={{ backgroundImage: `url("https://77design.pl/gallery/fotos/${node?.file}")` }} key={node?.idFoto}>
                    <Link to={`/gal/${node.idFoto}`}>{node.title}</Link>
                </div>
            ))
        }</div>
    )
}

export default PhotoGrid
