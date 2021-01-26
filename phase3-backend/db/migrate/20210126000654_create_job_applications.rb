class CreateJobApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :job_applications do |t|
      t.string :date
      t.string :job_title
      t.string :company_name
      t.string :status
      t.integer :salary
      t.text :requirements
      t.text :company_notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
