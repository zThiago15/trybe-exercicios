def smallerNumber(listNumbers):

  smaller = listNumbers[0]
  for n in listNumbers:
    if (n < smaller):
      smaller = n
    
  return smaller

print(smallerNumber([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))