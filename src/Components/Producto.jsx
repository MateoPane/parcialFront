const Producto = ({item}) => {
  return (
    <div>
        <img src={item.imagen} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <h3>Precio: ${item.precio}</h3>
        <button>Comprar Articulo</button>
    </div>
  )
}

export default Producto