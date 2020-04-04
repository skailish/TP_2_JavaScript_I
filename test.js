describe("precioMaquina()", (componentes, precios) => {

    it("No debería modificar el parámetro", () => {
        const componentes = ["RAM Quinston", "Motherboard ASUS 1200", "Monitor GPRS 3000"];
        const precios = [
            { componente: "Monitor GPRS 3000", precio: 200 },
            { componente: "Motherboard ASUS 1500", precio: 120 },
            { componente: "Monitor ASC 543", precio: 250 },
            { componente: "Motherboard ASUS 1200", precio: 100 },
            { componente: "Motherboard MZI", precio: 30 },
            { componente: "HDD Toyiva", precio: 90 },
            { componente: "HDD Wezter Dishital", precio: 75 },
            { componente: "RAM Quinston", precio: 110 },
            { componente: "RAM Quinston Fury", precio: 230 }
        ];
        const copiaPrecios = precios;
        precioMaquina(componentes, precios)
        expect(precios).to.eql(copiaPrecios);
    });
    it("Debería sumar los precios de los componentes y devolver el resultado", () => {
        const precios = [
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
        const componentes = ["RAM Quinston", "Motherboard ASUS 1200", "Monitor GPRS 3000"];
        const resultado = precioMaquina(componentes, precios)
        expect(resultado).to.equal(410);
    })
    it("Si no existe el componente en la lista debería sumar 0", () => {
        const precios = [
            { componente: "Monitor GPRS 3000", precio: 50 },
            { componente: "Motherboard ASUS 1500", precio: 30 },//este existe
            { componente: "Monitor ASC 543", precio: 10 },
        ]
        const componentes = ["RAM Var", "Motherboard ASUS 1500", "Monitor GPRS"];
        const resultado = precioMaquina(componentes, precios)
        expect(resultado).to.equal(30);
    })

})

describe("cantidadVentasComponente()", (componente, ventas) => {

    it("No debería modificar el parámetro", () => {
        const componente = "Motherboard 1200";
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard 1200"], sucursal: "Centro" },
        ];
        const copiaVentas = ventas;
        cantidadVentasComponente(componente, ventas)
        expect(ventas).to.eql(copiaVentas);
    });
    it("Debería devolver un número", () => {
        const componente = "Motherboard ASUS 1200";
        const ventas = [
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        ];

        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.be.a.finite;
    });
    it("Debería sumar la cantidad de veces que se vendió el componente", () => {
        const componente = "Motherboard ASUS 1200";
        const ventas = [
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
        ];

        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.equal(6);
    });
    it("Si no se vendió el componente, debería dar 0", () => {
        const componente = "Motherboard ASUS";
        const ventas = [
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },

        ];
        const resultado = cantidadVentasComponente(componente, ventas);
        expect(resultado).to.equal(0);
    })
})

describe("vendedoraDelMes()", (mes, anio, local) => {
    it("No debería modificar el parámetro", () => {
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
        const mes = 2;
        const anio = 2019;
        const copiaLocal = local;
        vendedoraDelMes(mes, anio, local)
        expect(local).to.eql(copiaLocal);
    });
    it("Debería devolver un string", () => {
        const mes = 2;
        const anio = 2019;
        const local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Motherboard ASUS 1500", precio: 120 },
            ]
        };
        const resultado = vendedoraDelMes(mes, anio, local);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver el nombre de la vendedora que más facturó", () => {
        const mes = 2;
        const anio = 2019;
        const local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
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
        const resultado = vendedoraDelMes(mes, anio, local);
        expect(resultado).to.equal("Grace");

    });
})

describe("ventasMes()", (mes, anio, local) => {
    it("No debería modificar el parámetro", () => {
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            ],
        };
        const mes = 2;
        const anio = 2019;
        const copiaLocal = local;
        ventasMes(mes, anio, local)
        expect(local).to.eql(copiaLocal);
    });
    it("Debería devolver un número", () => {
        const mes = 2;
        const anio = 2019;
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            ],
        };
        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.be.a.finite;
    });
    it("Debería devolver la cantidad de ventas que se realizaron en el mes", () => {
        const mes = 2;
        const anio = 2019;
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard ASUS 1200", "RAM Quinston"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
                { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" }
            ],
        };
        const resultado = ventasMes(mes, anio, local);
        expect(resultado).to.equal(5);

    });
})

describe("ventasVendedora()", (nombre, local) => {

    it("No debería modificar el parámetro", () => {
        const nombre = "Hedy";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };
        const copiaLocal = local;
        ventasVendedora(nombre, local)
        expect(local).to.eql(copiaLocal);
    });
    it("Debería devolver un número", () => {
        const nombre = "Hedy";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };
        const resultado = ventasVendedora(nombre, local);
        expect(resultado).to.be.a.finite;
    });
    it("Debería sumar la cantidad de veces que la vendedora realizó una venta", () => {
        const nombre = "Grace";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };

        const resultado = ventasVendedora(nombre, local);
        expect(resultado).to.equal(3);
    });

})

