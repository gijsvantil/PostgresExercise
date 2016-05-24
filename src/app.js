var pg = require ('pg');

var connectionString = "postgres://pgadmin:pwdaccess@localhost/gijsvantil"

pg.connect(connectionString, function (error, client, done){
	var user = process.argv[2]
	client.query('select name from hats where user_id = (select id from users where name = $1)', [user], function (error, result){
		
		console.log (user)
		console.log (result.rows);

		done()
		pg.end()
	})
})

