class Ventilador:
  def __init__(self, cor, potencia, tensao, preco) -> None:
    self.cor = cor
    self.potencia = potencia
    self.tensao = tensao
    self.preco = preco
    self.ligado = False


class Pessoa:
  def __init__(self, nome, saldo) -> None:
    self.nome = nome
    self.saldo = saldo
    self.ventilador = False

  def comprar_ventilador(self, ventilador):
    if ventilador.preco <= self.saldo:
      self.saldo -= ventilador.preco
      self.ventilador = True
    
  def __str__(self) -> str:
    if self.ventilador:
      return f"{self.nome} possui um ventilador"
    return f"{self.nome} não possui um ventilador"


# Instâncias
meu_ventilador = Ventilador('Preto', '1200', '127', '500')
thiago = Pessoa('Thiago', '800')

thiago.comprar_ventilador(meu_ventilador)
print(thiago.__str__())