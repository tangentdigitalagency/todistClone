// Hold State, and check life cycle 

import { useState, useEffect } from 'react';
import {firebase} from '../firebase';
import { CollatedTasksExist} from '../helpers';
import moment from 'moment';



export const userTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'cTRenoVENkLEDriDemUrp');
            
        unsubscribe = 
        selectedProject && !CollatedTasksExist(selectedProject) 
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) 
        : selectedProject === 'TODAY' 
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('MM/DD/YYYY')
        ))

        : selectedProject === 'INBOX' || selectedProject === 0 
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;
    }, [selectedProject]);
};