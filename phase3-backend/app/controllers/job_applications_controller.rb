class JobApplicationsController < ApplicationController
    def index
        job_applications = JobApplication.all 
        render json: job_applications
    end

    def show 
        job_application = JobApplication.find_by(id: params[:id])
        render json: job_application 
    end 

    def destroy 
        job_application = JobApplication.find_by(id: params[:id])
        job_application.destroy
        render json: { message: 'job applicated removed'}
    
    end 
end
