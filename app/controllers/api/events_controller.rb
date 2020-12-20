class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render "index.json.jb"
  end

  def show
    the_id = params[:id]
    @event = Event.find_by(id: the_id)
    render 'show.json.jb'
  end

end
