import React from 'react'

import Wrapper from './Wrapper';
import Title from './Title';
import GreyBg from './greyBg';
import PlaceOfPublication from './PlaceOfPublication';

export default (props) => {
    return (
        <Wrapper>
            <Title>
                <span>
                    {props.title}
                </span>
            </Title>

            <GreyBg></GreyBg>

            <PlaceOfPublication>
                <span>
                    {props.placeOfPublication}
                </span>
            </PlaceOfPublication>
        </Wrapper>
    )
}
