# Explore America’s Natural Wonders with ParkFinder! 

## Objective

Our ParkFinder application will provide a unique and engaging way for visitors to explore the National parks and their campgrounds. By creating interactive maps and data visualizations, users can gain insights into visitor information for each national park. This project will serve as a valuable resource for anyone interested in exploring the natural and cultural wonders of the United States, all in one convenient location!

- Topic: America's National Parks and Campgrounds
- Motivation: To build an interactive map application that serves as a starting place for visiting America's national parks and Campgrounds
- Target Audience: Campers, Hikers, Teachers, Students, Researchers, Explorers of all kinds
- Value Proposition: This application will provide instant access to national park locations, info, and service alerts to help plan your next big adventure!

## Data

- National Park Service: https://www.nps.gov/subjects/developer/api-documentation.htm#/
- APIs: Parks, Campgrounds, Alerts

## Pipeline / Software

- Get Data: APIs - Parks, Alerts, Campgrounds
- ETL: Data - Manipulate, Clean, Merge, Store in SQLite Database
- Flask App: Routes - Index, Data page
- HTML - CSS: Bootstrap Class Jumbotron JS: Leaflet Plotly, papa.parse libraries

## Challenges

- Getting familiar with dataset
- Mostly textual data, not much numerical data
- Determining best way to visualize data
- Events dataset returned segmented results
- Optimizing map functionality:
  - JS papa.parse difficult to utilize 
  - Converting CSV into GeoJson object
  - Anchoring Legend on the map

## Next Steps

- Enhance Data: add events, operating hours, entrance fees, weather forecasts, pictures, news releases
- Optimize Functionality: auto-zoom to location after selecting park in dropdown menu, maps marker group for NPS passport stamp locations.




