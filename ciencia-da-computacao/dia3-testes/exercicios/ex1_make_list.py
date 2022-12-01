# Receba número N, retorna lista( [] ) de 1 à N, onde:

def makeList(n):

  list = []
  for number in range(n + 1):
    if (number % 3 == 0 and number % 5 == 0):
      list.append('FizzBuzz')
    elif (number % 3 == 0):
      list.append('Fizz')
    elif (number % 5 == 0):
      list.append('Buzz')
    else:
      list.append(number)

  return list

print(makeList(2))

# Tests

def test_make_list_returns_correctly():
  list = ['FizzBuzz', 1, 2]
  assert makeList(2) == ['FizzBuzz', 1, 2]
  assert 'FizzBuzz' in makeList(2)
  assert 'Buzz' in makeList(10)
  assert 'Fizz' in makeList(5)
  assert 2 in makeList(5)
