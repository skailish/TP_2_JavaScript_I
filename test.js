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