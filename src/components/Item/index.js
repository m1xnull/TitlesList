import React from 'react'

import { Wrapper, Title, GreyBg, PlaceOfPublication } from './styles.js'

export default (props) => {
    const { data } = props;

    return (
        <Wrapper>
            <Title>
                <span>
                    {data.title}
                </span>
            </Title>

            <GreyBg></GreyBg>

            <PlaceOfPublication>
                <span>
                    {data.placeOfPublication}
                </span>
            </PlaceOfPublication>
        </Wrapper>
    )
}
