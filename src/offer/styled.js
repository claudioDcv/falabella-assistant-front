import styled from "styled-components";

export const ProductName = styled.h2`
  font-size: 16px;
  margin: 0px 0px 5px;
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const StarRatingIcons = styled.div`
  display: flex;
  align-items: center;
  div {
    padding: 0px;
    margin: 0px;
    width: 100px;
  }
  span {
    font-weight: bold;
    color: #666;
    font-size: 12px;
    margin-left: 4px;
  }
`;
export const FromPriceContent = styled.div`
  margin: 2px 0px;
  display: flex;
  align-items: center;
`;

export const DiscountPercent = styled.div`
  margin: 0 5px;
  color: #666;
  font-weight: bold;
`;

export const FromPrice = styled.div`
  color: #aaa;
  text-decoration: line-through;
`;

export const Price = styled.div`
  margin: 4px 0px 2px 0px;
  font-size: 24px;
  font-weight: bold;
  color: #a50116;
`;

export const BestSellerOfferContainer = styled.div``;

export const StarsContainer = styled.div`
  cursor: pointer;
  display: flex;

  .star {
    polygon {
      fill: #d8d8d8;
    }
  }

  &[data-stars] {
    .star polygon {
      fill: #e0ba00;
    }
  }

  &[data-stars="1"] {
    .star:nth-child(1) ~ .star polygon {
      fill: #d8d8d8;
    }
  }

  &[data-stars="2"] {
    .star:nth-child(2) ~ .star polygon {
      fill: #d8d8d8;
    }
  }

  &[data-stars="3"] {
    .star:nth-child(3) ~ .star polygon {
      fill: #d8d8d8;
    }
  }

  &[data-stars="4"] {
    .star:nth-child(4) ~ .star polygon {
      fill: #d8d8d8;
    }
  }

  &[data-stars="5"] {
    .star:nth-child(5) ~ .star polygon {
      fill: #d8d8d8;
    }
  }
`;
