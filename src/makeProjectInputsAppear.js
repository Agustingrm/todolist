import {projects } from './index'
import { addProject } from './addproject'
import { plusButtonProject } from './plusbuttonproject'
import { makeTaskInputAppear, taskStorage } from './makeTaskInputAppear'
import { projectVisualization } from './projectvisualization'


const makeProjectInputsAppear = () => {
    
    let buttonProjectContainer = document.getElementById('buttonProjectContainer')

    let addProjectButton = document.getElementById('addProjectButton')

        addProjectButton.addEventListener('click',()=> {
        if (buttonProjectContainer){
            buttonProjectContainer.parentNode.removeChild(buttonProjectContainer)
        }
        addProject()

        //Acept Button in Project Work

        let acceptButtonProject = document.getElementById('acceptButtonProject')
        let projectInput = document.getElementById('projectInput')
        let byNameDiv = document.getElementById('byNameDiv')

        let projectInputDiv = document.getElementById('projectInputDiv')
        let warningMessage = document.createElement('p')
        warningMessage.classList.add('warningMessage')
        projectInputDiv.appendChild(warningMessage)

        acceptButtonProject.addEventListener('click',() => {

            if (projectInput.value == ''){
                warningMessage.innerHTML = 'You cant leave this field empty'
                return
            }
            else if (projects.findIndex((element) => element == projectInput.value) != -1){
                warningMessage.innerHTML = 'You already have a project with that name'
                return 
            }
            else {
                projectInputDiv.parentNode.removeChild(projectInputDiv)
                projectInput.parentNode.removeChild(projectInput)
                buttonDivProject.parentNode.removeChild(buttonDivProject)
                warningMessage.parentNode.removeChild(warningMessage)

                projects.push(projectInput.value)
                plusButtonProject()        
                makeProjectInputsAppear()

                let cleanProjectArea = document.getElementsByClassName('projectsLeftBar')
                let clearDeleteButtons = document.getElementsByClassName('deleteButton')
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

                projects = projects.sort(function (a, b) {
                    if (a < b) {
                        return -1;
                    }
                    if (b < a) {
                        return 1;
                    }
                    return 0;
                });

                let createProjects = () => {

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

                        deleteButton.addEventListener('click',()=>{
                            for (let j = (taskStorage.length-1);j>-1;j--){
                                if(taskStorage[j].project == projects[i]){
                                    taskStorage.splice(j,1)
                                }
                            }

                            projects.splice(i,1)

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

                            createProjects()
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
                createProjects()
            }
        })

        //Cancel Button in Project Work
        let cancelButtonProject = document.getElementById('cancelButtonProject')
        let buttonDivProject = document.getElementById('buttonDivProject')

        cancelButtonProject.addEventListener('click',()=> {
            projectInputDiv.parentNode.removeChild(projectInputDiv)
            projectInput.parentNode.removeChild(projectInput)
            buttonDivProject.parentNode.removeChild(buttonDivProject)
            warningMessage.parentNode.removeChild(warningMessage)
            plusButtonProject()        
            makeProjectInputsAppear()
        })
    })
}

export {makeProjectInputsAppear}
