import { addTask } from './addtask'
import { plusButtonTask } from './plusbuttontask'
import {taskStorage} from './index'
import { projectVisualization } from './projectvisualization'

const makeTaskInputAppear = () => {
    
    let buttonTaskContainer = document.getElementById('buttonTaskContainer')
    let addTaskButton = document.getElementById('addTaskButton')
    let prop = ''
    
        addTaskButton.addEventListener('click',()=> {
        buttonTaskContainer.parentNode.removeChild(buttonTaskContainer)
        addTask()
        
        //Acept Button Logic
        const acceptButtonTask = document.getElementById('acceptButtonTask')

        acceptButtonTask.addEventListener('click',()=>{
        const toDoCreator = (title,dueDate,priority,description,project) => {
            return {title,description,dueDate,priority,project}
        }

        const asignTask = () => {
            let title = document.getElementById('projectTitle').value
            let dueDate = document.getElementById('dueDate').value
            let projectPriority = document.getElementById('projectPriority').value
            let projectDescription = document.getElementById('projectDescription').value
            let projectName = document.getElementsByTagName('h2')[0].textContent
    
            prop = toDoCreator(title,projectPriority,dueDate,projectDescription,projectName)
            taskStorage.push(prop)
            console.log(taskStorage)
            return prop
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
return taskStorage
}

export {makeTaskInputAppear, taskStorage}
