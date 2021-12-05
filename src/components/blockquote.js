import React from 'react';


//styles
import "../styles/global.css"
import "../styles/typography.css"
import * as blockquoteStyles from "../styles/blockquote.module.css"

//markup
const Blockquote = ( {children} ) => {
    return (
        <div className={`grid ${blockquoteStyles.wrapper}`}>
            <blockquote className={` offset-4 span-10 ${blockquoteStyles.style}`}>{children}</blockquote>
        </div>
    )
}

export default Blockquote