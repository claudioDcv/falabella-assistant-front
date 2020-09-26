import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "./Layout";
import Offer from "./offer";
import { useOffers } from "./hooks/offers";

const App = () => {
  const { data, isLoading } = useOffers();

  if (isLoading) {
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  }

  return (
    <div id="app">
      <Layout>
        {data.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </Layout>
    </div>
  );
};

export default App;
