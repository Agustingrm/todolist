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

    const byNameDiv = document.createElement('div')
    byNameDiv.setAttribute('id','byNameDiv')
    leftBar.appendChild(byNameDiv)

    const byNameP = document.createElement('p')
    byNameP.setAttribute('id','projectByName')
    byNameP.innerHTML = 'Project by Name'
    byNameDiv.appendChild(byNameP)

    const projectList = document.createElement('div')
    projectList.setAttribute('id','projectList')
    mainDiv.appendChild(projectList)

    const h2Container = document.createElement('div')
    h2Container.setAttribute('id','h2Container')
    projectList.appendChild(h2Container)

    const ul = document.createElement('ul')
    ul.setAttribute('id','projectUL')
    projectList.appendChild(ul)

    return project
}

export default mainFrame
