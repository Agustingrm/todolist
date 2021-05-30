import { plusButtonProject } from "./plusbuttonproject"
import { plusButtonTask } from "./plusbuttontask"
import {taskStorage} from './makeTaskInputAppear'

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

            let row1Div = document.createElement('Div')
            row1Div.classList.add('row1Div')
            li.appendChild(row1Div)

            let listLeftP = document.createElement('p')
            listLeftP.classList.add('listLeft')
            listLeftP.innerHTML = taskStorage[i]['title']
            row1Div.appendChild(listLeftP)

            let listRightP = document.createElement('p')
            listRightP.classList.add('deleteButtonTasks')
            listRightP.innerHTML = 'Delete Task'
            row1Div.appendChild(listRightP)


            let row2Div = document.createElement('Div')
            row2Div.classList.add('row2Div')
            li.appendChild(row2Div)

            let listLeftPRow2 = document.createElement('p')
            listLeftPRow2.classList.add('listLeftPRow2')
            listLeftPRow2.innerHTML = taskStorage[i]['priority']
            row2Div.appendChild(listLeftPRow2)

            let listRightPRow2 = document.createElement('p')
            listRightPRow2.classList.add('listRightPRow2')
            listRightPRow2.innerHTML = taskStorage[i]['dueDate']
            row2Div.appendChild(listRightPRow2)

            let row3Div = document.createElement('Div')
            row3Div.classList.add('row3Div')
            li.appendChild(row3Div)
            
            let listLeftPRow3 = document.createElement('p')
            listLeftPRow3.classList.add('listLeftPRow3')
            listLeftPRow3.innerHTML = taskStorage[i]['description']
            row3Div.appendChild(listLeftPRow3)

            listRightP.addEventListener('click',()=>{
                taskStorage.splice(i,1)
                projectVisualization()
            })

            }
        }
        
        let buttonTask = document.getElementById('addProjectButton')
        plusButtonTask()
        if (buttonTask == false){
        plusButtonProject()
        }

}

export {projectVisualization, taskStorage}