# Airtable Setup Guide for Events Management

This guide will help you set up Airtable as the backend for managing chess club events.

## Step 1: Create Airtable Base

1. Go to [airtable.com](https://airtable.com) and create an account
2. Create a new base called "Chess Club Events"
3. Rename the default table to "Events"

## Step 2: Configure Event Table Schema

Set up the following fields in your Events table:

| Field Name | Field Type | Options |
|------------|------------|---------|
| **Title** | Single line text | Required |
| **Date** | Date | Required, format: MM/DD/YYYY |
| **Time** | Single line text | Required, format: "19:00" (24-hour time) |
| **Category** | Single select | Options: "casual", "board-games" |
| **Description** | Long text | Required |
| **Location** | Single line text | Default: "7 North Broadway, 3rd Floor, Nyack, NY" |
| **Status** | Single select | Options: "active", "cancelled", "draft" |

## Step 3: Get API Credentials

### Get your Personal Access Token:
1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click "Create new token"
3. Name it "Chess Club Website"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Add access to your "Chess Club Events" base
6. Click "Create token" and copy the token

### Get your Base ID:
1. Go to [airtable.com/api](https://airtable.com/api)
2. Select your "Chess Club Events" base
3. Copy the Base ID from the URL (starts with "app...")

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your credentials:

```env
AIRTABLE_API_KEY=your_personal_access_token_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=Events
```

## Step 5: Add Sample Events

Add some sample events to test the integration:

### Thursday Night Chess (Weekly):
- **Title**: Thursday Night Chess
- **Date**: Next Thursday
- **Time**: 19:00
- **Category**: casual
- **Description**: Casual games, instruction, and friendly competition. All skill levels welcome!
- **Location**: 7 North Broadway, 3rd Floor, Nyack, NY
- **Status**: active

### Monthly Board Game Night:
- **Title**: Monthly Board Game Night
- **Date**: First Saturday of next month
- **Time**: 19:00
- **Category**: board-games
- **Description**: Not just chess! Enjoy Scrabble, Settlers of Catan, and other strategy games in a fun, social setting.
- **Location**: 7 North Broadway, 3rd Floor, Nyack, NY
- **Status**: active

## Step 6: Managing Events

### Adding New Events:
1. Open your Airtable base
2. Click the "+" button to add a new row
3. Fill in all required fields
4. Set Status to "active" to make it visible on the website

### Editing Events:
1. Click on any field to edit it
2. Changes are saved automatically
3. The website will update within a few minutes

### Hiding Events:
1. Change the Status to "cancelled" or "draft"
2. The event will disappear from the website

### Deleting Events:
1. Right-click on the row number
2. Select "Delete record"
3. Confirm deletion

## Tips for Non-Technical Users

- **Time Format**: Always use 24-hour format (19:00 for 7:00 PM)
- **Date Format**: Use the date picker for consistency
- **Categories**: Only use "casual" for chess nights and "board-games" for game nights
- **Status**: Keep as "active" for visible events, use "draft" for events you're planning
- **Backup**: Airtable automatically saves all changes and keeps version history

## Troubleshooting

- **Event not showing**: Check that Status is set to "active"
- **Wrong time**: Ensure Time field uses 24-hour format (19:00, not 7:00 PM)
- **Missing location**: Add location or it will default to the chess club address
- **API errors**: Verify your API token has the correct permissions

The website will automatically fetch and display events from Airtable, updating whenever you make changes!