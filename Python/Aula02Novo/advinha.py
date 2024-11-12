from random import randint

numero = int(input('Escolha um numero: '))
computador = randint(1, 101)

while True:
    if numero == computador:
        print('Você ganhou!')
        break
    else:
        print('Numero errado...')
        numero = int(input('Insira novamente! '))