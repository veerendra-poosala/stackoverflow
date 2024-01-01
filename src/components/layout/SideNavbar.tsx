import { ReactElement, useEffect, useState } from "react";
import { FaQuestion, FaUser } from "react-icons/fa6";
import { TbBriefcase2 } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { BsTags } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";
import { TbArrowBadgeUp } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade, Tooltip } from "@mui/material";


export interface SideNavBarProps {
    open: Boolean,
    changeBarStatus?: Function,
    width?: number
}

export interface SideNavType{
    icon : ReactElement<any>,
    title : string,
    link : string,
    isNewOption: boolean,
    activeIcon?: ReactElement<any>
}

export const sideNavData : SideNavType[] = [
    {
        icon : <FaQuestion size={16}  />,
        activeIcon: <FaQuestion size={16} color='var(--orange-color)' />,
        title: "Questions",
        link: "/questions",
        isNewOption: false
    },
    {
        icon: <TbBriefcase2 size={16}  />,
        title: "JOBS",
        link: "#",
        isNewOption: false
    },
    {
        icon: <GrDocumentText size={16} />,
        title: "Documentation",
        link: "#",
        isNewOption: true
    },
    {
        icon: <BsTags size={16}  /> ,
        title: "Tags",
        link: "#",
        isNewOption: false
    },
    {
        icon: <LiaUserSolid size={16}  />,
        title: "Users",
        link: '#',
        isNewOption: false
    },
    {
        icon: <TbArrowBadgeUp size={16}  />,
        title: "Badges",
        link: "#",
        isNewOption: false
    },
    {
        icon: <GrAnnounce size={16}  />,
        title: "Ask Question",
        link: "#",
        isNewOption: false
    },
    {
        icon: <IoMdMenu size={16}  />,
        title: "Stack Exchange",
        link: "#",
        isNewOption: false
    },
    {
        icon: <FaInbox size={16} />,
        title: "Inbox",
        link: "#",
        isNewOption: false
    }
]

const logo = `${process.env.NEXT_PUBLIC_STACK_LOGO}`;
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;



const SideNavBar = ({
    open,
    changeBarStatus,
    width
}: SideNavBarProps)=>{

    const router = useRouter();
    const {pathname} = router;

    const checkActiveLink = (link: string)=>{
        return pathname === link;        
    }

    return(
        open ? (
        <div className="">
            <div>
                <Image
                    width="200"
                    height="140"
                    src={logo}
                    alt="Pin Icon"
                    className="p-[1.5rem] pl-[2rem]"
                />
            </div>
            <div className="w-[100%] mt-5">
                <ul className="w-[100%]">
                    {
                        sideNavData.map((item, index) => (
                            <li 
                                key={`${index}`}
                                className={checkActiveLink(item?.link)? "active-tab cursor-pointer" : "cursor-pointer" }
                                onClick={()=>{
                                    router.push(`${baseUrl}${item.link}`)
                                }}
                            >
                                <Tooltip TransitionComponent={Fade} title={item?.title}>
                                    <div 
                                        className="flex flex-row items-center pl-[1rem]"
                                    >
                                        <div className="mr-3">
                                            {
                                                checkActiveLink(item?.link) ?
                                                item?.activeIcon:
                                                item?.icon
                                            }
                                        </div>
                                        <div>
                                            <h2 
                                                className={
                                                            checkActiveLink(item?.link) ? 
                                                            "text-[#000000]" :
                                                            "text-[#bfbfbf]"
                                                        }
                                            >
                                                {item.title}
                                                <span className={item.isNewOption?'visible text-[0.5rem] text-[var(--orange-color)] font-bold uppercase relative bottom-1 left-1':'hidden'}>
                                                    New
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </Tooltip>
                            </li>
                        ))
                    }

                </ul>
                
            </div>

        </div>
        ) : (
            <></>
        )
    )
}


export default SideNavBar;