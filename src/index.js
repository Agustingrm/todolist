import mainFrame from './mainframe'
// import { projectVisualization } from './projectvisualization'
import { makeProjectInputsAppear } from './makeProjectInputsAppear'
import { makeTaskInputAppear } from './makeTaskInputAppear'
import { plusButtonTask } from './plusbuttontask'
import { plusButtonProject } from './plusbuttonproject'

let projects = []
let taskStorage = []

mainFrame()
plusButtonProject()
makeProjectInputsAppear()
// makeTaskInputAppear()

const h2 = document.createElement('h2')
h2.innerHTML = 23123
projectList.appendChild(h2)

if (h2 != ''){
    plusButtonTask()
    makeTaskInputAppear()
}

export {projects}
export {taskStorage}