import React from 'react';


//styles
import "../styles/global.css"
import * as postBlockStyles from '../styles/postBlock.module.css';

//markup
const PostBlock = ( {heading, children, layout} ) => {
    return (
        <div className={` grid span-12 ${postBlockStyles.blockWrapper} ${ layout ?  `${postBlockStyles.layout}` : ``} `}>
            <h3 className={` span-4 ${ layout ?  `hidden` : `${postBlockStyles.heading}`} `}>{ heading }</h3>
            <div className={` span-8 offset-5 ${postBlockStyles.body} `}>{ children }</div>
        </div>
    )
}

export default PostBlock