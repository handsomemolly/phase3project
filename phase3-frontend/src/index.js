
// Auto functions 
fetchJobs()
newJobApp()

// Global variables
let jobDiv = document.createElement('div-job')
jobDiv.className = "job-div"


function fetchJobs() {
    fetch('http://localhost:3000/job_applications')
    .then(resp => resp.json())
    .then(jobApp => {jobApp.forEach(job => listJobApps(job))
    })
}

function deleteApp(job){
    fetch(`http://localhost:3000/job_applications/${job.id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        let jobApp = document.getElementById(`job-app-${job.id}`)
        jobApp.remove()
    })
}

function completeTask(task) {
    task.is_complete = true
    fetch(`http://localhost:3000/job_tasks/${task.id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({is_complete: task.is_complete})
    })
    .then(res => res.json())
    .then(task => {
        let li = document.getElementById(`${task.job_task_id}`)
        li.textContent = `${task.task} done`
    })
}

// Left Pane 
function listJobApps(job) {
    let jobUl = document.querySelector('.job-list') 
    let jobLi = document.createElement('li')
    jobLi.id = `job-app-${job.id}`

    let lineBreak = document.createElement('br')

    let deleteBtn = document.createElement('button')

    jobLi.textContent = `Company: ${job.company_name} on ${job.date}`
    deleteBtn.textContent = 'x'

    jobLi.appendChild(deleteBtn)
    jobUl.append(jobLi,lineBreak)
    
    jobLi.addEventListener('click', () => showJobAndTaskPanel(job))
    deleteBtn.addEventListener('click', () => deleteApp(job))
}

function newJobApp() {
    let showJob = true
    let newJobBtn = document.getElementById('new-job-button')
    let formContainer = document.querySelector('.form-container')
    newJobBtn.addEventListener('click', () => { 
        if (showJob ==! true) {
            jobDiv.innerHTML = ""
            formContainer.style.display = 'block'
            showJob = true

        } else {
            formContainer.style.display = 'none'
            showJob = false
        }
    })
}

// Middle and Right Panes
function showJobAndTaskPanel(job) {

// Right Pane Render BEGIN
    let rightPane = document.querySelector('.rightpane')
    rightPane.innerHTML = ""
    
    let taskUl = document.createElement('ul')
    taskUl.className = "tasks-list"
    job.job_tasks.forEach(task => {
        let taskLi = document.createElement('li')
        taskLi.id = task.id 
        taskLi.textContent = task.task
        taskUl.append(taskLi)

        if (task.is_complete == true) {
            taskLi.textContent = `${task.task} done`
        } else {
            let completeBtn = document.createElement('button')
            completeBtn.textContent = 'complete'
            taskLi.append(completeBtn)
            completeBtn.addEventListener('click', () => completeTask(task))
        }

    })

    rightPane.append(taskUl)

// Right Pane Render END


// Middle Pane Render BEGIN
    let jobForm = document.querySelector('.form-container')
    jobForm.style.display = "none"

    jobDiv.innerHTML = ""
    let showPanel = document.querySelector('.middlepane')
   
    let companyName = document.createElement('h2')
    companyName.textContent = `Applied To: ${job.company_name} on ${job.date}`

    let status = document.createElement('h3')
    status.textContent = `Current Status: ${job.status}.`

    let position = document.createElement('h3') 
    position.textContent = `Job Position: ${job.job_title}` 

    let salary = document.createElement('h4')
    salary.textContent = `Annual Salary: $${job.salary}.`

    let requirements= document.createElement('p')
    requirements.textContent = `Requirements: ${job.requirements}`

    let companyNotes = document.createElement('p')
    companyNotes.textContent = `Notes: ${job.company_notes}`

    let jobTaskBtn = document.createElement('button')
    jobTaskBtn.className = "create-task-button"
    jobTaskBtn.textContent = "Create Task"
    //have to create submit new task function for jobTaskBtn

    jobDiv.append(companyName, status, position, salary, requirements, companyNotes, jobTaskBtn)

    // Must fill out backend actions for create and edit in API model controllers before doing frontend methods for it

    showPanel.append(jobDiv)
}



