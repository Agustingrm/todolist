import { addTask } from './addtask'
import { plusButtonTask } from './plusbuttontask'
import {eachProject} from './index'
import {projects} from './index'
import { projectVisualization } from './projectvisualization'

const makeTaskInputAppear = () => {
    
    let buttonTaskContainer = document.getElementById('buttonTaskContainer')
    let addTaskButton = document.getElementById('addTaskButton')

        addTaskButton.addEventListener('click',()=> {
        buttonTaskContainer.parentNode.removeChild(buttonTaskContainer)
        addTask()
        
        //Acept Button Logic
        const acceptButtonTask = document.getElementById('acceptButtonTask')

        acceptButtonTask.addEventListener('click',()=>{
        const toDoCreator = (title,priority,dueDate,description) => {
            return {title,description,dueDate,priority}
        }

        const asignTask = () => {
            let title = document.getElementById('projectTitle').value
            let dueDate = document.getElementById('dueDate').value
            let projectPriority = document.getElementById('projectPriority').value
            let projectDescription = document.getElementById('projectDescription').value
            let project = document.getElementsByTagName('h2')[0].textContent
    
            let prop = toDoCreator(title,projectPriority,dueDate,projectDescription)
            eachProject["'"+project+"'"] = prop
            console.log(eachProject)
            console.log(eachProject["'"+project+"'"])

        }
        asignTask()
        projectVisualization()
    })



        //Cancel Button Logic
        let cancelButtonTask = document.getElementById('cancelButtonTask')
        let taskInputs = document.getElementById('taskInputs')
        let buttonDivTask = document.getElementById('buttonDivTask')

        cancelButtonTask.addEventListener('click',()=> {
            taskInputs.parentNode.removeChild(taskInputs)
            buttonDivTask.parentNode.removeChild(buttonDivTask)
            plusButtonTask()
            makeTaskInputAppear()
        })
    })

}

export {makeTaskInputAppear, eachProject}
