import React from 'react';
import PropTypes from 'prop-types';

const {formatText, messageHtmlToComponent} = window.PostUtils;

export default class TagPostType extends React.PureComponent {
    static propTypes = {
        post: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            displayTagContent: true,
        };
        var yo = 'yo';
        this.renderTag = (message) => {
            const formattedText = messageHtmlToComponent(formatText(message));
            return (
                <div>
                    <div>{formattedText}</div>
                    <span>{yo}</span>
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