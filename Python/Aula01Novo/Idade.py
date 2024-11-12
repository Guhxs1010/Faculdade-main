from datetime import date

ano = int(input('Digite o ano de nascimento: '))
atual = date.today()

print(f'Você tem {atual.year - ano}')