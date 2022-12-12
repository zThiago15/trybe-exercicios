def biggerName(listNames):
  bigger = ''
  for index, name in enumerate(listNames):
    currentName = listNames[index]
    nextName = listNames[index + 1]

    if (len(currentName) > len(nextName)):
      bigger = currentName
    elif (len(nextName) > len(currentName)):
      bigger = nextName
    
    return bigger
