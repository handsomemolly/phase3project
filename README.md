# README
# Job Application Organizer
# Goal:
    The goal of our application is to log and organize current job applications and associated tasks that you're working on as you enter the software engineering job market. Applying to jobs can be a hectic time with a lot of moving pieces. With our app, you can keep track of those pieces as you work through the process of landing your first job!
# Symbols throughout the README:
    1. '' ==> What to type into the terminal (excluding the '') or what to select with your cursor (i.e. click 'save')
# Prerequisites and installation guide to get started:
    1. Please have the latest version of Ruby and an environment such as Visual Studio.
    2. Fork and clone down a copy of this repository into your local machine.
    3. Ensure that all gems have been installed and updated correctly. This will be done for you by running 'bundle install' and 'bundle update' in the terminal.
    4. Run 'rails db:migrate' once to create a database for storage.
    5. Run 'rails db:seed' to populate the database with some data to get started.
    6. Run 'rails s' afterwards to start the server and open the 'index.html' file to view the application.
# As a user of our application, you can do a few things:
    1. Log a recently submitted job application with position, salary info, job requirements, and any notes about the company.
    2. View job applications that are already logged and edit/delete them when necessary.
    3. Log and complete tasks associated with a job application as you move through the interview process.
# How to use our application:
    1. To start the application, type into the terminal 'rails s', and right click the 'index.html' file in VSCode and select 'Open in Default Browser'
    2. In your browser, you'll see 3 panels from left to right: 1) Current applications in process 2) A Form to submit a new application into your organizer 3) A task panel
    3. Upon clicking on an existing application in the left pane, full details of the job application will be visible in the middle pane.
    4. Under the details of the application, there is an option to create a task such as "phone interview scheduled," which will then appear on the right pane.
    5. As you move through the interview process, you can click the 'complete' button next to a task to check it off your list.
# Closing Notes:
    - This app was created using a Rails back end and a JavaScript/HTML/CSS front end.