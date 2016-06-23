require "sinatra"
require "sendgrid-ruby"

get '/' do
  erb :index
end