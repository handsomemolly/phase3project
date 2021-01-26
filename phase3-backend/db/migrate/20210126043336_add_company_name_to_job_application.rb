class AddCompanyNameToJobApplication < ActiveRecord::Migration[6.1]
  def change
    add_column :job_applications, :company_name, :string
  end
end
