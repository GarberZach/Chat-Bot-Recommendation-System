import React from "react";
import "./table_style.css";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import { useState, useEffect } from "react";

function ResultsPageSongs (recs) {

  console.log("^^^^^^^^^^^^^^^^^^^^^^^");
  console.log(recs.recs);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^");

  const {isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyDZw9fgJrpYhET7vXGG36a9nrBY6cQp7HA"});

  const [accessToken, setAccessToken] = useState("");

  const [final_Tracks, setFinal_Tracks] = useState("");

  const CLIENT_ID = '28a64b7e033b4433baf6eccbe79b7a67';
  const CLIENT_SECRET = 'bc4be37184204626a2b31fbdd0326e66';

  useEffect(() =>  {
      var authParameters = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }

      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(data => setAccessToken(data.access_token))

      
      
  }, [])

 
      var finalTracks = search(recs);

      console.log("$$$$$$$$$$$$$$$$$$$$$");
      
      finalTracks.then(data => {console.log(data)})

  

    var fTracks = [];
  

    console.log(fTracks);

  async function search(recs) {
    
    console.log("#######")
    var trackList = [];
    var trackIds = recs.recs;
    console.log(recs.recs);
    console.log(trackIds[1]);
    console.log(trackIds.length);
    
    

    var query = 'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P';

    for(var i = 0; i < trackIds.length; i++){
      var newQuery = query + trackIds[i];

      console.log("@@@@@@@@@@@@@@@@@@@@@@@@");
      console.log(newQuery);
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@");

      var requestParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }

      await fetch('https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P', requestParameters)
      .then(response => response.json())
      .then(data => {console.log(data)}
      )
    }
    console.log(trackList);
    

    return trackList
  }
 

  var locations = [
    [33.13, -117.07],
    [37.31, -121.94],
    [33.95, -118.02],
    [34.09, -118.21],
    [35.27, -118.83],
    [33.86, -118.33],
    [32.85, -115.57],
    [34.07, -118.27],
    [34.12, -118.08],
    [37.77, -122.27],
    [34.28, -118.89],
    [36.79, -120.08],
  ]
  if(!isLoaded) return <div>Loading...</div>
  return(
    
    <div class="table-wrapper">
      <h3>
        Check out Nellas Recommendations
      </h3>
    <table class="fl-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          

          
          <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
          </tr>
          
          <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
          </tr>
          <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
          </tr>
          <tr>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
          </tr>
          <tr>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
          </tr>
          <tr>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
          </tr>
          <tr>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
          </tr>
          <tr>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
          </tr>
          <tr>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
          </tr>
          <tr>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
          </tr>
        </tbody>
      </table>

    <div>
      <GoogleMap 
        zoom= {6} 
        center={{lat:37, lng:-120}} 
        mapContainerClassName='map-container'>

          {locations.map(subarray => 
            
            <MarkerF
              position={{lat: subarray[0], lng: subarray[1]}}
              key= {subarray[0]}
              
            />,
          
          )}
        </GoogleMap>
      </div>
      <div>
        <button class="button-9" role="button">Button 9</button>
      </div>
    </div>
    
  )
}




export default ResultsPageSongs;