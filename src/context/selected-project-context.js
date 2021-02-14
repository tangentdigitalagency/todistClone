import React, { createContext, useContext, useState } from 'react';
// @ts-ignore
import { useProjects } from '../hooks';

// Context passes data down the react data tree with out props

// @ts-ignore
export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({children}) => {

    // @ts-ignore
    const [selectedProject , setSelectedProject] = useState('INBOX'); // to set projects when addind new tasks, or overlay/sidebar

    return (
        <SelectedProjectContext.Provider 
            value={{selectedProject, setSelectedProject}}
        >
            {children}

        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
