# City Explorer

**Author**: Victor M. Ottati

## Overview

Web Request and Response Cycle, using REACT JS and Axios library

## Getting Started

Create a REACT project using: `npx create-react-app city-explorer`

## Architecture

Remove unwanted files
Create a GitHub repository
Modify App.js and App.css

## Change Log

Add, commit and push any modifications
Upload app to Netlify

## Result LINKS

[REP](https://github.com/VMO2020/city-explorer)

[WEN-Netlify](https://city-explorer-vmog.netlify.app/)

## Draw the web request-response cycle for the current lab tasks

![Life-cycle](https://wonderdevelop.com/wp-content/uploads/2023/02/s.webp.jpg)

1. Input: define **searchQuery** value

```js
<input
    value={searchQuery}
    onChange={handleChange}
    placeholder="Place name"
   />
```

2. Button: run **getLocation** function

```jsx
    <button onClick={getLocation}>Explore</button>
```

3. Axios make the Request to the server and get the Response `(data.data[0])`:

```js
const getLocation = async () => {
  try {
   const data = await axios.get(
    `https://eu1.locationiq.com/v1/search?key=${
     process.env.REACT_APP_ACCESS_TOKEN
    }&q=${searchQuery.toLowerCase()}&format=json`
   );
   // console.log(data.data[0]);
   setLocation(data.data[0]);
   setReset(true);
  } catch (error) {
   console.log(error);
  }
 };
```

4. Final: Display the response

```jsx
<h2>{location.display_name}</h2>
   {location.lat && (
    <div className="data-container">
     <p>
      <span>lat: </span>
      {location.lat}
     </p>
     <p>
      <span>lon: </span>
      {location.lon}
     </p>
    </div>
   )}
```

![WEB](./src/images/city.png)

## Times

Name of feature: city-explorer

Estimate of time needed to complete: 2

Start time: 1:00 pm

Finish time: 2:45 pm

Actual time needed to complete: 1h 45min
