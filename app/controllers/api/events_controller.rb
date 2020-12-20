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

  def create
    @event = Event.new(
    name: params[:name],
    date: params[:date], 
    time: params[:time],
    meeting_link: params[:meeting_link]
    )
    @event.save
    render 'show.json.jb'
  end

end
