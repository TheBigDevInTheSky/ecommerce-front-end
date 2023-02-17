import { getRequest } from './request'

export const QUERIES = {
    GET_PRODUCTS: 'get_products',
}

export const QUERY = {
    [QUERIES.GET_PRODUCTS]: {
        key: [QUERIES.GET_PRODUCTS],
        fn: () => getRequest('products'),
    },
}
