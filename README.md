# Init for app and how to start

- Delete Package Lock
- Npm i
- npm start

### MAJOR BUG 
 this bug is random, when creating a project, and deleting it, the app crashes, there is no consistency for the bug to appear, the error comes from ` /src/components/Tasks.js:20 `

 with the following error: 
 `
 17 |  }
  18 | 
  19 |  if (projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
> 20 |    projectName = getTitle(projects, selectedProject)['name'];
     | ^  21 |  }
  22 | 
  23 |  useEffect(() => {
 `
---------------------------------------------------
Its fixed by taking rewriting: 
`
 const {projects} = useProjectsValue();
`
TO 

`
const projects = userProjectsValue;
`

Not Sure what this can hurt in the long run but it works LOL 
# Tenth Commit v 0.0.10

- Built out add project
- Fixed bug for memory leak 
- fixed 'Cannot read property 'name' undefined' bug
- Add project button goes into firebase
- Creates ID in firebase
- Added Context for sidebar
- Built our AddTask to scss

** TO DO **

- Build out Add Tasks Component with moment.js
- add usability for AddTasks Component 
- Add TaskDate with Moment.js

# Ninth Commit v0.0.9

- Built out Tasks Component 
- Add main content to SCSS
- Added content for sidebar 
- Added the AddProject Component 
- modified contxt
- Added Projects to Firebase
- Added show confirm delete to stylesheet
- Building out AddProject Comoponent 

** TO DO **

- Add Tasks to SCSS
- Add Tasks with moments.js
- Add AddTasks and Tasks to components 
- Finalize Stytles


# Eigth Commit v0.0.8

- Fixed Style for confirm Delete

** TO DO **

- Build out tasks component 
- Add main conent to scss
- Add content for Sidebare For Project


# Seventh Commit v0.0.7

- Added Context To App
- Built Project Components
- Added composite index to Firebase
- added individual project component 
- added AddPropject component to modify context
- Added Projects to firebase with context
- Added show confirm delete

** TO DO **

- Fix style issue for confirm delete
- Build out tasks component 
- Add main conent to scss
- Add content for Sidebare For Projects


# Sixth Commit v0.0.6

- Added in SCSS into main file
- Styled sidebar
- styled header
- added Nth child for dots for projects 
- added layout components 

** TO DO ** 

- Add Context Helpers for project 
- Fix css bug where hover on sidebar makes hover css for all sidebar items at once

# Fifth Commit v0.0.5

- Fixed bug with firebase init in npm package
- fixed issues with type script in hook.js, Content.js, and constants
- Fixed unsubscribe with firebase
- data no read in firebase
- fixed archived bug with firebase
- fixed date bug with firebase
- Added SCSS
    - mixins
    - global vars
    - light mode

** TO DO ** 
- add Dark mode in css
- finalize stlying and connect to front facing 

# Fourth Commit v0.0.4
- Add Snapshots
- Added Checkbox
- Added Content JS with Tasks and Hooks

** TO DO **
 - fix issues with firebase calling on hooks
 - fix issues with typescript
 - fix remaining issues on Hooks.js like 
    - unsub
    - data
    - archived
    - date

# Third Commit v0.0.3
- Added Firebase Init
- Added custom Hooks


** TO DO **
 - Add Custom Hooks
 - UseEffect
 - UseState
# Second Commit v0.0.2
- Added New Header file system | Sidebar
- Added Sidebar system with Logo and nav 
- Icons with Sidebar


** TO DO **
 - Add Firebase
 - Install node sass

# First Commit v0.0.1
Initilzied npm packages, took out css files, and headers 

** TO DO **
 - Add Headers
 - Add Sidebar
 - Add Icons
