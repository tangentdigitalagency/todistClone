import React, {useState} from 'react';
import {FaLess, FaTrashAlt} from 'react-icons/fa';
import {useProjectsValue, useSelectedProjectValue} from '../../context';
import {firebase} from '../../firebase';



export const IndividualProject = ({project}) => {

  

    const [showConfirm, setShowConfirm] = useState(false); // verifcation for delete
    const {projects, setProjects} = useProjectsValue();
    const {setSelectedProject} = useSelectedProjectValue();

    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]); //sets project with current project with Refresh
                setSelectedProject('INBOX') // Rerender Set Porjects
            });
    };

    return (
      
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span 
                className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FaTrashAlt className="trash"/>
                {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete <b>{project.name}</b>?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId) }
                className="deleteButton"
                
              >
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowConfirm(!showConfirm);
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"

              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
        </>
        )
};