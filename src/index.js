import mainFrame from './mainframe'
import { makeProjectInputsAppear } from './makeProjectInputsAppear'
import { makeTaskInputAppear } from './makeTaskInputAppear'
import { plusButtonTask } from './plusbuttontask'
import { plusButtonProject } from './plusbuttonproject'
import { projectVisualization } from './projectvisualization'


mainFrame()

let projects = []

function getLocalStorage(){
    if(localStorage.getItem('projects') == null){
        return
    }
    else {
        projects = JSON.parse(localStorage.getItem('projects'));
        console.log(projects)

        let cleanProjectArea = document.getElementsByClassName('projectsLeftBar')
        let clearDeleteButtons = document.getElementsByClassName('deleteButton')

        for(let i=0;i<projects.length;i++){
            let projectDiv = document.createElement('div')
            projectDiv.classList.add('projectsLeftBarDiv')
            byNameDiv.appendChild(projectDiv)

            let project = document.createElement('p')
            project.classList.add('projectsLeftBar')
            project.innerHTML = projects[i]
            projectDiv.appendChild(project)

            let deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'X'
            deleteButton.classList.add('deleteButton')
            byNameDiv.appendChild(deleteButton)

            //Delete Button in project Bar
            deleteButton.addEventListener('click',()=>{
                for (let j = (taskStorage.length-1);j>-1;j--){
                    if(taskStorage[j].project == projects[i]){
                        taskStorage.splice(j,1)
                    }
                }

                projects.splice(i,1)

                function saveInLocalStorage(){
                    localStorage.setItem('projects',JSON.stringify(projects));
                }

                saveInLocalStorage()

                cleanProjectArea[i].parentNode.removeChild(cleanProjectArea[i])
                clearDeleteButtons[i].parentNode.removeChild(clearDeleteButtons[i])


            if (document.getElementsByTagName('h2')[0].textContent != ""){
                let h2 = document.getElementsByTagName('h2')[0]
                h2.innerHTML = ''
                let buttonTaskContainer = document.getElementById('buttonTaskContainer')
                buttonTaskContainer.parentNode.removeChild(buttonTaskContainer)
                }

                let clearProjectsLeftBarDiv = document.getElementsByClassName('clearProjectsLeftBarDiv')
                
                while (cleanProjectArea[0]){
                    cleanProjectArea[0].parentNode.removeChild(cleanProjectArea[0])
                }

                while (clearDeleteButtons[0]){
                    clearDeleteButtons[0].parentNode.removeChild(clearDeleteButtons[0])
                }

                while (clearProjectsLeftBarDiv[0]){
                    clearProjectsLeftBarDiv[0].parentNode.removeChild(clearProjectsLeftBarDiv[0])
                }

                let li = document.getElementsByClassName('tasks')
                //Cleans the task of other projects
                while (li[0]){
                    li[0].parentNode.removeChild(li[0])
                }

                getLocalStorage()
            })


            project.addEventListener('click',()=>{
                let li = document.getElementsByClassName('tasks')
                //Cleans the task of other projects
                while (li[0]){
                    li[0].parentNode.removeChild(li[0])
                }
                const h2 = document.getElementsByTagName('h2')[0]
                h2.innerHTML = projects[i]
                projectVisualization()
                makeTaskInputAppear()

                if (document.getElementById('taskInputs') != null){
                    let taskInputs = document.getElementById('taskInputs')

                    taskInputs.parentNode.removeChild(taskInputs)
                }

            })
        }
    }
}

getLocalStorage()

let taskStorage = []

function getLocalStoragetaskStorage(){
    if(localStorage.getItem('taskStorage') == null){
        return
    }
    else {
        taskStorage = JSON.parse(localStorage.getItem('taskStorage'));
    }
}

getLocalStoragetaskStorage()

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