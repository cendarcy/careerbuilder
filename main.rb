require "sinatra"
require "sendgrid-ruby"

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/services' do
  erb :services
end

get '/contact' do
  erb :contact
end

post '/email_response' do
	puts params.inspect
end

mail_person = SendGrid::Client.new do |mp|
	mp.api_key = ENV["SENDGRID_APIKEY"] #input the API key from SendGrid
end

res = client.send(mail)
puts res.code
puts res.body