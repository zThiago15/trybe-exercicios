def calculateTotalPrice(area):

  totalLitersOfPaint = area / 3
  
  totalPaintCans = totalLitersOfPaint // 18

  totalPrice = totalPaintCans * 80

  return (totalPaintCans, totalPrice)
print(calculateTotalPrice(100))