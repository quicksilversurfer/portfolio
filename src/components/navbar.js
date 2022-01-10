import React from "react";
import { Link } from "gatsby";

//styles
import "../styles/global.css"
import * as navBarStyles from '../styles/navbar.module.css';

//markup
const NavBar = () => {
    return (
        <nav className={navBarStyles.nav}>
            <Link className={`${navBarStyles.link}`} to="/">ps</Link>
            <div>
                <a className={`${navBarStyles.link} link-style space-right-small`} href="https://prateeksolanki-design.notion.site/Hi-I-m-Prateek-6e5e53483929416e9a05e3f8d213c88a" target="_blank" rel="noopener noreferrer">case studies</a>
                <a className={`${navBarStyles.link} link-style`} href="https://docs.google.com/document/d/1IVgnbVRpmHoPcfm9noHa2ZWcuguilPSF/edit?usp=sharing&ouid=111091762066531628079&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">résumé</a>
            </div>
        </nav>
    )
}

export default NavBar