import { useState } from 'react'

export function ProductForm() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let res = fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                category: category,
                amount: amount,
                price: price,
                description: description,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="category">Category:</label>
            <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <label htmlFor="amount">Amount:</label>
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />

            <label htmlFor="price">Price:</label>
            <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
            />

            <label htmlFor="description">Description:</label>
            <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    )
}

// name: { type: String, required: true },
// 	category: { type: String, required: true },
// 	amount: { type: Number, default: 0 },
// 	price: { type: Number, required: true },
// 	description: { type: String, required: true },
