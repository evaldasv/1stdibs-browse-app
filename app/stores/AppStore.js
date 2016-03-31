import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'
import AppConstants from '../constants'
import assign from 'object-assign'

let _items = {};

const AppStore = assign({}, EventEmitter.prototype, {
    getItems() {
        return _items;
    },

    emitChange() {
        this.emit(AppConstants.CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(AppConstants.CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(AppConstants.CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    const action = payload.action;
    const type = action.type;
    const data = action.data;

    switch(action.type) {
        case AppConstants.ITEMS_RESPONSE:
            _items = data && data.items;
            AppStore.emitChange();
            break;

        case AppConstants.SINGLE_ITEM_RESPONSE:
            _items = data;
            AppStore.emitChange();
            break;

        default:
          // no op
    }
})

export default AppStore