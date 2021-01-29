# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

JobTask.delete_all
JobApplication.delete_all
User.delete_all

user1 = User.create(name: 'Ryan Kendig', email: 'ryan.kendig@gmail.com')


job_app1 = JobApplication.create(date: '01/20/2021', job_title: 'Software Engineer', status: 'In Review', salary: 100000, requirements: '2 years JS experience', company_notes: 'the microsoft of the midwest', user_id: user1.id, company_name: 'Oracle')
job_app2 = JobApplication.create(date: '04/10/2021', job_title: 'Software Engineer', status: 'Accepted', salary: 110000, requirements: '2 years ruby on rails', company_notes: 'really want to get in', user_id: user1.id, company_name: 'Adobe')
job_app3 = JobApplication.create(date: '05/19/2021', job_title: 'Software Engineer', status: 'Just Applied', salary: 120000, requirements: '3 years JS experience', company_notes: 'great culture', user_id: user1.id, company_name: 'Google')
job_app4 = JobApplication.create(date: '12/10/2020', job_title: 'Software Engineer', status: 'In Review', salary: 140000, requirements: 'no experience', company_notes: 'what a delightful CEO', user_id: user1.id, company_name: 'Robinhood')


job_task1 = JobTask.create(is_complete: false, task: 'phone screen', job_application_id: job_app1.id)
job_task2 = JobTask.create(is_complete: false, task: 'wait for reply', job_application_id: job_app2.id)
job_task3 = JobTask.create(is_complete: false, task: 'interview on tuesday', job_application_id: job_app1.id)
