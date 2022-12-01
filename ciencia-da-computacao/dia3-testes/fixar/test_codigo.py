from codigo import is_odd

def test_is_odd_returns_True_when_number_is_odd():
  'Retorna True se o número é ímpar'
  assert is_odd(3) is True

def test_is_odd_returns_False_when_number_is_even():
  'Retorna False se o número é par'
  assert is_odd(10) is False