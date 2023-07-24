import React from "react";
import "./card_styles.css"
function Card_layout(recs) {
    
var data = recs.recs;

if(recs.recs.length == 0) return <div class="table-wrapper"><p>No Recommendations</p></div>
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
                                <span class="credit">Photo: Tim Marshall</span>
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

export default Card_layout;