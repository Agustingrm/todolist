const addProject = () => {
    const byNameDiv = document.getElementById('byNameDiv')

    const addInputProjectDiv = document.createElement('div')
    addInputProjectDiv.setAttribute('id','projectInputDiv')
    byNameDiv.appendChild(addInputProjectDiv)

    const addInputProject = document.createElement('input')
    addInputProject.setAttribute('id','projectInput')
    addInputProjectDiv.appendChild(addInputProject)

    const buttonDivProject = document.createElement('div')
    buttonDivProject.setAttribute('id','buttonDivProject')
    byNameDiv.appendChild(buttonDivProject)


    const acceptButtonProject = document.createElement('button')
    acceptButtonProject.setAttribute('id','acceptButtonProject')
    acceptButtonProject.innerHTML = 'Acept'
    buttonDivProject.appendChild(acceptButtonProject)

    const cancelButtonProject = document.createElement('button')
    cancelButtonProject.setAttribute('id','cancelButtonProject')
    cancelButtonProject.innerHTML = 'Cancel'
    buttonDivProject.appendChild(cancelButtonProject)
}

export {addProject}