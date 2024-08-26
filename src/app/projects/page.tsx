"use client"
import React, { useState } from 'react'
import { projectList } from '@/data/projectsList'
import ProjectCard from '@/components/ui/common/ProjectCard'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'

// type Props = {}
type tabsType = {
    id: string;
    title: string

}
const tabsLists: tabsType[] = [
    {
        id: "all",
        title: "All",

    },
    {
        id: "wordpress-design",
        title: "Wordpress Design",

    },
    {
        id: "wordpress-design",
        title: "Wordpress Design",

    },
    {
        id: "wordpress-design",
        title: "Wordpress Design",

    },
]
type Prop = {
    currentTab: string;
    handleTabChange: any
    tab: any
}
const Tabs = ({ tab, handleTabChange, currentTab }: Prop) => {
    return (
        <button onClick={() => handleTabChange(tab.id)} className={`cursor-pointer hover:text-light-blue uppercase text-xl whitespace-nowrap inline-block ${currentTab === tab.id ? "font-[600] text-soft-white" : "font-[400] "} font-incognito`}>{tab.title}</button>
    )
}
const Page = (props: any) => {

    const [currentTab, setCurrentTab] = useState<string>("all")
    const handleTabChange = (id: string) => {
        setCurrentTab(id)
    }
    const filteredProjects = currentTab === "all" ? projectList : projectList.filter(project => project.category === currentTab)
    return (
        <main>
            <h1 className="text-3xl font-[600] text-center  font-incognito mb-7 text-soft-white">Projects</h1>

            <div className="mb-5  ">
                <span className="text-[.5rem] flex flex-col md:hidden"><Icon icon="octicon:arrow-both-24" width="26" height="26" /><p>Scroll</p></span>
                <span className="flex gap-3 justify-start md:justify-center overflow-x-auto  /w-full">{
                    tabsLists.map(tab => (<Tabs currentTab={currentTab} tab={tab} handleTabChange={handleTabChange} key={tab.id} />))}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 .grid-flow-dense .grid-row-auto auto-rows-fr gap-4" style={{ gridAutoRows: "auto" }}>{filteredProjects.map(project => (<ProjectCard project as Props['featured']} key={project.id} />))}</div>









        </main>
    )
}

export default Page
