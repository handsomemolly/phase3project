class JobApplication < ApplicationRecord
  belongs_to :user
  has_many :job_tasks, dependent: :destroy
end
