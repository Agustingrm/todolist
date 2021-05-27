import {projects} from './index'
import { addProject } from './addproject'
import { plusButtonProject } from './plusbuttonproject'
import { plusButtonTask } from './plusbuttontask'
import { makeTaskInputAppear } from './makeTaskInputAppear'


const makeProjectInputsAppear = () => {
    
    let buttonProjectContainer = document.getElementById('buttonProjectContainer')
    let addProjectButton = document.getElementById('addProjectButton')

        addProjectButton.addEventListener('click',()=> {
        buttonProjectContainer.parentNode.removeChild(buttonProjectContainer)
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
                projectInput.parentNode.removeChild(projectInput)
                buttonDivProject.parentNode.removeChild(buttonDivProject)
                warningMessage.parentNode.removeChild(warningMessage)
                projects.push(projectInput.value)
                plusButtonProject()        
                makeProjectInputsAppear()

                const cleanProjectArea = document.getElementsByClassName('projectsLeftBar')
                
                while (cleanProjectArea[0]){
                    cleanProjectArea[0].parentNode.removeChild(cleanProjectArea[0])
                }

                for(let i=0;i<projects.length;i++){
                    let project = document.createElement('p')
                    project.classList.add('projectsLeftBar')
                    project.innerHTML = projects[i]
                    byNameDiv.appendChild(project)

                    project.addEventListener('click',()=>{
                        const h2 = document.getElementsByTagName('h2')[0]
                        h2.innerHTML = projects[i]
                        plusButtonTask()
                        makeTaskInputAppear()
                    })
                }

            }
        })

        //Cancel Button in Project Work
        let cancelButtonProject = document.getElementById('cancelButtonProject')
        let buttonDivProject = document.getElementById('buttonDivProject')

        cancelButtonProject.addEventListener('click',()=> {
            projectInput.parentNode.removeChild(projectInput)
            buttonDivProject.parentNode.removeChild(buttonDivProject)
            plusButtonProject()        
            makeProjectInputsAppear()
        })
    })
}

export {makeProjectInputsAppear}
