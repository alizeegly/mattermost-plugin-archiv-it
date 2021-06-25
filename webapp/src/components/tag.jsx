// import {connect} from 'react-redux';

// import {tagMode} from 'selectors';

// import TagPostType from './tag_post_type';

import React from 'react';

const {formatText, messageHtmlToComponent} = window.PostUtils;

export default class Tag {
    constructor() {
        this.state = {
            displayTagContent: true,
        };
        this.renderTag = (message) => {
            const formattedText = messageHtmlToComponent(formatText(message));
            var yo = 'yo';
            return (
                <div>
                    {formattedText}{yo}
                </div>
            );
        };
    }

    render() {
        // Don't use post.message directly as it has a special formatting used by the native apps
        const post = {...this.props.post};
        const message = post.props.CustomTagRawMessage || '';
        return this.renderTag(message);
    }
}