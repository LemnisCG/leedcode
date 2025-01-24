# Hacer que el usuario debera cargar los precios de los productos 
# Si el usuario ingresa 0 se termina el programa
# Si uno de los montos del usuario es inferios a 50.000, entonces se le aplicara el descuento de 7% sobre el total
# en caso de que sobrepase los 50.000 se le aplicara el 12% de descuento

def calcularDescuentos():
    sumarMontoSinDescuento = 0
    precioAPagar = 0
    descuentoInferior = 7 / 100
    descuentoSuperior = 12 / 100

    while True:
        ingresarMontoProducto = float(input('Ingrese el monto de su producto: '))
        if ingresarMontoProducto == 0:
            break  

        sumarMontoSinDescuento += ingresarMontoProducto

    print('-------------------------------------------------------------------------------')

    if sumarMontoSinDescuento < 50000:
        aplicandoDescuento = sumarMontoSinDescuento * descuentoInferior
    else:
        aplicandoDescuento = sumarMontoSinDescuento * descuentoSuperior

    precioAPagar = sumarMontoSinDescuento - aplicandoDescuento

    print(f"Total sin descuentos: ${sumarMontoSinDescuento:.2f}")
    print(f"Monto del descuento: ${aplicandoDescuento:.2f}")
    print(f"Total a pagar: ${precioAPagar:.2f}")

calcularDescuentos()


