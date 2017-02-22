const FavoriteService = {
    getAll() {
        return JSON.parse(localStorage.getItem('favorite_items')) || []
    },

    getStatus(id) {
        return this.getAll()
            .some((fav) => 
                fav === id
            )
    },

    handle(id) {
        const favorites = this.getAll()
        const index = favorites.indexOf(id)

        if (index === -1) {
            favorites.push(id)
        } else {
            favorites.splice(index, 1)
        }

        localStorage.setItem('favorite_items', JSON.stringify(favorites))
    }
}

export default FavoriteService