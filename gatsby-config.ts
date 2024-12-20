import type { GatsbyConfig } from "gatsby"
import { describe } from "node:test"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: '77design',
    siteUrl: 'https://77design.pl',
    description: '77design.pl – galeria zdjęć: zabytki, Kraków, architektura, nocne ujęcia, przyroda, widoki, Wenecja, Berlin, Rzym, Hvar i więcej. Odkryj świat w kadrach',
    author: '@broman-pl'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    /*{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      }
    },*/
    //'gatsby-plugin-mdx',
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
//          host: `.env.${process.env.DB_HOST}`,
          socketPath: process.env.DB_SOCKET,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        },
        queries: [
          {
            statement: 'SELECT idFoto, title, file FROM gal_foto WHERE status = 1 ORDER BY dateAdd DESC LIMIT 0,4',
            idFieldName: 'idFoto',
            name: 'lastPhotos'
          },
          {
            statement: `SELECT fotoId, count(*) as licznik, gal_foto.idFoto, gal_foto.title, gal_foto.status, gal_foto.file
              FROM gal_foto_comments 
              LEFT JOIN gal_foto ON fotoId = gal_foto.idFoto
              GROUP BY fotoId 
              ORDER BY licznik DESC 
              LIMIT 0,4`,
            idFieldName: 'idFoto',
            name: 'popularPhotos'
          },
          {
            statement: 'SELECT idFoto FROM gal_foto WHERE status = 1 ORDER BY RAND() LIMIT 0,1',
            idFieldName: 'idFoto',
            name: 'randomPhoto'
          },
          {
            statement: 'SELECT idFoto, title, file FROM gal_foto',
            idFieldName: 'idFoto',
            name: 'singlePhoto'
          }
        ]
      }
    },    
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        removeGatsbyAnnouncer: true,
        removeHeadDataAttrs: true
      }
    }
  ],
}

export default config
