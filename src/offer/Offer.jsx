import React from "react";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import RateStar from "./RateStar";
import {
  Price,
  FromPrice,
  ProductImage,
  FromPriceContent,
  DiscountPercent,
  ProductName,
  BestSellerOfferContainer,
  StarRatingIcons,
} from "./styled";

import useStyles from "./materialStyles";

const Offer = ({ offer }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <BestSellerOfferContainer>
              <ProductImage src={offer.image} />
              <div>
                <ProductName>{offer.name}</ProductName>
                {offer.rating !== 0 && (
                  <StarRatingIcons>
                    <RateStar stars={offer.rating} />
                    <span>{offer.reviews} reseñas</span>
                  </StarRatingIcons>
                )}
              </div>
            </BestSellerOfferContainer>

            <FromPriceContent>
              {offer.fromPrice && <FromPrice>{offer.fromPrice}</FromPrice>}
              {offer.discountPercent && (
                <DiscountPercent>{offer.discountPercent}</DiscountPercent>
              )}
              <Price>{offer.price}</Price>
            </FromPriceContent>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Offer;
