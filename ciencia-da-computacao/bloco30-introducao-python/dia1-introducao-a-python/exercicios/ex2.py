def average(grades):
  sum = 0
  for grade in grades:
    sum += grade
  
  arithmeticAvg = sum / len(grades)

  return arithmeticAvg
