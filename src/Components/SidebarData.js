import React from 'react'
import { FaHome, FaCat, FaDog } from "react-icons/fa"
import {  GiRabbit, GiParrotHead} from "react-icons/gi"

export const SidebarData = [
    {
        title: "HOME",
        icon: <FaHome />,
        link: "/shop"
    },
    {
        title: "CATS",
        icon: <FaCat />,
        link: "/shop-cats"
    },
    {
        title: "DOGS",
        icon: <FaDog />,
        link: "/shop-dogs"
    },
    {
        title: "RABBITS",
        icon: <GiRabbit />,
        link: "/shop-rabbits"
    },
    {
        title: "PARROTS",
        icon: <GiParrotHead />,
        link: "/shop-parrots"
    }
    
]
