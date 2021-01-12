class Api::EventRegistrationsController < ApplicationController

  def create
    @event_registration = EventRegistration.new(
      user_id: current_user.id,
      event_id: params[:event_id],
    )
    @event_registration.save
    render 'show.json.jb'
  end

end
