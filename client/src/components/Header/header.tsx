import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './style.css';

export const Header:FC = () => {
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <NavLink to="/all" 
                        className={
                            splitLocation[1] === "all" || splitLocation[1] === "" ? 
                            "header-link-active" 
                            : "header-link"
                    }>
                        Все котики
                    </NavLink>
                    <NavLink to="/favourite" className={splitLocation[1] === "favourite" ? 
                        "header-link-active" 
                        : "header-link"
                    }>
                        Любимые котики
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}