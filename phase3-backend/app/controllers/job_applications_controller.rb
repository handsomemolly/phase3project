class JobApplicationsController < ApplicationController
    def index
        job_applications = JobApplication.all 
        render json: job_applications
    end

    def show 
        job_application = JobApplication.find_by(id: params[:id])
        render json: { id: job_application.id, date: job_application.date, job_title: job_application.job_title, status: job_application.status, salary: job_application.salary, requirements: job_application.requirements, company_notes: job_application.company_notes, user_id: job_application.user_id, company_name: job_application.company_name }
    end 

    def destroy 
        job_application = JobApplication.find_by(id: params[:id])
        job_application.destroy
        render json: { message: 'job applicated removed'}
    
    end 
end
