* Run server: node server


App outline:
- App is linked to a Google account.
- Whenever a new Google calendar event is made, it gets queued on app. User gets to choose which events to import into app.
- If an event is imported, it comes with a date-created timestamp (object.created)
- Each event has date created, date of appointment, description, quote amt, client info (name, contact), payment amt (entered after tattoo, automatically adjusted for Angie's cut, but can be manually updated on top of that), tip amt, ability to take photo to associate with appt & client
- All clients are stored in database, and if name & phone number match, they're stored as a single client
