class User < ApplicationRecord
  has_many :event_registrations
  has_many :events, through:event_registrations
end
