class JobTaskSerializer < ActiveModel::Serializer
  attributes :id, :is_complete, :task
  has_one :job_application
end
