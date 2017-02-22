import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants'

const ServerActions = {
    getItems(data) {
        AppDispatcher.handleServerAction({
            type: AppConstants.ITEMS_RESPONSE,
            data: data
        })
    },

    getSingleItem(data) {
        AppDispatcher.handleServerAction({
            type: AppConstants.SINGLE_ITEM_RESPONSE,
            data: data
        })
    }
}

export default ServerActions