describe("componenteMasVendido()", (ventas) => {

    it("No debería modificar el parámetro", () => {
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        ];
        const copiaVentas = ventas;
        componenteMasVendido(ventas)
        expect(ventas).to.eql(copiaVentas);
    });
    it("Debería devolver un string", () => {
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        ];
        const resultado = componenteMasVendido(ventas);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver el componente más vendido", () => {
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito" },
            { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
            { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito" },
            { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
        ];
        const resultado = componenteMasVendido(ventas);
        expect(resultado).to.equal("Motherboard ASUS 1200");
    });

})

describe("huboVentas()", (mes, anio, ventas) => {

    it("Debería devolver un booleano", () => {
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        ];
        const resultado = huboVentas(2, 2019, ventas);
        expect(resultado).to.be.a("boolean");
    });
    it("Debería devolver FALSE si no hubo ventas en el mes", () => {
        const ventas = [
            { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
        ];
        const resultado = huboVentas(3, 2019, ventas);
        expect(resultado).to.equal(false);
    });

    it("Debería devolver TRUE si hubo ventas en el mes", () => {
        const ventas = [
            { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
        ];
        const resultado = huboVentas(1, 2019, ventas);
        expect(resultado).to.equal(true);
    });

})

describe("ventasSucursal()", (sucursal, local) => {

    it("No debería modificar el parámetro", () => {
        const sucursal = "Centro";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };
        const copiaLocal = local;
        ventasSucursal(sucursal, local)
        expect(local).to.eql(copiaLocal);
    });
    it("Debería devolver un número", () => {
        const sucursal = "Caballito";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };
        const resultado = ventasSucursal(sucursal, local);
        expect(resultado).to.be.a.finite;
    });
    it("Debería sumar la cantidad de ventas de la sucursal", () => {
        const sucursal = "Centro";
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };

        const resultado = ventasSucursal(sucursal, local);
        expect(resultado).to.equal(4);
    });

})

describe("conteoDeVentas()", (key, value, local) => {
    it("Debería devolver un número", () => {
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };
        const resultado = conteoDeVentas("nombreVendedora", "Hedy", local);
        expect(resultado).to.be.a.finite;
    });
    it("Debería sumar la cantidad de ventas del parámetro pasado", () => {
        const local = {
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
            ],
        };

        const resultado = conteoDeVentas("nombreVendedora", "Grace", local);
        expect(resultado).to.equal(3);
    });
})

describe("sucursalDelMes()", (mes, anio, local) => {
    it("Debería devolver un string", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Monitor ASC 543", precio: 250 },
            ]
        };

        const resultado = sucursalDelMes(1, 2019, local);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver la sucursal que más ventas tuvo en el mes", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Caballito" },
                { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Caballito" },
                { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
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

        const resultado = sucursalDelMes(1, 2019, local);
        expect(resultado).to.equal("Caballito");
    });
})

describe("renderPorMes()", (local) => {
    it("Debería devolver un string", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
                { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Monitor ASC 543", precio: 250 },
            ]
        };

        const resultado = renderPorMes(local);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver un string con las ventas del mes, renderizadas", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Motherboard ASUS 1500", precio: 120 },
            ]
        };

        const resultado = renderPorMes(local);
        expect(resultado).to.equal("Ventas por mes:\n----------------------------\n- Total de febrero 2019 : 320\n");
    });
})

describe("renderPorSucursal()", (local) => {
    it("Debería devolver un string", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 4), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Caballito" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
            ]
        };

        const resultado = renderPorSucursal(local);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver un string con las ventas de la sucursal, renderizadas", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 2, 4), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Caballito" },
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Motherboard ASUS 1500", precio: 50 },
            ]
        };

        const resultado = renderPorSucursal(local);
        expect(resultado).to.equal("Ventas por sucursal:\n----------------------------\n- Total de Centro : 0\n- Total de Caballito : 250\n");
    });
    it("Debería devolver 0 en las sucursales que no vendieron nada", () => {
        const local = {
            sucursales: ['Centro', 'Caballito'],
            ventas: [
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
            ]
        };

        const resultado = renderPorSucursal(local);
        expect(resultado).to.equal("Ventas por sucursal:\n----------------------------\n- Total de Centro : 0\n- Total de Caballito : 0\n");
    });
})

describe("render()", (local) => {
    it("Debería devolver un string", () => {
        const local = {
            vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
            sucursales: ['Centro', 'Caballito'],
            ventas: [
                { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
                { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" }
            ],
            precios: [
                { componente: "Monitor GPRS 3000", precio: 200 },
                { componente: "Motherboard ASUS 1500", precio: 120 },
                { componente: "Monitor ASC 543", precio: 250 },
            ]
        };

        const resultado = render(local);
        expect(resultado).to.be.a.string;
    });
    it("Debería devolver un string con la información renderizada", () => {
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

        const resultado = render(local);
        expect(resultado).to.equal(`Reporte\n==========================================\nVentas por mes:\n----------------------------\n- Total de febrero 2019 : 4420\n- Total de enero 2019 : 1250\n------------------------------------------\nVentas por sucursal:\n----------------------------\n- Total de Centro : 4405\n- Total de Caballito : 1265\n------------------------------------------\nProducto estrella: Motherboard ASUS 1200\n------------------------------------------\nVendedora que más ingresos generó: Grace`);
    });

})