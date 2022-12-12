def isTriangle(s1, s2, s3):
  is_triangle = s1 + s2 > s3 and s1 + s3 > s2 and s2 + s3 > s1

  if is_triangle == False:
    return 'Não é triângulo'

  if (s1 == s2 and s2 == s3):
    return 'Triângulo equilátero'
  elif (s1 != s2 and s2 != s3):
    return 'Triângulo escaleno'
  else:
    return 'Triângulo Isósceles'

