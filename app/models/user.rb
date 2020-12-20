class User < ApplicationRecord
  has_many :event_registrations
  has_many :events, through: :event_registrations
  has_secure_password
  validates :email, presence: true, uniqueness: true
end
