import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks';

// Context passes data down the react data tree with out props

// @ts-ignore
export const ProjectsContext = createContext();

export const ProjectsProvider = ({children}) => {

    const {projects, setProjects} = useProjects(); // to set projects when addind new tasks, or overlay/sidebar

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjectsValue = () => useContext(ProjectsContext);

/* 
Example of use for Context

const {projects} = useProjectsValue();

*/