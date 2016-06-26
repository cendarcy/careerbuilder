require "sinatra"
require "postmark"

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

# Camille: would like to chat with Orlando/
# TAs about how we could make this a working form

# client = Postmark::ApiClient.new('server token')

# client.deliver(
#   from: 'sender@example.com',
#   to: 'gets.chomp',
#   subject: 'hello',
#   html_body: '<strong>Hello from Postmark!<strong>',
#   track_opens: true
# )

# res = client.send(mail)
# puts res.code
# puts res.body