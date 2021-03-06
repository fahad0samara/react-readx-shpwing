import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";
import {useDispatch} from "react-redux";
import {ADD} from "../redux/actions/action";
import axios from "axios";

const Cards = () => {
  const [data, Setdata] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/Stuffed_Animals")
      .then(function (response) {
   
        Setdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  

  const dispatch = useDispatch();

  const send = e => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center"> Add to Cart Projects </h2>
      <div className="row d-flex justify-content-center align-items-center">
        {" "}
        {data.map((element, id) => {
          return (
            <>
              <Card
              key={id}
                style={{width: "22rem", border: "none"}}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.img}
                  style={{height: "16rem"}}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title> {element.title} </Card.Title>{" "}
                  <Card.Text>Price: ${element.price} </Card.Text>{" "}
                  <div className="button_div d-flex justify-content-center">
                    <Button
                
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                    >
                      
                      Add to Cart
                    </Button>
                   
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
