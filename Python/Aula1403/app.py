# nome = input('Digite seu primeiro nome: ').title()
# sobrenome = input('Digite seu sobrenome: ').title()
# print('Processando...')
# print('Usuario %s %s cadastrado')
# print(f'Usuario {nome} {sobrenome} cadastrado' % (nome, sobrenome))

def cadastrinho(facul, ano):
    nome = input('Digite seu primeiro nome: ').title()
    sobrenome = input('Digite seu sobrenome: ')
    print('Processando...')
    print(f'Usuario {nome} {sobrenome} esta na {facul} em {ano}')
    
print('Ola, bem vindo(o)')
cadastrinho('Cruzeiro do Norte', 2024)