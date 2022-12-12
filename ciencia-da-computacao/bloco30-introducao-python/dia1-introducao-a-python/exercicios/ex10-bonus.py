def gasStation(littersSold, fuelType):
  if (fuelType == 'A'):
    priceGas = 2.50

    if littersSold <= 20:
      discount =  priceGas - (priceGas * 3 / 100)
    else:
      discount = priceGas - (priceGas * 5 / 100)

    return discount
    
  elif (fuelType == 'G'):
    priceAlcohol = 1.90

    if littersSold <= 20:
      discount = priceAlcohol - (priceAlcohol * 4 / 100)
    else:
      discount = priceAlcohol - (priceAlcohol * 6 / 100)

    return discount

print(gasStation(5, 'G'))