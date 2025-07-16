# Google Calendar Setup Guide for Events Management

This guide will help you set up Google Calendar as the backend for managing chess club events, replacing the previous Airtable integration.

## Step 1: Create Google Calendar

1. Go to [calendar.google.com](https://calendar.google.com)
2. Create a new calendar specifically for the chess club:
   - Click the "+" next to "Other calendars"
   - Select "Create new calendar"
   - Name it "Rockland County Chess Club Events"
   - Add a description if desired
   - Set the time zone to "America/New_York" (Eastern Time)
   - Click "Create calendar"

## Step 2: Get Google Calendar API Key

### Create a Google Cloud Project:
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Name it something like "Chess Club Website"

### Enable Calendar API:
1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on it and click "Enable"

### Create API Key:
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key
4. (Optional) Click "Restrict Key" to limit access to only the Calendar API for security

## Step 3: Get Calendar ID

1. Go back to [calendar.google.com](https://calendar.google.com)
2. Find your "Rockland County Chess Club Events" calendar in the left sidebar
3. Click the three dots next to it and select "Settings and sharing"
4. Scroll down to "Integrate calendar"
5. Copy the "Calendar ID" (it looks like an email address)

## Step 4: Configure Environment Variables

Add these environment variables to your deployment platform (Netlify, Vercel, etc.):

```env
GOOGLE_CALENDAR_API_KEY=your_api_key_here
GOOGLE_CALENDAR_ID=your_calendar_id_here
```

**Important**: Keep your API key secure and never commit it to version control.

## Step 5: Calendar Event Format

When creating events in Google Calendar, follow these guidelines for proper display on the website:

### Required Fields:
- **Title**: Event name (e.g., "Thursday Night Chess")
- **Date & Time**: Set the correct date and time in Eastern timezone
- **Description**: Detailed event description

### Optional Fields:
- **Location**: Will default to "7 North Broadway, 3rd Floor, Nyack, NY" if not specified

### Event Categories:
Add the event category in the event description or use Google Calendar's custom properties. The system recognizes these keywords:

- **"tournament"** → Tournament events
- **"class" or "lesson"** → Classes  
- **"board" or "game"** → Board Games
- **"special" or "event"** → Special Event
- **"casual"** → Casual Play (default)

### Example Events:

#### Thursday Night Chess (Weekly):
- **Title**: Thursday Night Chess
- **Date**: Every Thursday
- **Time**: 7:00 PM - 9:00 PM (Eastern)
- **Description**: Casual games, instruction, and friendly competition. All skill levels welcome!
- **Location**: 7 North Broadway, 3rd Floor, Nyack, NY
- **Repeat**: Weekly

#### Monthly Board Game Night:
- **Title**: Monthly Board Game Night  
- **Date**: First Saturday of each month
- **Time**: 7:00 PM - 10:00 PM (Eastern)
- **Description**: Board games - Not just chess! Enjoy Scrabble, Settlers of Catan, and other strategy games in a fun, social setting.
- **Location**: 7 North Broadway, 3rd Floor, Nyack, NY
- **Repeat**: Monthly

## Step 6: Managing Events

### Adding New Events:
1. Go to [calendar.google.com](https://calendar.google.com)
2. Click on the date/time you want to create an event
3. Fill in the event details following the format above
4. Make sure you're adding it to the correct "Rockland County Chess Club Events" calendar
5. Click "Save"

### Editing Events:
1. Click on any event in the calendar
2. Click the edit (pencil) icon
3. Make your changes and click "Save"
4. Changes appear on the website within a few minutes

### Recurring Events:
1. When creating an event, click "Does not repeat"
2. Select the appropriate recurrence (Daily, Weekly, Monthly, etc.)
3. Set end date if needed
4. Google Calendar will automatically create the series

### Deleting Events:
1. Click on the event
2. Click the delete (trash) icon
3. Choose whether to delete just this instance or the entire series (for recurring events)

## Step 7: Make Calendar Public (Optional)

To allow the website to access your calendar:

1. In calendar settings, go to "Access permissions"
2. Check "Make available to public" if you want the calendar visible to everyone
3. **Important**: The API integration works regardless of this setting

## Advantages Over Airtable

- **Native Calendar Interface**: Much more intuitive for managing events
- **Recurring Events**: Easy to set up weekly/monthly recurring events
- **Time Zone Handling**: Automatic time zone management
- **Mobile Access**: Full mobile app support for event management
- **Integration**: Can integrate with other Google services
- **Free**: No cost for reasonable usage levels

## Troubleshooting

- **Events not showing**: Verify the Calendar ID is correct and the calendar exists
- **API errors**: Check that the Google Calendar API is enabled and the API key is valid
- **Time zones**: Ensure events are created in Eastern Time Zone
- **Missing events**: Check that events are in the future and properly formatted
- **Category not working**: Make sure category keywords are in the event description

## Security Notes

- **API Key Protection**: Never expose your API key in client-side code or version control
- **Rate Limits**: Google Calendar API has rate limits; the current implementation should stay well within them
- **Calendar Privacy**: Consider using a dedicated calendar rather than your personal one

The website will automatically fetch and display events from Google Calendar, updating in real-time!