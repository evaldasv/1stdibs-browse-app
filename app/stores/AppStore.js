import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'
import AppConstants from '../constants'
import assign from 'object-assign'

let _items = []
let _item = {}

const AppStore = assign({}, EventEmitter.prototype, {
    getItems() {
        return _items
    },

    getSingleItem() {
        return _item
    },

    emitChange() {
        this.emit(AppConstants.CHANGE_EVENT)
    },

    addChangeListener(callback) {
        this.on(AppConstants.CHANGE_EVENT, callback)
    },

    removeChangeListener(callback) {
        this.removeListener(AppConstants.CHANGE_EVENT, callback)
    }
})

AppDispatcher.register((payload) => {
    const action = payload.action
    const data = action.data

    switch(action.type) {
        case AppConstants.ITEMS_RESPONSE:
            _items = data && data.items || []
            AppStore.emitChange()
            break

        case AppConstants.SINGLE_ITEM_RESPONSE:
            _item = data || {}
            AppStore.emitChange()
            break

        default:
          // no op
    }
})

export default AppStore