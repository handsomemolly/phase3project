class JobTasksController < ApplicationController
    def index
        job_tasks = JobTask.all 
        render json: job_tasks
    end

    def show 
        job_task = JobTask.find_by(id: params[:id])
        render json: job_task 
    end 

    def create
        job_task = JobTask.create(job_task_params)
        render json: job_task
    end

    def update
        job_task = JobTask.find_by(id: params[:id])
        job_task.update(is_complete: params[:is_complete], task: job_task.task, job_application_id: job_task.job_application_id)
        render json: { job_task_id: job_task.id, task: job_task.task }
    end

    private 
    
    def job_task_params
        params.require(:job_task).permit(:is_complete, :task, :job_application_id)
    end

end
