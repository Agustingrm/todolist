import { plusButtonProject } from "./plusbuttonproject"
import { plusButtonTask } from "./plusbuttontask"
import {taskStorage} from './makeTaskInputAppear'

const projectVisualization = () => {
    const projectList = document.getElementById('projectList')
    let title = document.getElementById('projectTitle').value

    const h2 = document.createElement('h2')
    projectList.appendChild(h2)

    for (var key in taskStorage){
        
    const ul = document.createElement('ul')
    ul.setAttribute('id','projectUL')
    projectList.appendChild(ul)

    let li = document.createElement('li')
    ul.appendChild(li)

    const projectName = document.getElementsByTagName('h2')[0].textContent

    var value = taskStorage[key]

    let listLeftP = document.createElement('p')
    listLeftP.classList.add('listLeft')
    listLeftP.innerHTML = value
    li.appendChild(listLeftP)

    let listRightP = document.createElement('p')
    listRightP.classList.add('listRight')
    listRightP.innerHTML = value['dueDate']
    li.appendChild(listRightP)

    }
    plusButtonTask()
    plusButtonProject()
    makeTaskInputAppear()
}

export {projectVisualization}