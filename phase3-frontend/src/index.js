
fetchJobs()

function fetchJobs() {
    fetch('http://localhost:3000/job_tasks')
    .then(resp => resp.json())
    .then(jobTasks => {jobTasks.forEach(task => listJobApps(task))
    })
}

// Left Pane
function listJobApps(task) {
    let jobUl = document.querySelector('.job-list') 
    let jobLi = document.createElement('li')
    let lineBreak = document.createElement('br')
    jobLi.id = task.job_application.id
    jobLi.textContent = `Company: ${task.job_application.company_name} on ${task.job_application.date}`

    let rightPane = document.querySelector('.rightpane')
    rightPane.innerHTML = ""

    jobUl.append(jobLi, lineBreak)
    
    jobLi.addEventListener('click', () => showJobAndTaskPanel(task))

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
    
    taskUl.append(taskLi)
    rightPane.append(taskUl)

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


}
