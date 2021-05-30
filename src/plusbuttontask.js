const plusButtonTask = () => {

    if (document.getElementById('buttonTaskContainer') == null){

        let buttonTaskContainer = document.createElement('div')
        buttonTaskContainer.setAttribute('id','buttonTaskContainer')
        projectList.appendChild(buttonTaskContainer)

        let addTaskButton = document.createElement('button')
        addTaskButton.setAttribute('id','addTaskButton')
        addTaskButton.innerHTML = '+'
        buttonTaskContainer.appendChild(addTaskButton)
    }
}

export {plusButtonTask}