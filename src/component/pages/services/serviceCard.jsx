import './serviceCard.css'
import card_image from '../img/service-1.jpg'
export default function ServiceCard(){
    return(
        <div class="row ">
        <div class="col col-md-3">
        <div class="card">
        <img src={card_image} />
        <div class="card-body">
          <h5 class="card-title">Building Construction
          </h5>
          <p class="card-text">Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos

          </p>
          <a href="#">READ MORE</a></div>
      </div>
      </div>
      </div>
    )
}