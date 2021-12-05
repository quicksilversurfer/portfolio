import React from "react";


//styles
import * as coverStyles from '../styles/cover.module.css';

//markup
const Cover = ({ title, description, home }) => {
    return (
        <section className={`${home ? `${coverStyles.homeWrapper }` : `${coverStyles.detailWrapper}`}`}>
            <h1 className={`${coverStyles.title} ${home ? `${coverStyles.home}` : ``}`}>{title}</h1>
            <p className={` span-9 ${coverStyles.description} ${home ? `${coverStyles.homeDesc}` : ``}`}>{description}</p>
        </section>
    )
}

export default Cover