import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Title, GreyBg, PlaceOfPublication } from "./styles";

const Item = ({ data }) => {
  const { title, placeOfPublication } = data;
  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
      </Title>

      <GreyBg />

      <PlaceOfPublication>
        <span>{placeOfPublication}</span>
      </PlaceOfPublication>
    </Wrapper>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    placeOfPublication: PropTypes.string
  }).isRequired
};

export default Item;
