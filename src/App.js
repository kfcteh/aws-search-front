import React from 'react'
import Search from './Search'
import Table from './Table'
import { addProduct, getProducts } from './api'

class App extends React.Component {
  async componentDidMount() {
    const products = await getProducts()
    this.setState({ ...this.state, products: [...this.state.products, ...products] })
  }
  constructor(props) {
    super(props)
    this.state = {
      asin: '',
      products: [],
      loading: false,
      error: '',
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  onSearchChange(e) {
    this.setState({ ...this.state, asin: e.target.value })

  }
  doesProductExistsInList(productToAdd) {
    return this.state.products.some((product) => {
      return productToAdd.id === product.id
    })
  }

  async onSearchSubmit() {
    if (!this.state.asin) {
      this.setState({ ...this.state, error: 'ASIN Cannot be empty', })
      return
    }
    this.setState({ ...this.state, error: '', loading: true })
    try {
      const productToAdd = await addProduct(this.state.asin)
      if (this.doesProductExistsInList(productToAdd)) {
        this.setState({ ...this.state, loading: false })
        return
      }
      this.setState({ ...this.state, loading: false, products: [...this.state.products, productToAdd] })
    } catch (err) {
      this.setState({ ...this.state, error: err.message, loading: false })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <section>
            <Search asin={this.state.asin} onSearchChange={this.onSearchChange} onSearchSubmit={this.onSearchSubmit} isLoading={this.state.loading} />
            <p className=".is-danger">{this.state.error}</p>
          </section>
          <section>
          <Table products={this.state.products} isLoading={this.state.loading} />
          </section>
        </div>
      </div>
    )
  }
}

export default App
