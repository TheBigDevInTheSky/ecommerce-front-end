import { REQUEST, REQUEST_METHOD } from './request'

export const QUERIES = {
    GET_PRODUCT: 'get_products',
    POST_PRODUCT: 'post_product',
    PUT_PRODUCT: 'put_product',
    DELETE_PRODUCT: 'delete_product',
}

export const QUERY = {
    [QUERIES.GET_PRODUCT]: {
        key: [QUERIES.GET_PRODUCT],
        fn: () => REQUEST[REQUEST_METHOD.GET]('products'),
    },
    [QUERIES.POST_PRODUCT]: {
        key: [QUERIES.POST_PRODUCT],
        fn: () => REQUEST[REQUEST_METHOD.POST]('products'),
    },
    [QUERIES.PUT_PRODUCT]: {
        key: [QUERIES.PUT_PRODUCT],
        fn: () => REQUEST[REQUEST_METHOD.PUT]('products'),
    },
    [QUERIES.DELETE_PRODUCT]: {
        key: [QUERIES.DELETE_PRODUCT],
        fn: () => REQUEST[REQUEST_METHOD.DELETE]('products'),
    },
}
