import { plusButtonProject } from "./plusbuttonproject"
import { plusButtonTask } from "./plusbuttontask"
import {taskStorage} from './makeTaskInputAppear'
import { makeProjectInputsAppear } from "./makeProjectInputsAppear"

const projectVisualization = () => {
    let h2Content = document.getElementsByTagName('h2')[0].textContent
    let li = document.getElementsByClassName('tasks')
    let ul = document.getElementsByTagName('ul')[0]

    while (li[0]){
        li[0].parentNode.removeChild(li[0])
    }

    for (let i=0;i<taskStorage.length;i++){

        if (taskStorage[i][`project`] == h2Content){

            let li = document.createElement('li')
            li.classList.add('tasks')
            ul.appendChild(li)

            let listLeftP = document.createElement('p')
            listLeftP.classList.add('listLeft')
            listLeftP.innerHTML = taskStorage[i]['title']
            li.appendChild(listLeftP)

            let listRightP = document.createElement('p')
            listRightP.classList.add('listRight')
            listRightP.innerHTML = taskStorage[i]['dueDate']
            li.appendChild(listRightP)

            }
        }
        
        let buttonTask = document.getElementById('addProjectButton')
        plusButtonTask()
        if (buttonTask == false){
        plusButtonProject()
        }
    // makeProjectInputsAppear()
}

export {projectVisualization}