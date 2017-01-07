import React, { DOM } from 'react';
import ImageBox from '../ui/ImageBox';
import TextBox from '../ui/TextBox';

const BlogItem = ({props}) => (
    DOM.div(
        null,
        [
            React.createElement(ImageBox, props),
            React.createElement(TextBox, props)
        ]
    )
);

export default BlogItem;
