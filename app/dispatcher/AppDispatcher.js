import { Dispatcher } from 'flux'
import assign from 'object-assign'
import AppConstants from '../constants'

const AppDispatcher = assign(new Dispatcher(), {

    handleServerAction(action) {
        const payload = {
            source: AppConstants.SERVER_ACTION,
            action: action
        }
        this.dispatch(payload)
    },

    handleViewAction(action) {
        const payload = {
            source: AppConstants.VIEW_ACTION,
            action: action
        }
        this.dispatch(payload)
    }

})

export default AppDispatcher