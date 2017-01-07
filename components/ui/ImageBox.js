import React, { DOM } from 'react';

const ImageBox = ({img}) => (
    DOM.img(
        {
            alt: img.alt
            , src: img.src
            , width: img.width
            , height: img.height
            , style:{
                border: '1px solid #000F0F'
            }
        }
    )
);

export default ImageBox;
