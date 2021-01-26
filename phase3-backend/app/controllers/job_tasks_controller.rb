class JobTasksController < ApplicationController
    def index
        job_tasks = JobTask.all 
        render json: job_tasks
    end
end
