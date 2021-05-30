const addTask = () => {
    const projectList = document.getElementById('projectList')

    if (document.getElementById('taskInputs') == null){
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
    addInputTask.setAttribute('type','text')
    addInputTask.setAttribute('placeholder','Project Title')
    inputTaskDiv1.appendChild(addInputTask)

    //Div 2
    const inputTaskDiv2 = document.createElement('div')
    inputTaskDiv2.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv2)

    const addInputTask2 = document.createElement('input')
    addInputTask2.classList.add('taskInput')
    addInputTask2.setAttribute('id','dueDate')
    addInputTask2.setAttribute('type','date')
    addInputTask2.setAttribute('placeholder','Due Date')
    inputTaskDiv2.appendChild(addInputTask2)

    //Div 3
    const inputTaskDiv3 = document.createElement('div')
    inputTaskDiv3.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv3)

    const addInputTask3 = document.createElement('select')
    addInputTask3.setAttribute('id','projectPriority')
    inputTaskDiv3.appendChild(addInputTask3)

    const priorityOption1 = document.createElement('option')
    priorityOption1.setAttribute('value','High Priority')
    priorityOption1.innerHTML = 'High Priority'
    addInputTask3.appendChild(priorityOption1)

    const priorityOption2 = document.createElement('option')
    priorityOption2.setAttribute('value','Medium Priority')
    priorityOption2.innerHTML = 'Medium Priority'
    addInputTask3.appendChild(priorityOption2)

    const priorityOption3 = document.createElement('option')
    priorityOption3.setAttribute('value','Low Priority')
    priorityOption3.innerHTML = 'Low Priority'
    addInputTask3.appendChild(priorityOption3)

    //Div 4
    const inputTaskDiv4 = document.createElement('div')
    inputTaskDiv4.classList.add('taskInputDiv')
    taskInputs.appendChild(inputTaskDiv4)

    const addInputTask4 = document.createElement('input')
    addInputTask4.classList.add('taskInput')
    addInputTask4.setAttribute('id','projectDescription')
    addInputTask4.setAttribute('type','text')
    addInputTask4.setAttribute('placeholder','Project Description')
    inputTaskDiv4.appendChild(addInputTask4)

    const buttonDivTask = document.createElement('div')
    buttonDivTask.setAttribute('id','buttonDivTask')
    taskInputs.appendChild(buttonDivTask)

    const acceptButtonTask = document.createElement('button')
    acceptButtonTask.setAttribute('id','acceptButtonTask')
    acceptButtonTask.innerHTML = 'Acept'
    buttonDivTask.appendChild(acceptButtonTask)

    const cancelButtonTask = document.createElement('button')
    cancelButtonTask.setAttribute('id','cancelButtonTask')
    cancelButtonTask.innerHTML = 'Cancel'
    buttonDivTask.appendChild(cancelButtonTask)
    }

}

export {addTask}