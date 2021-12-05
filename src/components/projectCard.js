import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';


//styles
import '../styles/global.css'
import * as projectCardStyles from '../styles/projectCard.module.css'

//markup
const ProjectCard = ({ url, heading, description, cover, s, m, l }) => {

    let linkType;

    if (l) {
        linkType = <Link to={url} className={`${projectCardStyles.large} ${projectCardStyles.wrapper}`}>
            <div className={`${projectCardStyles.innerWrapper}`}>
                <GatsbyImage className={`${projectCardStyles.largeImg} ${projectCardStyles.img} `} image={cover} alt={`${heading},${description}`}></GatsbyImage>
                <div className={`${projectCardStyles.textWrapper}`}>
                    <h4 className={` ${projectCardStyles.heading} link-style `}>{heading}</h4>
                    <p className={` ${projectCardStyles.description} `}>{description}</p>
                </div>
            </div>
        </Link>

    } else if (m) {
        linkType = <Link to={url} className={`${projectCardStyles.med} ${projectCardStyles.wrapper}`}>
            <div className={`${projectCardStyles.innerWrapper}`}>
                <GatsbyImage className={` ${s ? `${projectCardStyles.smallImg}` : `${projectCardStyles.largeImg}`} ${projectCardStyles.img} `} image={cover} alt={`${heading},${description}`}></GatsbyImage>
                <div className={`${projectCardStyles.textWrapper}`}>
                    <h4 className={` ${projectCardStyles.heading} link-style `}>{heading}</h4>
                    <p className={` ${projectCardStyles.description} `}>{description}</p>
                </div>
            </div>
        </Link>

    } else if (s) {

        linkType = <a href={url} className={`${projectCardStyles.small}`} target="_blank" rel="noopener noreferrer">
            <div className={`${projectCardStyles.innerWrapper}`}>
                <GatsbyImage className={` ${s ? `${projectCardStyles.smallImg}` : `${projectCardStyles.largeImg}`} ${projectCardStyles.img} `} image={cover} alt={`${heading},${description}`}></GatsbyImage>
                <div className={`${projectCardStyles.textWrapper}`}>
                    <h4 className={` ${projectCardStyles.heading} link-style `}>{heading}</h4>
                    <p className={` ${projectCardStyles.description} `}>{description}</p>
                </div>
            </div>
        </a>
    }

    return (linkType)
}

export default ProjectCard