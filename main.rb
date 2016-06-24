require "sinatra"
require "sendgrid-ruby"

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/about' do
  erb :about
end

get '/services' do
  erb :services
end

get '/' do
  erb :contact
end