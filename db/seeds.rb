# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name: 'Jane', last_name: 'Doe', email: 'jane_doe@me.com')

user = User.create(first_name: 'James', last_name: 'Ellis', email: 'loves_books@me.com')

user = User.create(first_name: 'Tom', last_name: 'Potter', email: 'tpotter@me.com')

user = User.create(first_name: 'Jake', last_name: 'Grub', email: 'jgrub@me.com')

event = Event.create(title: 'Book Discussion on Dune by Frank H.', date: 12/19/2020, time: , meeting_link: '', user_id: )

event = Event.create(title: 'Mysticism in the The Final Empire (Mistborn #1) ', date: 12/19/2020, time: , meeting_link: '', user_id: )

event = Event.create(title: 'The Human Race and the Existential Threat in Enders Game', date: 12/22/2020, time: , meeting_link: '', user_id: )

event = Event.create(title: 'Are You Prepared for A zombie Apocalypse - World War Z', date: 12/23/2020, time: , meeting_link: '', user_id: )

event = Event.create(title: 'Discussing Harry Potter - Starting with Book 1', date: 01/02/2021, time: , meeting_link: '', user_id: )

event = Event.create(title: 'Magic vs Tech - Minimum Wage Magic', date: 01/03/2021, time: , meeting_link: '', user_id: )

event = Event.new(title: "Discussing a Classic - Interview with a Vampire", date: 12/20/2020, time: 06:30pm)

event_registration = Event_Registration.create(user_id: , event_id: )