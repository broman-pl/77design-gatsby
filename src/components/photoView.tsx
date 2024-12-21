import * as React from 'react'
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './photoView.module.css'

import { PhotoProps } from '../types/PhotoProps';

const PhotoView = ({ photoData }: { photoData: PhotoProps }) => {

    const photosCount = 123

    console.log(photoData)
    const maxWidth = Math.round(photoData.sizeMaxW/2)
    const PreviousLink = () => {
      if (photoData.prevPhoto) {
        return (
          <Link to={`/gal/${photoData.prevPhoto}`} className={styles.fotPrev} style={{width: `%50`}} title={`poprzednie zdjęcie: ${photoData.prevTitle}`}>
            <img src="../img/blank.gif" alt={`poprzednie zdjęcie: ${photoData.prevTitle}`} style={{display: 'block', maxWidth: `${maxWidth}px`}}/>
          </Link>

        )
      }
    }
    
    const NextLink = () => {
      if (photoData.prevPhoto) {        
        return (
          <Link to={`/gal/${photoData.nextPhoto}`} className={styles.fotNext} style={{width: `%50`}} title={`następne zdjęcie: ${photoData.nextTitle}`}>
            <img src="../img/blank.gif" alt={`następne zdjęcie: ${photoData.nextTitle}`} style={{display: 'block', maxWidth: `${maxWidth}px`}}/>
          </Link>
        )
      }
    }

    const Geo = () => {
      if (photoData.lat && photoData.lon) {   
        return (
            <Link to={`/gal/map/${photoData.nextPhoto}`} title='pokaż mapę' className={styles.noline}>
              <div className={ `${styles.icon} ${styles.mapPin}`} title='pokaż mapę'></div>
            </Link>
        )
      }
    }

    return (
        <div>
            <div className={styles.fotWraper}>
                <div className={styles.fot} style={{ maxWidth: `${photoData.sizeMaxW}px`}}>
                <div className={styles.fotOverlay}>
                    <PreviousLink />
                    <NextLink/>                    
                </div>
                <img src={ `/gallery/fotos/${photoData.file}` } alt={photoData.title} title={photoData.title} style={{ maxWidth: `100%`, height: `auto`}} width={photoData.sizeMaxW} height={photoData.sizeMaxH}/>
                </div>
            </div>
            <div className="desc">
                <div className="counter">{photoData.number} / {photosCount}</div>
                <h3>{photoData.title}</h3>
                <Geo/>
                <div dangerouslySetInnerHTML={{ __html: photoData.description }}></div>
            </div>
        </div>
        /*
        <div id="others">
        <div class="icon tag"></div>
        {section name=category loop=$photocategories}
        <h6><a href="{$urlBody}/category/{$photocategories[category].id}">{$photocategories[category].name}</a></h6>
        {/section}
        </div>
        
        <div class="params">
        {section name=coment loop=$photocomments}
        <div class="coment">
        <div class="comentValue">{$photocomments[coment].text}</div>
        <div class="comentAuthor">Komentarz #{$smarty.section.coment.index+1}
        <script type="text/javascript" language="javascript">
        document.write(String.fromCharCode({$photocomments[coment].autor}))
        </script></div>
        <div class="comentData">{$photocomments[coment].data}</div>
        {if $photocomments[coment].web}<div class="comentWeb">Www: {$photocomments[coment].web}</div>{/if}
        {if $photocomments[coment].ratting}<div class="comentRatting">Ocena: {$photocomments[coment].ratting}</div>{/if}
        </div>
        {/section}
        </div>
        
        <form id="comment_form" onsubmit="return false;"><div class="commentForm">
        <div class="form_stars">
          <span id="ratting_1">&#9733;</span>
          <span id="ratting_2">&#9733;</span>
          <span id="ratting_3">&#9733;</span>
          <span id="ratting_4">&#9733;</span>
          <span id="ratting_5">&#9733;</span>
          <input id="comment_ratting" name="comment_ratting" value="0" type="hidden" />
        </div>
        <div>
          <label for="comment_name">Imię:</label>
          <input id="comment_name" name="comment_name" size="36" value="" type="text" required="true" />
        </div>
        <div>
          <label for="comment_email">E-mail:</label>
          <input id="comment_email" name="comment_email" size="36" value="" type="text" required="true" />
        </div>
        <div>
          <label for="comment_www">Www:</label>
          <input id="comment_www" name="comment_www" size="36" value="" type="text" />
        </div>
        <div>
          <label for="comment_text">Komentarz:</label>
          <textarea id="comment_text" name="comment_text" required="true" ></textarea>
        </div>
        <div>
          <input id="comment_submit" name="comment_submit" size="24" value="Wyślij" type="submit" />
          <input id="comment_photo" name="comment_photo" value="{$photo.id}" type="hidden" />
        </div>
        </div></form>
        <div class="links">
        {if $photo.prev_id}<div class="prev"><a href="{$urlBody}/{$prev_url}">« {$photo.prev_title}</a></div>{/if}
        {if $photo.next_id}<div class="next"><a href="{$urlBody}/{$next_url}">{$photo.next_title} »</a></div>{/if}
        </div>
        */

    )
}

export default PhotoView