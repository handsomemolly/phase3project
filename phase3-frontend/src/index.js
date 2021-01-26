
fetchJobs()

function fetchJobs() {
    fetch('http://localhost:3000/job_tasks')
    .then(resp => resp.json())
    .then(jobTasks => {jobTasks.forEach(task => listJobApps(task))
    })
}

function deleteApp(job_application){
    fetch(`http://localhost:3000/job_applications/${job_application.id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        let jobApp = document.getElementById(job_application.id)
        jobApp.remove()
    })
}

function completeTask(task) {
    task.is_complete = true
    // debugger
    fetch(`http://localhost:3000/job_tasks/${task.id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({is_complete: task.is_complete})
    })
    .then(res => res.json())
    .then(task => {
        // let oldTask = document.querySelector(`.tasks-list`)
        // debugger
        let li = document.getElementById(`${task.job_task_id}`)
        // debugger
        li.textContent = `${task.task} done`
    })
}

// Left Pane 
function listJobApps(task) {
    let jobUl = document.querySelector('.job-list') 
    let jobLi = document.createElement('li')
    let lineBreak = document.createElement('br')
    let deleteBtn = document.createElement('button')
    // jobLi.id = task.job_application.id
    jobLi.textContent = `Company: ${task.job_application.company_name} on ${task.job_application.date}`
    deleteBtn.textContent = 'x'

    let rightPane = document.querySelector('.rightpane')
    rightPane.innerHTML = ""

    jobLi.appendChild(deleteBtn)
    jobUl.append(jobLi,lineBreak)

    // create the delete button for job apps
    // create new job app button at the top
    
    jobLi.addEventListener('click', () => showJobAndTaskPanel(task))
    deleteBtn.addEventListener('click', () => deleteApp(task.job_application))

}

// Middle and Right Panes
function showJobAndTaskPanel(task) {

// Right Pane Render BEGIN
    let rightPane = document.querySelector('.rightpane')
    rightPane.innerHTML = ""
    
    let taskUl = document.createElement('ul')
    taskUl.className = "tasks-list"
    let taskLi = document.createElement('li')
    taskLi.id = task.id 
    taskLi.textContent = task.task
    let completeBtn = document.createElement('button')
    completeBtn.textContent = 'complete'


    taskLi.append(completeBtn)
    taskUl.append(taskLi)
    rightPane.append(taskUl)

    completeBtn.addEventListener('click', () => completeTask(task))

 // make 'complete task' button, and indicate (line through or change task color)   

// Right Pane Render END

// Middle Pane Render BEGIN

    let showPanel = document.querySelector('.middlepane')
    showPanel.innerHTML = ""
    
    let companyName = document.createElement('h2')
    companyName.textContent = `Applied To: ${task.job_application.company_name} on ${task.job_application.date}`

    let status = document.createElement('h3')
    status.textContent = `Current Status: ${task.job_application.status}.`

    let position = document.createElement('h3') 
    position.textContent = `Job Position: ${task.job_application.job_title}` 

    let salary = document.createElement('h4')
    salary.textContent = `Annual Salary: $${task.job_application.salary}.`

    let requirements= document.createElement('p')
    requirements.textContent = `Requirements: ${task.job_application.requirements}`

    let companyNotes = document.createElement('p')
    companyNotes.textContent = `Notes: ${task.job_application.company_notes}`

    let jobTaskBtn = document.createElement('button')
    jobTaskBtn.className = "create-task-button"
    jobTaskBtn.textContent = "Create Task"
    //have to create submit new task function for jobTaskBtn

    showPanel.append(companyName, status, position, salary, requirements, companyNotes, jobTaskBtn)

    //HAVE TO GIT PUSH TO MAIN NOT MASTER
    // Must fill out backend actions for create and edit in API model controllers before doing frontend methods for it

}
