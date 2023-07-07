# WeatherApp
Simple weather search based on OpenWeather
![image](https://github.com/KarenYu729/WeatherApp/assets/97644710/a38c844f-9193-4951-a180-a6de630deb38)

Background image will not always be the same, actually, it shows random images for each location. When first visite the website, the default image will be set as from London, also the default weather report city is also set as London. 

## functions
### search weather 
In the html file, we have a search box to get the name of the city, and a search icon for click.
In the css file, we set the height, color, width, font etc of the search bar.
In js, we have fetchWeather function, this is to get info about the weather (json), as shown below in the js files.
Also, we have the search function, this is the function do exact "search", fetchWeather is get the search result.
### show weather
displayWeather function in JS
### add listener
click (search button) or enter (search box)

# Reference
<a>https://www.youtube.com/watch?v=WZNG8UomjSI</a>

<a>https://openweathermap.org/current</a>

<a>https://react-icons.github.io/react-icons/search?q=search</a>

<a>https://fonts.google.com/specimen/Ysabeau+Infant</a>

<a>https://unsplash.com/documentation</a>


# Other Insights
<img width="919" alt="1688691172569" src="https://github.com/KarenYu729/WeatherApp/assets/97644710/e6c6bf93-1d84-4cb3-bb01-7dd1d5acbee3">

We can also show background images based on the weather by changeing only one line in js:

<div>document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"</div>

<div>document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')"</div>



