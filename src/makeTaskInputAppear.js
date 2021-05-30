import { addTask } from './addtask'
import { plusButtonTask } from './plusbuttontask'
import {taskStorage} from './index'
import { projectVisualization } from './projectvisualization'

const makeTaskInputAppear = () => {
    
    let buttonTaskContainer = document.getElementById('buttonTaskContainer')
    let addTaskButton = document.getElementById('addTaskButton')
    let prop = ''
    
        addTaskButton.addEventListener('click',()=> {
            if (document.getElementById('buttonTaskContainer') != null){
            buttonTaskContainer.parentNode.removeChild(buttonTaskContainer)
            }
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
                return prop
            }
            let warningMessage1 = document.createElement('p')
                warningMessage1.classList.add('warningMessage')
                warningMessage1.setAttribute('id','warningMessage1')
                let inputTaskDiv1 = document.getElementsByClassName('taskInputDiv')[0]
                inputTaskDiv1.appendChild(warningMessage1)
            let warningMessage2 = document.createElement('p')
                warningMessage2.classList.add('warningMessage')
                warningMessage2.setAttribute('id','warningMessage2')
                let inputTaskDiv2 = document.getElementsByClassName('taskInputDiv')[1]
                inputTaskDiv2.appendChild(warningMessage2)
            let warningMessage3 = document.createElement('p')
                warningMessage3.classList.add('warningMessage')
                warningMessage3.setAttribute('id','warningMessage3')
                let inputTaskDiv3 = document.getElementsByClassName('taskInputDiv')[2]
                inputTaskDiv3.appendChild(warningMessage3)

            let wm1 = document.getElementById('warningMessage1')
            let wm2 = document.getElementById('warningMessage2')
            let wm3 = document.getElementById('warningMessage3')

            if (document.getElementById('projectTitle').value == ""){
                wm1.innerHTML = "You cant leave the title empty"
                return
            }
            else if (document.getElementById('dueDate').value == ""){
                console.log(wm1.innerHTML)
                if (wm1.textContent == "You cant leave the title empty"){
                    console.log('aa')
                    wm1.parentNode.removeChild(wm1)
                }
                wm2.innerHTML = "You cant leave the Date empty"
                return
            }

            else if (document.getElementById('projectDescription').value == ""){
                if (wm1.textContent == "You cant leave the title empty"){
                    wm1.parentNode.removeChild(wm1)
                }
                if (wm2.textContent = "You cant leave the Date empty"){
                    wm2.parentNode.removeChild(wm2)
                }
                
                wm3.innerHTML = "You cant leave the Description empty"
                return
            }
            else {
                asignTask()
                projectVisualization()
                
                let taskInputs = document.getElementById('taskInputs')
                let buttonDivTask = document.getElementById('buttonDivTask')
                
                taskInputs.parentNode.removeChild(taskInputs)
                buttonDivTask.parentNode.removeChild(buttonDivTask)

                makeTaskInputAppear()
            }
        })

        //Cancel Button Logic
        let cancelButtonTask = document.getElementById('cancelButtonTask')
        let taskInputs = document.getElementById('taskInputs')
        let buttonDivTask = document.getElementById('buttonDivTask')

        cancelButtonTask.addEventListener('click',()=> {
            if (document.getElementById('taskInputs') != null){
                taskInputs.parentNode.removeChild(taskInputs)
            }
            buttonDivTask.parentNode.removeChild(buttonDivTask)
            plusButtonTask()
            makeTaskInputAppear()
        })
    })
return taskStorage
}

export {makeTaskInputAppear, taskStorage}
