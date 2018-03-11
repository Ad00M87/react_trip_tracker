
20.times do
  trip = Trip.create(
    name: Faker::Hipster.word
  )
  5.times do
    Location.create(
      trip_id: trip.id,
      state: Faker::HarryPotter.location,
      city: Faker::GameOfThrones.city,
    )
  end
end
