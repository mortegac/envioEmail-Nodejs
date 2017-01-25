## INSTALACION  ##
`
1.- Instalar NodeJS y NPM`: 
	* Para sistemas operativos Linux 	y Windows [Ingrese Aqui](http://www.w3resource.com/node.js/installing-node.js-windows-and-linux.php)
	* Para sistemas operativos OSX [Ingrese Aqui](https://coolestguidesontheplanet.com/installing-node-js-on-macos/). 
	* Si necesita utilizar varias versiones de node puede usar [nvm](https://github.com/creationix/nvm)

2.- Instalar dependencias:   
```
$ npm install
```


#USO#
___________________________________________________________________________
1.- Editar la linea 13 del archivo envioEmail.js y agregar el email y la clave
	
	```
	    auth: {
	    	user: 'email@gmail.com',
	    	pass: 'CLAVE'
    	}
	```

2.- En el terminal digitar:
	
	
	```
	$ node envioEmail.js [NOMBRE] [EMAIL]
	```
	Donde:
		[NOMBRE] = Corresponde al Nombre de destino
		[EMAIL]  = Corresponde al email de destino 




