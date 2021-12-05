import React from "react";

//styles
import "../styles/global.css"
import * as sectionStyles from '../styles/section.module.css';

//markup
const Section = ({ title1, title2, title3, desc1, desc2, desc3, heading, layout, children }) => {

    let header;
    let cont;

    if (heading) { header = <h3 className={ `span-9  ${sectionStyles.sectionHeading}` }>{heading}</h3> }
    else { header = null }

    if (children) { cont = <div className={ `span-12 grid` }> {children} </div> }
    else { cont = null }

    return (
        <section className={`grid ${sectionStyles.sectionWrapper} `}>
            {/* title block */}
            <div className={`grid span-12 ${sectionStyles.titleWrapper}`}>
                <div className={`span-4`}>
                    <h2 className={sectionStyles.sectionTitle}>{title1}</h2>
                    <p className={sectionStyles.sectionDesc}>{desc1}</p>
                </div>
                <div className={`span-4 ${ layout ?  `hidden` : `${sectionStyles.titleWrapper}`}`}>
                    <h2 className={sectionStyles.sectionTitle}>{title2}</h2>
                    <p className={sectionStyles.sectionDesc}>{desc2}</p>
                </div>
                <div className={`span-4 ${ layout ?  `hidden` : `${sectionStyles.titleWrapper}`}`}>
                    <h2 className={sectionStyles.sectionTitle}>{title3}</h2>
                    <p className={sectionStyles.sectionDesc}>{desc3}</p>
                </div>
            </div>
            {/* heading */}
            { header }
            
            {/* content */}
            { cont }

        </section>
    )
}

export default Section