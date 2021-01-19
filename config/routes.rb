Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  
  
  namespace :api do

    get "/events" => "events#index"
    post "/events" => "events#create"
    get "/events/:id" => "events#show"
    patch "/events/:id" => "events#update"

    post "/users" => "users#create"
  
    post "/sessions" => "sessions#create"

    post "eventregistrations" => "event_registrations#create"
  end
end
