function getNestedProp(obj, key) {
	return key.split('.').reduce((nestedObject, key) => {
  		if (nestedObject && key in nestedObject) {
     		return nestedObject[key]
    	}
    	return undefined
  	}, obj)
}

export function normalizeItem(data) {
	const normalized = {}

	normalized.id = data.id
	normalized.title = data.title
	normalized.description = data.description
	normalized.creators = data.creators || 'N/A'
	normalized.measurements = getNestedProp(data, 'measurements.display')
	normalized.seller = getNestedProp(data, 'seller.company')
	normalized.price = getNestedProp(data, 'price.amounts.USD') || 'Price Upon Request'
	normalized.image = data.image

	return normalized
}

export function normalizeItemList(data) {
	return data.items.map(normalizeItem)
}
