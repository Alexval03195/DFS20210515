x=0
loc=0
vocales=["a","e","i","o","u"]
while x<2:
    loc=0
    print("1)comparar vocales ")
    print("2) salir ")

    op=int(input("Elija una opcion "))
    if(op==1):
       ingresa=input("Ingresa un caracter ");
       for i in range(len(vocales)):
            if(vocales[i]==ingresa):
                loc=1 
       if(loc==1):
           print("Es vocal")
           
       if(loc==0):
         print("no es vocal")
         
       x=1
    if(op==2):
        print("Ha elejido salir")
        x=9
       
