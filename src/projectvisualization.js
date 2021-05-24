const projectVisualization = () => {
    const projectList = document.getElementById('projectList')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'Cocinar'
    projectList.appendChild(h2)

    const ul = document.createElement('ul')
    ul.setAttribute('id','projectUL')
    projectList.appendChild(ul)

    let li = document.createElement('li')
    ul.appendChild(li)

    let listLeftP = document.createElement('p')
    listLeftP.classList.add('listLeft')
    listLeftP.innerHTML = 'Eat'
    li.appendChild(listLeftP)

    let listRightP = document.createElement('p')
    listRightP.classList.add('listRight')
    listRightP.innerHTML = '22/02/03'
    li.appendChild(listRightP)

    let buttonTaskContainer = document.createElement('div')
    buttonTaskContainer.setAttribute('id','buttonTaskContainer')
    projectList.appendChild(buttonTaskContainer)

    let addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('id','addTaskButton')
    addTaskButton.innerHTML = '+'
    buttonTaskContainer.appendChild(addTaskButton)
}

export {projectVisualization}