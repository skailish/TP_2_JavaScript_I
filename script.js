const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ['Centro', 'Caballito'],
    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito" },
        { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito" },
        { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
        { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
        { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "HDD Wezter Dishital"], sucursal: "Centro" },
        { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
        { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" }
    ],
    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};


// precioMaquina(componentes, precios): dado una lista de componentes y una lista de precios, devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

const precioMaquina = (componentes, precios) => {

    const definirPrecio = (componente, precios) => {
        let precioComponente = 0;
        precios.forEach(precio => {
            precioComponente = precio.componente === componente ? precio.precio : precioComponente
        });

        return precioComponente
    }

    const aPrecioFinal = (precioParcial, componente, precios) => {
        precioParcial += definirPrecio(componente, precios);
        return precioParcial
    }

    return componentes.reduce((listaParcial, componente) => aPrecioFinal(listaParcial, componente, precios), 0);
}


// cantidadVentasComponente(componente, ventas): dado un componente y una lista de ventas, devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió.

const cantidadVentasComponente = (componente, ventas) => {

    const aCantidadDeVentas = (cantidadParcial, venta) => {

        cantidadParcial += (venta.componentes).includes(componente) ? 1 : 0

        return cantidadParcial
    }

    return ventas.reduce(aCantidadDeVentas, 0)

}



// vendedoraDelMes(mes, anio, local) : dados dos parámetros numéricos(`mes`, `anio`) y un objeto`local`, devuelve el nombre de la vendedora que más vendió en plata en el mes.No cantidad de ventas, sino importe total de las ventas.El importe de una venta es el que indica la función`precioMaquina`.El mes es un número entero que va desde el 1(enero) hasta el 12(diciembre).

const vendedoraDelMes = (mes, anio, local) => {

    const aVentasPorMes = (venta, mes, anio) => {
        return (venta.fecha.getMonth() + 1) === mes && venta.fecha.getFullYear() === anio
    }

    const aVentasPorVendedora = (listaParcial, venta, local) => {
        const precios = [...local.precios];
        listaParcial[venta.nombreVendedora] = listaParcial[venta.nombreVendedora] + precioMaquina([...venta.componentes], precios) || precioMaquina([...venta.componentes], precios);
        return listaParcial
    }

    const aVendedoraDelMes = (vendedoraDelMes, vendedora, ventasPorVendedora) => {
        return ventasPorVendedora[vendedora] > ventasPorVendedora[vendedoraDelMes] ? vendedora : vendedoraDelMes
    }

    const ventasPorVendedora = local.ventas.filter((venta) => aVentasPorMes(venta, mes, anio)).reduce((listaParcial, venta) => aVentasPorVendedora(listaParcial, venta, local), {})


    return local.vendedoras.reduce((vendedoraDelMes, vendedora) => aVendedoraDelMes(vendedoraDelMes, vendedora, ventasPorVendedora))

}



// ventasMes(mes, anio, local): obtiene el valor total de las ventas de un mes.El mes es un número entero que va desde el 1(enero) hasta el 12(diciembre).

const ventasMes = (mes, anio, local) => {
    const aVentasPorMes = (venta, mes, anio) => {
        return (venta.fecha.getMonth() + 1) === mes && venta.fecha.getFullYear() === anio
    }
    return local.ventas.filter(venta => aVentasPorMes(venta, mes, anio)).length
}


// ventasVendedora(nombre, local): obtiene el valor total de todas las ventas realizadas por una vendedora sin límite de fecha.

const ventasVendedora = (nombre, local) => {

    const ventasPorVendedora = (sumaParcial, venta, nombre) => sumaParcial += venta.nombreVendedora === nombre ? 1 : 0;

    return local.ventas.reduce((sumaParcial, venta) => ventasPorVendedora(sumaParcial, venta, nombre), 0)
}


// componenteMasVendido(ventas): dada una lista de ventas, devuelve el nombre del componente que más cantidad de ventas tuvo históricamente.El dato de la cantidad de ventas es el que indica la función`cantidadVentasComponente`

const componenteMasVendido = ventas => {

    const aVentasPorComponente = (sumaParcial, venta, ventas) => {
        venta.componentes.forEach(componente => {
            sumaParcial[componente] = cantidadVentasComponente(componente, ventas);
        });
        return sumaParcial
    }

    const conMayorVentas = (componenteConMayorVentas, componente, ventasPorComponente) => {
        return ventasPorComponente[componenteConMayorVentas] > ventasPorComponente[componente] ? componenteConMayorVentas : componente
    }

    const ventasPorComponente = ventas.reduce((sumaParcial, venta) => aVentasPorComponente(sumaParcial, venta, ventas), {})

    const componentes = Object.keys(ventasPorComponente)

    return componentes.reduce((componenteConMayorVentas, componente) => conMayorVentas(componenteConMayorVentas, componente, ventasPorComponente))

}


//huboVentas(mes, anio, ventas): indica si hubo ventas en un mes determinado.El mes es un número entero que va desde el 1(enero) hasta el 12(diciembre).

const huboVentas = (mes, anio, ventas) => {

    const huboVentas = (venta, mes, anio) => (venta.fecha.getMonth() + 1) === mes && venta.fecha.getFullYear() === anio

    return ventas.some(venta => huboVentas(venta, mes, anio))
}



// ventasSucursal(sucursal, local): obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
const ventasSucursal = (sucursal, local) => {
    const ventasPorSucursal = (sumaParcial, venta, sucursal) => sumaParcial += venta.sucursal === sucursal ? 1 : 0;

    return local.ventas.reduce((sumaParcial, venta) => ventasPorSucursal(sumaParcial, venta, sucursal), 0)
}

// Las funciones ** ventasSucursal ** y ** ventasVendedora ** tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta.Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir ?

const conteoDeVentasPorParametro = (parametro, local) => {

    const obtenerPropiedad = (objeto, valor) => {
        return Object.keys(objeto).find(propiedad => objeto[propiedad] === valor);
    }

    const ventasPorParametro = (sumaParcial, venta, parametro) => {
        const propiedad = obtenerPropiedad(venta, parametro);
        sumaParcial += venta[propiedad] === parametro ? 1 : 0;
        return sumaParcial
    }

    return local.ventas.reduce((sumaParcial, venta) => ventasPorParametro(sumaParcial, venta, parametro), 0)
}

// sucursalDelMes(mes, anio, local) **: dado dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes.No cantidad de ventas, sino importe total de las ventas.El importe de una venta es el que indica la función`precioMaquina`.El mes es un número entero que va desde el 1(enero) hasta el 12(diciembre).

const sucursalDelMes = (mes, anio, local) => {

    const aVentasPorMes = (venta, mes, anio) => {
        return (venta.fecha.getMonth() + 1) === mes && venta.fecha.getFullYear() === anio
    }

    const aVentasPorSucursal = (listaParcial, venta, local) => {
        const precios = [...local.precios];
        listaParcial[venta.sucursal] = listaParcial[venta.sucursal] + precioMaquina([...venta.componentes], precios) || precioMaquina([...venta.componentes], precios);
        return listaParcial
    }

    const aVendedoraDelMes = (sucursalDelMes, sucursal, ventasPorSucursal) => {
        return ventasPorSucursal[sucursal] > ventasPorSucursal[sucursalDelMes] ? sucursal : sucursalDelMes
    }

    const ventasPorSucursal = local.ventas.filter((venta) => aVentasPorMes(venta, mes, anio)).reduce((listaParcial, venta) => aVentasPorSucursal(listaParcial, venta, local), {})

    return local.sucursales.reduce((sucursalDelMes, sucursal) => aVendedoraDelMes(sucursalDelMes, sucursal, ventasPorSucursal))

}


// renderPorMes(local): Muestra una lista ordenada del importe total vendido por cada mes / año, p.ej. (los mostrados datos no son los resultados reales):// ```
// Ventas por mes:
//    Total de enero 2019: XXXX
//    Total de febrero 2019: XXXX
// ```

const renderPorMes = local => {
    const aRenderizado = (renderParcial, fecha, ventasPorMes) => {
        renderParcial += `- Total de ${fecha} : ${ventasPorMes[fecha]}\n`
        return renderParcial
    };

    const obtenerMesAnio = fecha => {
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

        const fechaCompleta = meses[fecha.getMonth()] + " " + fecha.getFullYear();

        return fechaCompleta
    }


    const aVentasPorMes = (listaParcial, venta, local) => {
        const precios = [...local.precios];
        listaParcial[obtenerMesAnio(venta.fecha)] = listaParcial[obtenerMesAnio(venta.fecha)] + precioMaquina([...venta.componentes], precios) || precioMaquina([...venta.componentes], precios);
        return listaParcial
    }

    const ventasPorMes = local.ventas.reduce((listaParcial, venta) => aVentasPorMes(listaParcial, venta, local), {})

    const fechas = Object.keys(ventasPorMes);

    return fechas.reduce((renderParcial, fecha) => aRenderizado(renderParcial, fecha, ventasPorMes), `Ventas por mes:\n----------------------------\n`)
}

console.log(renderPorMes(local))

// renderPorSucursal(local): Muestra una lista del importe total vendido por cada sucursal, p.ej. (los datos mostrados no son los resultados reales):

// ```
// Ventas por sucursal:
// ----------------------------
//   - Total de Centro: 4195
//   - Total de Caballito: 1265
// ```

const renderPorSucursal = local => {

    const aRenderizado = (renderParcial, sucursal, ventasPorSucursal) => {
        renderParcial += `- Total de ${sucursal} : ${ventasPorSucursal[sucursal]}\n`
        return renderParcial
    };

    const aVentasPorSucursal = (listaParcial, venta, local) => {
        const precios = [...local.precios];
        listaParcial[venta.sucursal] = listaParcial[venta.sucursal] + precioMaquina([...venta.componentes], precios) || precioMaquina([...venta.componentes], precios);
        return listaParcial
    }

    const ventasPorSucursal = local.ventas.reduce((listaParcial, venta) => aVentasPorSucursal(listaParcial, venta, local))

    return local.sucursales.reduce((renderParcial, sucursal) => aRenderizado(renderParcial, sucursal, ventasPorSucursal), `Ventas por sucursal:\n----------------------------\n`)
}

console.log(renderPorSucursal(local))

// render(local): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó, p.ej. (los datos mostrados no son los resultados reales):

// ```
// Reporte
// ==========================================
//  Ventas por mes:
//   - Total de enero 2019: 1250
//   - Total de febrero 2019: 4210
// ------------------------------------------
//  Ventas por sucursal:
//   - Total de Centro: 4195
//   - Total de Caballito: 1265
// ------------------------------------------
//  Producto estrella: Monitor GPRS 3000
// ------------------------------------------ 
//  Vendedora que más ingresos generó: Grace
// ```

const render = local => {


    const aRenderizado = (renderParcial, sucursal, local) => {
        renderParcial += `${sucursal} : ${ventasSucursal(sucursal, local)}\n`
        return renderParcial
    };


    return local.sucursales.reduce((renderParcial, sucursal) => aRenderizado(renderParcial, sucursal, local), `Ventas por sucursal:\n----------------------------\n`)

}
