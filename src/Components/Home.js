import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTravelList } from "../Utils/travelSlice";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { travel, status, error } = useSelector((state) => state.travel);

  useEffect(() => {
    dispatch(getTravelList());
  }, [dispatch]);

  // Check loading and error states
  if (status === "loading") {
    return <Spinner animation="border" />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Check if travel data is available before mapping
  const travelCards = travel.map((item) => item.name);

  console.log(travelCards);

  return (
    <div>
        <h1>Travel Guide</h1>
      {travel.length > 0 ? (
        <div className="cards-section">
          {travel.map((card) => (
            <div key={card.id} className="col-md-4">
              <Card style={{ height: "450px", margin: "12px" }}>
                <Card.Img variant="top" src={card.image_url} alt={card.name} />
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>No travel data available</div>
      )}
    </div>
  );
};

export default Home;
