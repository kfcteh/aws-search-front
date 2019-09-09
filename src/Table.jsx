import React from 'react'

const TableRow = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.category}</td>
      <td>{product.dimensions}</td>
      <td>{product.rank}</td>
    </tr>
  )
}

const Table = ({ products, isLoading }) => {
  return (
    <div className="container is-fluid">
      <div className="lds-ring"/>
      {isLoading ?
        (<div/>) :
        (<table key='table' className="table is-striped is-fullwidth">
          <tbody key='tbody'>
            <tr key='header'>
              <th>ASIN</th>
              <th>Category</th>
              <th>Dimensions</th>
              <th>Rank</th>
            </tr>
            {products.map((product) => <TableRow key={product.id} product={product} />)}
          </tbody>
        </table>)} 
    </div>
  )
}

export default Table