"""Praticando conjunto set(TAD)"""
estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

set_estudantes = set(estudantes)
set_lista1 = set(lista1_entregues)
set_lista2 = set(lista2_entregues)

#Quem ainda não entregou a lista1?
print(set_estudantes.difference(set_lista1))

#Quem já entregou as duas listas?
print(set_lista2.union(set_lista1))

#Quem já entregou qualquer uma das duas listas?
print(set_estudantes.intersection(set_lista1))
print(set_estudantes.intersection(set_lista2))

#Quem ainda não entregou nenhuma das listas?
print(set_estudantes.difference(set_lista1).difference(set_lista2))
