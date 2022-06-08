import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/action";
const Cardd = ({item}) => {
  
  const dispatch = useDispatch();

  const send = e => {
    console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div>


  

    <div class="container">
        <div class="card-1 card-div">
            <div class="like-icon-div">
                <label for="card-1-like" class="like-icon-div-child">
                    <input type="checkbox" id="card-1-like"/>
                    <i class="far fa-heart heart-empty"></i>
                    <i class="fas fa-heart heart-fill"></i>
                </label>
            </div>
            
            <div class="gow-img-div img-div">
                <img src= {item.img} alt="god-of-war-figurine"/>
            </div>
            <div class="text-container">
                <h2 class="item-name">{item.title}</h2>
              
                
                <div class="pricing-and-cart">
                    <div class="pricing">
                    <span
                              
                            >
                              {" "}
                            </span> 
                    
                     
                        <p style={{
                              
                              color: "green",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}> ★{item.rating} </p>
                        <p class="current-price">${item.price}</p>
                    </div>
                    
                    <i onClick={() => send(item)} class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        </div>

     
      
      
    </div>
  )
}

export default Cardd