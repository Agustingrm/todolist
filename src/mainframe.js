const mainFrame = () => {
    let project = []
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

    const allProjectsDiv = document.createElement('div')
    allProjectsDiv.setAttribute('id','allProjectsDiv')
    leftBar.appendChild(allProjectsDiv)

    const allProjectsP = document.createElement('p')
    allProjectsP.innerHTML = 'All Projects'
    allProjectsDiv.appendChild(allProjectsP)

    const byNameDiv = document.createElement('div')
    byNameDiv.setAttribute('id','byNameDiv')
    leftBar.appendChild(byNameDiv)

    const byNameP = document.createElement('p')
    byNameP.innerHTML = 'Project by Name'
    byNameDiv.appendChild(byNameP)

    const projectList = document.createElement('div')
    projectList.setAttribute('id','projectList')
    mainDiv.appendChild(projectList)

    return project
}

export default mainFrame
