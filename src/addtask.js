import { makeTaskInputAppear } from "./makeTaskInputAppear"

const addTask = () => {
    const projectList = document.getElementById('projectList')

    //General Div
    const addInputDiv = document.createElement('div')
    addInputDiv.setAttribute('id','taskInputs')
    projectList.appendChild(addInputDiv)
    
    const taskInputs = document.getElementById('taskInputs')
    //Div 1
    const inputTaskDiv1 = document.createElement('div')
    inputTaskDiv1.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv1)

    const addInputTask = document.createElement('input')
    addInputTask.classList.add('taskInput')
    addInputTask.setAttribute('id','projectTitle')
    addInputTask.setAttribute('placeholder','Project Title')
    inputTaskDiv1.appendChild(addInputTask)

    const warningMessage1 = document.createElement('p')
    warningMessage1.classList.add('warningMessage')
    inputTaskDiv1.appendChild(warningMessage1)

    //Div 2
    const inputTaskDiv2 = document.createElement('div')
    inputTaskDiv2.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv2)

    const addInputTask2 = document.createElement('input')
    addInputTask2.classList.add('taskInput')
    addInputTask2.setAttribute('id','dueDate')
    addInputTask2.setAttribute('placeholder','Due Date')
    inputTaskDiv2.appendChild(addInputTask2)

    const warningMessage2 = document.createElement('p')
    warningMessage2.classList.add('warningMessage')
    inputTaskDiv2.appendChild(warningMessage2)

    //Div 3
    const inputTaskDiv3 = document.createElement('div')
    inputTaskDiv3.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv3)

    const addInputTask3 = document.createElement('input')
    addInputTask3.classList.add('taskInput')
    addInputTask3.setAttribute('id','projectPriority')
    addInputTask3.setAttribute('placeholder','Project Priority')
    inputTaskDiv3.appendChild(addInputTask3)

    const warningMessage3 = document.createElement('p')
    warningMessage3.classList.add('warningMessage')
    inputTaskDiv3.appendChild(warningMessage3)

    //Div 4
    const inputTaskDiv4 = document.createElement('div')
    inputTaskDiv4.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv4)

    const addInputTask4 = document.createElement('input')
    addInputTask4.classList.add('taskInput')
    addInputTask4.setAttribute('id','projectDescription')
    addInputTask4.setAttribute('placeholder','Project Description')
    inputTaskDiv4.appendChild(addInputTask4)

    const warningMessage4 = document.createElement('p')
    warningMessage4.classList.add('warningMessage')
    inputTaskDiv4.appendChild(warningMessage4)
  
    const buttonDivTask = document.createElement('div')
    buttonDivTask.setAttribute('id','buttonDivTask')
    projectList.appendChild(buttonDivTask)

    const acceptButtonTask = document.createElement('button')
    acceptButtonTask.setAttribute('id','acceptButtonTask')
    acceptButtonTask.innerHTML = 'Acept'
    buttonDivTask.appendChild(acceptButtonTask)

    const cancelButtonTask = document.createElement('button')
    cancelButtonTask.setAttribute('id','cancelButtonTask')
    cancelButtonTask.innerHTML = 'Cancel'
    buttonDivTask.appendChild(cancelButtonTask)

}

export {addTask}