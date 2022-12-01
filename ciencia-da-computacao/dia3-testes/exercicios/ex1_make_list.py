# Receba número N, retorna lista( [] ) de 1 à N, onde:

def make_list(n):

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

print(make_list(2))

# Tests

def test_make_list_returns_correctly():
  list = ['FizzBuzz', 1, 2]
  assert make_list(2) == ['FizzBuzz', 1, 2]
  assert 'FizzBuzz' in make_list(2)
  assert 'Buzz' in make_list(10)
  assert 'Fizz' in make_list(5)
  assert 2 in make_list(5)
