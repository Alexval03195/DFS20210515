


x=0;
while x<=4:
   
##    x+=1;
    user = input("Dame tu susario ");
    password = input("Dame tu contraseña ");

    if user=="Alex" and password=="3ct" :
        print("Bienvenido "+ user);
        x=5
    elif user!="Alex" and password=="3ct":
        print("Usuario Incorrecto");
        print("intento "+ str(x+1));
        
        x+=1;
    elif password!="3ct" and user=="Alex":
        print("Contraseña incorrecta");
        print("intento "+ str(x+1));
        x+=1;
    else:
        print("Validar datos");
        print("intento "+ str(x+1));
        x+=1;
    if  x==3:
        print("Usario Bloqueado");
        x=5
       
