class JobTasksController < ApplicationController
    def index
        job_tasks = JobTask.all 
        render json: job_tasks
    end

    def show 
        job_task = JobTask.find_by(id: params[:id])
        render json: { is_complete: job_task.is_complete, task: job_task.task, job_application_id: job_task.job_application_id } 
    end 

    def destroy 
        job_task = JobTask.find_by(id: params[:id])
        render json: { is_complete: job_task.is_complete, task: job_task.task, job_application_id: job_task.job_application_id } 
    end 

end
