class User < ApplicationRecord
    has_many :job_applications, :dependent => :destroy

end
