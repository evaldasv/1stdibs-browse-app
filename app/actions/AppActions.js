import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants'
import APIService from '../service/api'

const AppActions = {
    getItems() {
        AppDispatcher.handleViewAction({
            type: AppConstants.ITEMS_REQUEST
        })
        APIService.getItems()
    },

    getSingleItem(id) {
        AppDispatcher.handleViewAction({
            type: AppConstants.SINGLE_ITEM_REQUEST
        })
        APIService.getSingleItem(id)
    }
}

export default AppActions