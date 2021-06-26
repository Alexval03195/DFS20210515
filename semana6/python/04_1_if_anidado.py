"""
if condicion:
	valor de verdad
	if condicio2:
		valor de verdad2
		msg, variable, estructura de control
	else:
		valor de falso2
		msg, variable, estructura de control
else:
	valor de falso1
	msg, variable, estructura de control


		Elaborar un programa que nos valide un usuario y
	una contraseña. Si el usuario es miNombre y mi 
	password es 3ct, entonces le decimos bienvenido
	en caso contrari verificar datos. Las variables son
	user "usuario" y password "password"
"""
user = input("Dame tu susario ");
password = input("Dame tu contraseña ");




if user=="Alex":
    if password=="3ct":
        print("Bienvenido "+ user);
    else:
         print("Contraseña incorrecta");


else:
     print("Usuario Incorrecto");
    
