import { useState } from 'react'
import { postRequest } from '../../../api/request'

export function ProductForm() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const { data } = await postRequest(
                'products',
                {
                    name,
                    category,
                    amount,
                    price,
                    description,
                },
                {
                    'Content-Type': 'application/json',
                }
            )
            console.log(data)
        } catch (error: any) {
            console.log(error.message)
        }
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
