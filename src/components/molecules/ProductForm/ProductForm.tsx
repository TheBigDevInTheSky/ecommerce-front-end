export function ProductForm() {
    return (
        <form action="http://localhost:3000/products" method="POST">
            <div>
                <label htmlFor="product-name">Product Name:</label>
                <input
                    type="text"
                    placeholder="Product name"
                    name="product"
                    id="product"
                    required
                />
            </div>
            <div>
                <label htmlFor="product-category">Category:</label>
                <select name="category" id="category">
                    <option value="menswear">Menswear</option>
                    <option value="womenswear">Womenswear</option>
                    <option value="shoes">Shoes</option>
                    <option value="jackets">Jackets</option>
                </select>
            </div>
            <div>
                <label htmlFor="product-amount">Product Quantity:</label>
                <input type="number" name="amount" required />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" required name="price" id="price" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    id="description"
                    cols={30}
                    rows={2}
                ></textarea>
            </div>
            <input type="submit" value="submit" />
        </form>
    )
}

// name: { type: String, required: true },
// 	category: { type: String, required: true },
// 	amount: { type: Number, default: 0 },
// 	price: { type: Number, required: true },
// 	description: { type: String, required: true },
