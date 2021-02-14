import React, { useEffect, useState } from 'react';
import {Checkbox} from './Checkbox';
import {useTasks} from '../hooks';
import {collatedTasks} from '../constants';
import {useSelectedProjectValue, useProjectsValue} from '../context'
import {getTitle, getCollatedTitle, CollatedTasksExist} from '../helpers';


export const Tasks = () => {
    const {selectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();
    const {tasks} = useTasks(selectedProject);

    let projectName = '';

    if (projects && selectedProject && !CollatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;

        console.log('projectName 1: ', projectName);
    }

    if (CollatedTasksExist(selectedProject) && selectedProject){
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
        console.log('projectName 2: ', projectName)

    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    });

    return (
        <div className="tasks" data-testid="tasks"> 
            <h2 data-testid="project-name"> 
                {projectName}
            </h2>

            <ul className="tasks__list">
                {tasks.map(task =>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};