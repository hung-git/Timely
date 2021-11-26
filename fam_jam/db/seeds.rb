# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

titles = ["pick up the kids", "anniversary dinner", "get the dry cleaning", "Joe swimming lesson", "grandma is babysitting"]
cities = ["Vancouver", "Richmond", "Burnaby", "Surrey", "New Westminster"]
guests = ["joe@123.com", "jill@123.com", "lexi@123.com", "hung@123.com"]

Event.destroy_all

10.times do
    Event.create(
        title: titles.sample,
        start_date: DateTime.now - (rand * 21),
        end_date: DateTime.now + (rand *21),
        location: "Some Location",
        description: Faker::ChuckNorris.fact,
        city: cities.sample,
        province: "BC",
        country: "Canada",
        latitude: 49.2,
        longitude: 100.3,
        guest_list: guests
    )
end



events = Event.all

puts Cowsay.say("Generated #{events.count} events", :frogs)


