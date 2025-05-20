# Interactive Timeline for ArcGIS StoryMaps

An epic timeline maker that can be embedded into ArcGIS StoryMaps presentations.

## Features

- Interactive timeline visualization with multiple perspectives
- Thematic grouping of events
- Multimedia support (images, videos, 3D models)
- Geographic integration with ArcGIS maps
- Story point navigation for guided exploration
- Responsive design for all devices

## Structure

- `index.html` - The main webpage that displays the timeline
- `timeline-data.json` - Contains all timeline data including events, perspectives, and themes
- `Event Object Structure.js` - Documentation of the event object structure (for reference)
- `timeline-data-schema.json` - The schema definition for the timeline data (for reference)

## Setup

1. Clone this repository to your local machine or download as a ZIP file
2. Host the files on a web server (such as GitHub Pages)
3. The timeline will be available at the root URL of your hosted site

## Embedding in ArcGIS StoryMaps

To embed this timeline in an ArcGIS StoryMap:

1. Host this project on GitHub Pages or another web hosting service
2. In your StoryMap, add a new section and choose "Embed"
3. Enter the URL of your hosted timeline
4. Adjust the size settings as needed

## Customizing Timeline Data

Edit the `timeline-data.json` file to customize:

- Events (historical points or ranges)
- Perspectives (different views or categories)
- Themes (for color-coding and grouping)
- Story points (curated views of the timeline)

### Event Structure

Each event in the timeline can include:

- Title and description
- Date information (point or range)
- Geographic location (for mapping)
- Multimedia content (images, videos, 3D models)
- Source citations and annotations
- Visual styling options

## License

This project is available for educational use.

## Credits

Created for integration with ArcGIS StoryMaps.