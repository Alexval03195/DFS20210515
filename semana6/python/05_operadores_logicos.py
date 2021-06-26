"""
	Operadores Lógicos and, or, not. (ol)
	and devuelve verdadero si las condiciones son true.
	or devuelve verdadero si una de las condiciones es true.
	not es la acción negativa a la petición.
	
	if condicion1 and,or,not condicion2:
		valor de verdad
		msg, variable, estructura de control
	else:
		valor de falso
		msg, variable, estructura de control		
"""
user = input("Dame tu susario ");
password = input("Dame tu contraseña ");

if user=="Alex" and password=="3ct" :
    print("Bienvenido "+ user);
elif user!="Alex" and password=="3ct":
    print("Usuario Incorrecto");
elif password!="3ct" and user=="Alex":
    print("Contraseña incorrecta");
else:
    print("Validar datos");
     
