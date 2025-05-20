{
  "id": "e1", // Unique event ID
  "title": "Event Title",
  "type": "point", // "point" or "range"
  "startDate": "YYYY-MM-DDTHH:mm:ssZ", // ISO 8601 format
  "endDate": "YYYY-MM-DDTHH:mm:ssZ", // Only if type is "range"
  "description": "Detailed description of the event.",
  "multimedia": [
    {
      "type": "image", // "youtube", "audio", "3dmodel"
      "url": "path_to_image.jpg",
      "caption": "Optional caption"
    },
    {
      "type": "youtube",
      "videoId": "youtube_video_id",
      "caption": "Video about the event"
    },
    {
      "type": "3dmodel",
      "embedUrl": "sketchfab_embed_url", // or similar
      "caption": "3D model of an artifact"
    }
  ],
  "location": { // For Interactive Map Integration
    "latitude": 34.0522,
    "longitude": -118.2437,
    "zoomLevel": 10, // Optional default zoom for this event's map view
    "address": "Optional address string"
  },
  "themeIds": ["t1", "t3"], // Links to theme IDs
  "sources": [
    {
      "text": "Primary Source Document A, page 12",
      "url": "optional_url_to_source"
    }
  ],
  "annotations": [
    {
      "text": "This date is disputed by some historians.",
      "author": "Student Name" // Optional
    }
  ],
  "customMarkerStyle": "icon_name_or_url", // For Visual Customization
  "eventColor": "#FFC300" // Specific color for this event
}