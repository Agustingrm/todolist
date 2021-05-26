const plusButtonProject = () => {

    let buttonProjectContainer = document.createElement('div')
    buttonProjectContainer.setAttribute('id','buttonProjectContainer')
    leftBar.appendChild(buttonProjectContainer)

    let addProjectButton = document.createElement('button')
    addProjectButton.setAttribute('id','addProjectButton')
    addProjectButton.innerHTML = '+'
    buttonProjectContainer.appendChild(addProjectButton)
}

export {plusButtonProject}