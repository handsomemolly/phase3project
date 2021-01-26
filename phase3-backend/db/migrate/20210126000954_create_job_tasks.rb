class CreateJobTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :job_tasks do |t|
      t.boolean :is_complete, default: false
      t.text :task
      t.references :job_application, null: false, foreign_key: true

      t.timestamps
    end
  end
end
