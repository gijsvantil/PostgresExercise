var pg = require ('pg');

var connectionString = "postgres://pgadmin:pwdaccess@localhost/gijsvantil"
pg.connect(connectionString, function (error, client, done){
	client.query('select * from hats', function (error, result){
		console.log (result.rows);

		done()
		pg.end()
	})
})
