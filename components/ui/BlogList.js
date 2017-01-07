import React, { DOM } from 'react';
import _ from 'lodash';
import BlogItem from '../ui/BlogItem';

const BlogList = ({items}) => (
    DOM.ul(
        null,
        _.map(
            items,
            (item, key) => (
                DOM.li(
                    {key},
                    React.createElement(BlogItem, {props:item})
                )
            )
        )
    )
);

export default BlogList;
