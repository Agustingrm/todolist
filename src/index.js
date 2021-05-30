import mainFrame from './mainframe'
import { makeProjectInputsAppear } from './makeProjectInputsAppear'
import { makeTaskInputAppear } from './makeTaskInputAppear'
import { plusButtonTask } from './plusbuttontask'
import { plusButtonProject } from './plusbuttonproject'

let projects = []

let taskStorage = []

mainFrame()
plusButtonProject()
makeProjectInputsAppear()

const h2Container = document.getElementById('h2Container')
const h2 = document.createElement('h2')
h2Container.appendChild(h2)

if (h2.value != undefined){
    plusButtonTask()
    makeTaskInputAppear()
}

export {projects}
export {taskStorage}