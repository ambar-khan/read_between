class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render "index.json.jb"

  end

  def show
    @event = Event.find_by(id: params[:id])
    # @event.user = Event.find_by(id: params[:id])
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

end

 

    # .then(response => response.json())
    # .then(result => {
    # this.setState({ books: result.items})
    # })

#{params[:isbn_13]}