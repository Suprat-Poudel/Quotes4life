import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {
    return (
        <header className={classes.header}>
        <div className={classes.glow}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to ='/quotes' activeClassName={classes.active}>All Quotes</NavLink></li>
            </ul>
            <li><NavLink to ='/new-quotes' activeClassName={classes.active}>Add a Quote</NavLink></li>
        </nav>
        </header>
    )
}

export default MainNavigation
