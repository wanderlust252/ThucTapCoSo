# API thi trắc nghiệm Build with TypeORM
#LeHieu a.k.a wanderlust252

Hãy chắc chắn rằng bạn đã cài NodeJS ^^

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

Mở file `ormconfig.json` và sửa các thông tin dưới đây sao cho phù hợp máy tính của bạn:

"type": "mysql",

"host": "localhost",

"port": 3306,

"username": "root",

"password": "",

"database": "thi-thpt-ttcs",

API:

- Login:

POST /user/login

kiểu truyền: body 
{
	"account":"aaaaa",
	"pass":"paass",
	"username":"a"
}

- Signup

POST /user/signup

kiểu truyền: body 
{
	"account":"aaaaa",
	"pass":"paass"
}
