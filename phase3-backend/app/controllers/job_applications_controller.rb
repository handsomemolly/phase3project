class JobApplicationsController < ApplicationController
    def index
        job_applications = JobApplication.all 
        render json: job_applications
    end
end
