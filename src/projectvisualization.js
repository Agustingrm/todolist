import { plusButtonProject } from "./plusbuttonproject"
import { plusButtonTask } from "./plusbuttontask"
import {eachProject} from './makeTaskInputAppear'

const projectVisualization = () => {
    const projectList = document.getElementById('projectList')

    const h2 = document.createElement('h2')
    projectList.appendChild(h2)

    for (var key in eachProject){
        
    const ul = document.createElement('ul')
    ul.setAttribute('id','projectUL')
    projectList.appendChild(ul)

    let li = document.createElement('li')
    ul.appendChild(li)

    var value = eachProject[key]

    console.log(value)

    let listLeftP = document.createElement('p')
    listLeftP.classList.add('listLeft')
    listLeftP.innerHTML = value['title']
    li.appendChild(listLeftP)

    let listRightP = document.createElement('p')
    listRightP.classList.add('listRight')
    listRightP.innerHTML = value['dueDate']
    li.appendChild(listRightP)

    }
    plusButtonTask()
    plusButtonProject()
}

export {projectVisualization}