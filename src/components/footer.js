import React from 'react';


//styles
import "../styles/global.css"
import "../styles/typography.css"
import * as footerStyles from "../styles/footer.module.css"

//markup
const Footer = ({ children }) => {
    return (
        <footer className={`${footerStyles.wrapper}`}>
            <h2 className={footerStyles.title}>connect</h2>
            <div className={`${footerStyles.links}`}>
                <ul>
                    <li className={` ${footerStyles.listItem}`}><a href="mailto:hello@prateeksolanki.com" target="_blank" rel="noopener noreferrer" className={` link-style `}>hello@prateeksolanki.com</a></li>
                    <li className={` ${footerStyles.listItem}`}><a href="https://www.linkedin.com/in/prateek-solanki-78313218/" target="_blank" rel="noopener noreferrer" className={` link-style `}>linkedin</a></li>
                    <li className={` ${footerStyles.listItem}`}><a href="https://refind.com/quicksilvrsrfr" target="_blank" rel="noopener noreferrer" className={` link-style `}>refind</a></li>
                </ul>
                <p className={`${footerStyles.madeBy}`}>built with <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" className={` link-style `}>gatsby.js</a> & <a href="https://ptsjs.org/" target="_blank" rel="noopener noreferrer" className={` link-style `}>pts.js</a></p>
            </div>


        </footer>
    )
}

export default Footer