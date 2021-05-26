import mainFrame from './mainframe'
import { projectVisualization } from './projectvisualization'
import { makeProjectInputsAppear } from './makeProjectInputsAppear'
import { makeTaskInputAppear } from './makeTaskInputAppear'

let projects = []
let eachProject = {}

mainFrame()
projectVisualization()
makeProjectInputsAppear()
makeTaskInputAppear()

export {projects}
export {eachProject}