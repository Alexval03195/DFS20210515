cont=0
saldo=0
while cont<2:
    deposito=0
    retiro=0
    print("1)consultar saldo ")
    print("2) Deposito ")
    print("3) Retiro ")
    print("4) Salir ")
    op=int(input("Elija una opcion "))
    if(op==1):
        print("Su saldo es "+ str(saldo))
        cont=1
    if(op==2):
        deposito=int(input("cuanto desea depositar "))
        saldo+=deposito
        cont=1        
    if(op==3):
        retiro=int(input("cuanto desea retiro "))
        if(saldo>=retiro):
            saldo-=retiro
        else:
            print("Saldo insuficente")
           
    if(op==4):
        print("gracias por su visita ")
        cont=14

