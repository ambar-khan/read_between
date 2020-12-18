class Event < ApplicationRecord
  # belongs_to :user
  has_many :event_registrations
  has_many :users, through: :event_registrations
end
