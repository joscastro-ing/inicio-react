import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer.js'
import Producto from './components/Producto'
import  Carrito from './components/Carrito'

function App() {
  
  //Crear State de Listado de productos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: "Camisa React", precio: 50},
    {id: 2, nombre: "Camisa Express", precio: 40},
    {id: 3, nombre: "Camisa Electron", precio: 35},
    {id: 4, nombre: "Camisa Vue", precio: 25},
  ]);
  
  // Crear State de carrito de compras
  const [carrito,agregarProducto]=useState([])
  // Fecha Actual
  const fecha = new Date().getFullYear()
  
  return (
    <Fragment>
      <Header 
      titulo='Tienda virtual'
      />

{/* aqui se manda a llamar el array ,creando el boton que nos permite visualizar en consola que estamos comprando */}
      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
        <Producto 
         producto ={producto}
         key = {producto.id}
         carrito={carrito}
         agregarProducto={agregarProducto}
         productos = {productos}
         

        />

      ))}

      <Carrito 
      carrito = {carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
      fecha={fecha} 
      />
    
    </Fragment>
  );
}

export default App
