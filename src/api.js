import axios from 'axios'

export const addProduct = async (asin) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/products`,
      { asin })
    return result.data
  } catch (err) {
    const error = new Error(err.response.data)
    throw error
  }
}
export const getProducts = async () => {
  const results = await axios.get(`${process.env.REACT_APP_API_URL}/products`)
  return results.data
}
