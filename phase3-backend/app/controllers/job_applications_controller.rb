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

    # def update
    #     job_application = JobApplication.find_by(id: params[:id])
    #     job_application.update(is_complete: params[:is_complete], task: job_task.task, job_application_id: job_task.job_application_id)
    #     render json: { job_task_id: job_task.id, task: job_task.task }
    # end

     

    def create
        job_application = JobApplication.create(job_params)
        render json: job_application
       
    end 

    private 

    def job_params 
        params.require(:job_application).permit(:date, :job_title, :status, :salary, :requirements, :company_notes, :company_name, :user_id)
    end

end
