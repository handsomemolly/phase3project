class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :date, :job_title, :status, :salary, :requirements, :company_notes, :company_name
  has_one :user
end
