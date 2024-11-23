import './carousel.css'
function Carousel() {
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
    <div class="home_slide">
      <div class="container-md">
        <div class="text ">
            <h2>WELCOME TO APEX</h2>
            <p>A Construction & Renovation Company</p>      
            <ul class="d-flex p-2">
                <li>Commerical</li>
                <li>Residential</li>
                <li>Industrial</li>
            </ul>  
           </div>
    </div>
    </div>
    </div>        
    
          <div class="carousel-item" data-bs-interval="1000">
            <div class="home_slide">
              <div class="container-md">
                <div class="text ">
                    <h2>WELCOME TO APEX</h2>
                    <p>A Construction & Renovation Company</p>      
                    <ul class="d-flex p-2">
                        <li>Commerical</li>
                        <li>Residential</li>
                        <li>Industrial</li>
                    </ul>  
                   </div>
                  </div>
            </div>
          </div>
            </div>        
    
      
      </div>
    
    )
}
export default Carousel;
