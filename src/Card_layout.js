import React from "react";
import "./card_styles.css"
function Card_layout(recs) {
    
var recs = recs.recs;
console.log(recs.length);
var data = [];
var music = false
var housing = false

if(recs.length == 0) return <div class="table-wrapper"><p>No Recommendations</p></div>

for(var i in recs){
    
    data.push(recs[i]);
}





data.map((item) => (console.log(item.area)))

if(recs[0].area){
    housing = true
}
if(recs[0].album){
    music = true
}

console.log(housing);
console.log(music);

function changeInfo(item){
    return(
        data.map((item) => (
                
                
                    
            <div>
                <h1>
                    
                    {"Price: $" + item.price.toLocaleString("en-US")}
                    <br></br>
                </h1>
                <h2>
                    {"Area: " + item.area}
                    <br></br>
                    {"Bathrooms: " + item.bathrooms}
                    <br></br>
                    {"Berdooms:" + item.bedrooms}
                    <br></br>
                    {"Flooring: " + item.house_flooring}
                    <br></br>
                    {"Age: " + item.house_age}
                    <br></br>
                    {"Nearby Transport: " + item.house_public_transport}
                    <br></br>
                    {"Coordinates: " + item.latitude + ", " + item.longitude}
                    <br></br>
                    {"Neighborhood_features: " + item.neighborhood_features}
                    <br></br>
                    {"School Rating: " + item.schools_rating}
                    <br></br>
                    {"Sea Proximity: " + item.sea_proximity}
                </h2>
            </div>

        ))
    )
}

if(music){
    return(
        <div class="container">
        <div class="carousel">
        { 
                data.map((item, index) => (
                    
                        <input type="radio" name="slides" id={"slide-" + index}></input>                   
                )       
                )
            } 
            <ul class="carousel__slides">
            {                   
                data.map((item) => (
                
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={item.cover_url} alt=""></img>
                        </div>
                        <figcaption>
                            {item.name}
                            {item.artist}
                            {item.album}
                            
                        </figcaption>
                    </figure>
                </li>
                ))
            }
            </ul>
            <ul class="carousel__thumbnails">
            {
                    data.map((item, index) => (
                    <li>
                        <label for={"slide-" + index}><img src={item.cover_url} alt=""></img></label>
                    </li>
                    ))
                }
            </ul>
        </div>
    </div>
     
        
      )
}
if(housing){
    info = 
    return(
        <div class="container">
        <div class="carousel">
        { 
                data.map((item, index) => (
                    
                        <input type="radio" name="slides" id={"slide-" + index} onClick={}></input>                   
                )       
                )
            } 
            <ul class="carousel__slides">
            {                   
                data.map((item) => (
                
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={item.cover_url} alt=""></img>
                        </div>

                    </figure>
                </li>
                ))
            }
            </ul>
            <ul class="carousel__thumbnails">
            {
                    data.map((item, index) => (
                        if(){
                            
                        }
                    <li>
                        <label for={"slide-" + index}><img src={item.cover_url} alt=""></img></label>
                    </li>
                    ))
                }
            </ul>
            <div>
            {    
            document.getElementById()               
                data.map((item) => (
                
                
                    
                    <div>
                        <h1>
                            
                            {"Price: $" + item.price.toLocaleString("en-US")}
                            <br></br>
                        </h1>
                        <h2>
                            {"Area: " + item.area}
                            <br></br>
                            {"Bathrooms: " + item.bathrooms}
                            <br></br>
                            {"Berdooms:" + item.bedrooms}
                            <br></br>
                            {"Flooring: " + item.house_flooring}
                            <br></br>
                            {"Age: " + item.house_age}
                            <br></br>
                            {"Nearby Transport: " + item.house_public_transport}
                            <br></br>
                            {"Coordinates: " + item.latitude + ", " + item.longitude}
                            <br></br>
                            {"Neighborhood_features: " + item.neighborhood_features}
                            <br></br>
                            {"School Rating: " + item.schools_rating}
                            <br></br>
                            {"Sea Proximity: " + item.sea_proximity}
                        </h2>
                    </div>

                ))
            }
            </div>
            </div>
            </div>
     
        
    )
}
  

}



export default Card_layout;