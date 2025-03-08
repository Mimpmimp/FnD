import React from "react";
import './Sidebar.css'
import logoc from '../Assets/fmd-logo2.png'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiPill } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="LogoD">
                <img className="logoc" src={logoc} alt="fmd-logo2" />
            </div>
            <div className="menuD">
                <h3 className="divt">
                    MENU
                </h3>
                <ul className="List">
                    <li className="Items">
                        <a href="#" className="Link">
                        <MdOutlineSpaceDashboard className="icons"/>
                        <span className="Text">
                            DASHBOARD
                        </span>
                        </a>
                    </li>
                    <li className="Items">
                        <a href="#" className="Link">
                        <CiPill className="icons"/>
                        <span className="Text">
                            PRODUCT
                        </span>
                        </a>
                    </li>
                    <li className="Items">
                        <a href="#" className="Link">
                        <FaRegNewspaper className="icons"/>
                        <span className="Text">
                            REPORTS
                        </span>
                        </a>
                    </li>
                    <li className="Items">
                        <a href="#" className="Link">
                        <BiSolidBarChartAlt2 className="icons"/>
                        <span className="Text">
                            CHARTS
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar