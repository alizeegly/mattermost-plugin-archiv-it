import {GlobalState} from 'mattermost-redux/types/store';

import manifest from './manifest';

const getPluginState = (state: any) => {
    return state['plugins-' + manifest.id] || {};
};

export const tagMode = (state: GlobalState): string => {
    return getPluginState(state).tagMode;
};