class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render "index.json.jb"

  end

  def show
    @event = Event.find_by(id: params[:id])
    render 'show.json.jb'

  end

  def create
    response = HTTP.get("https://www.googleapis.com/books/v1/volumes?q=isbn13:#{params[:book_id]}&key=#{Rails.application.credentials.google_books_api[:api_key]}")
    
    book = response.parse
    
    # book_id = book["items"][0]["volumeInfo"]["industryIdentifiers"][1]["identifier"]
  
    title = book["items"][0]["volumeInfo"]["title"]

    subtitle = book["items"][0]["volumeInfo"]["subtitle"]
    
    author = book["items"][0]["volumeInfo"]["authors"][0]

    description = book["items"][0]["volumeInfo"]["description"]

    image = book["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    @event = Event.new(
    name: params[:name],
    date: params[:date], 
    time: params[:time],
    meeting_link: params[:meeting_link],
    image: params[:image],
    user_id: current_user.id,
    book_id: params[:book_id],
    book_title: title,
    book_subtitle: subtitle,
    book_author: author,
    book_description: description
    )
    @event.save
    render 'show.json.jb'
  end

  def update
    #find event
    @event = Event.find_by(id: params[:id])
    @event.name = params[:name] || @event.name
    @event.date = params[:date] || @event.date
    @event.time = params[:time] || @event.time
    @event.meeting_link = params[:meeting_link] || @event.meeting_link
    @event.image = params[:image] || @event.image
    @event.book_id = params[:book_id] || @event.book_id
    @event.book_title = params[:book_title] || @event.book_title
    @event.book_subtitle = params[:book_subtitle] || @event.book_subtitle
    @event.book_author = params[:book_author] || @event.book_author
    @event.book_description = params[:book_description] || @event.book_description

    if @event.save
      render 'show.json.jb'
    else
      render json: {errors: @post.errors.full_messages}, status: :bad_request
    end
  end

end

 
