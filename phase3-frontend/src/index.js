
// Auto functions 
fetchJobs()
newJobApp()

// Global variables
let jobDiv = document.createElement('div-job')
jobDiv.className = "job-div"
jobDiv.style = "text-align:center"


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

function postJobApp(jobApplication) {
    fetch('http://localhost:3000/job_applications', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jobApplication)
    })
    .then(resp => resp.json())
    // function beneath works as intended. Figure out how to save to database
    .then(jobApp => listJobApps(jobApp))
}

function postTask(task) {
    fetch(`http://localhost:3000/job_tasks`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(console.log)
    //.then(task => renderNewTasks(task))
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

    let form = formContainer.querySelector('.add-new-job-form')
    form.addEventListener('submit', handleSubmit)
    
}

function handleSubmit(e) {
    e.preventDefault() 
    let jobApplication = {
        date: e.target.date.value,
        job_title: e.target.position.value,
        status: e.target.status.value,
        salary: e.target.salary.value,
        requirements: e.target.requirement.value,
        company_notes: e.target.note.value,
        company_name: e.target.company_name.value,
        user_id: 13
        // VERY IMPORTANT! ONCE APP IS COMPLETE, RE-SEED DATA AND CHANGE THE USER_ID ON LINE 122 TO AN EXISTING ONE
    }

    postJobApp(jobApplication)
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

    //have to create submit new task function for jobTaskBtn

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

    // Create Task Form

    let taskFormDiv = document.createElement('div') 
    taskFormDiv.style = "text-align:center"
    let taskForm = document.createElement('form') 
    taskForm.className = "add-new-task-form"
    
    let taskTitle = document.createElement('h4')
    taskTitle.textContent = "Create New Task"

    let taskInput = document.createElement('input')
    taskInput.className = "task-input"
    taskInput.type = "text"
    taskInput.name = "task"
    taskInput.placeholder = "Add a task..."

    let taskSubmitBtn = document.createElement('button')
    taskSubmitBtn.className = "create-task-button"
    taskSubmitBtn.type = "submit"
    taskSubmitBtn.textContent = "Create Task"

    taskForm.append(taskTitle, taskInput, taskSubmitBtn)

    taskFormDiv.append(taskForm)

    let jobAppId = job.id 
    taskForm.addEventListener('submit', (e) => {
        handleTask(e, jobAppId)
    })
    
    jobDiv.append(companyName, status, position, salary, requirements, companyNotes, taskFormDiv)

    showPanel.append(jobDiv)
}

function handleTask(e, jobAppId) {
    e.preventDefault()
    let task = {
        is_complete: false,
        task: e.target.task.value,
        job_application_id: jobAppId
    }
    postTask(task)
}



