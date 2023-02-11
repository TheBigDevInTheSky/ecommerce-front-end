import styles from './ProductCard.module.scss'

export function ProductCard() {
    return (
        <div className={styles.product_card}>
            <img
                src="https://source.unsplash.com/C6oPXOatFD8"
                className={styles.product_image}
                alt=""
            />
            <div className={styles.price_rating}>
                <div className={styles.rating}>xxx</div>
                <div className={styles.price}>$9999</div>
            </div>
            <h4>Product Name</h4>
            <p>
                Product Description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Blanditiis, nulla?
            </p>
        </div>
    )
}

// {
// //     "ID": 1,
// //     "name": "Product Name",
// //     "price": 9.99,
// //     "image_url": "https://www.example.com/product1.jpg",
// //     "rating": 4.5,
// // }
