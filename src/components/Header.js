import React from 'react'
import {NavLink} from 'react-router-dom'
import HomeSvg from "../img/home.svg";
import GoalSvg from "../img/objectifs.svg";
import StatSvg from "../img/stat.svg";

const Header = () => {
    return (
        <>
            <div className="navbar blur">
                <ul>
                    <NavLink exact activeClassName='is-active' to='/'>
                        <li>
                            <img src={HomeSvg} alt="home"/>
                        </li>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/objectifs'>
                        <li>
                            <img src={GoalSvg}
                                 alt="goals"/>
                        </li>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/stats'>
                        <li>
                            <img src={StatSvg} alt="stats"/>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default Header