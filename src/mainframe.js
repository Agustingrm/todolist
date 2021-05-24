const mainFrame = () => {
    const content = document.getElementById('content')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'To Do List'
    content.appendChild(h1)

    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id','main')
    content.appendChild(mainDiv)

    const leftBar = document.createElement('div')
    leftBar.setAttribute('id','leftBar')
    mainDiv.appendChild(leftBar);

    const allProjectsP = document.createElement('p')
    allProjectsP.innerHTML = 'All Projects'
    leftBar.appendChild(allProjectsP)

    const byNameP = document.createElement('p')
    byNameP.innerHTML = 'Project by Name'
    leftBar.appendChild(byNameP)

    const projectList = document.createElement('div')
    projectList.setAttribute('id','projectList')
    mainDiv.appendChild(projectList)

    let buttonProjectContainer = document.createElement('div')
    buttonProjectContainer.setAttribute('id','buttonProjectContainer')
    leftBar.appendChild(buttonProjectContainer)

    let addProjectButton = document.createElement('button')
    addProjectButton.setAttribute('id','addProjectButton')
    addProjectButton.innerHTML = '+'
    buttonProjectContainer.appendChild(addProjectButton)
}

export default mainFrame
