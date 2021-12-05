import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';


//styles
import "../styles/global.css"
import * as imageUnitStyles from '../styles/imageUnit.module.css'

//markup
const ImageUnit = ({ src, caption, s, m, l }) => {
    return (
        <figure className={`${s ? `${imageUnitStyles.small}` : ``}  ${m ? `${imageUnitStyles.med}` : ``} ${l ? `${imageUnitStyles.large}` : ``} ${imageUnitStyles.wrapper}`}>
            <GatsbyImage className={` ${imageUnitStyles.image}`} image={src} alt={caption}></GatsbyImage>
            <figcaption className={` ${imageUnitStyles.caption} `}>{caption}</figcaption>
        </figure>
    )
}

export default ImageUnit