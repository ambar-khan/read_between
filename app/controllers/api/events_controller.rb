class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render "index.json.jb"
  end

  def show
    the_id = params[:id]
    @event = Event.find_by(id: the_id)
    render 'show.json.jb'


    # Autopopulate Book Info

    # response = HTTP.get("https://www.googleapis.com/books/v1/volumes?q=isbn:#{params[:isbn13]}&key=#{Rails.application.credentials.google_books_api[:api_key]}")

    # book = response.parse
    
    # # book_id = book["items"][0]["volumeInfo"]["industryIdentifiers"][1]["identifier"]
  
    # book_title = book["items"][0]["volumeInfo"]["title"]

    # book_subtitle = book["items"][0]["volumeInfo"]["subtitle"]
    
    # book_author = book["items"][0]["volumeInfo"]["authors"]

    # book_description = book["items"][0]["volumeInfo"]["description"]

    # book_image = book["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  end

  def create
    @event = Event.new(
    name: params[:name],
    date: params[:date], 
    time: params[:time],
    meeting_link: params[:meeting_link],
    # book_id: params[:isbn13]
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