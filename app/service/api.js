import request from './request'
import ServerActions from '../actions/ServerActions'

const APIService = {    
    getItems() {
        request.get('/data', function(res) {
            ServerActions.getItems(res);
        })
    },
    getSingleItem(id) {
        request.get('/pdp/'+ id +'/data', function(res) {
            ServerActions.getSingleItem(res);
        })
    }
}

export default APIService