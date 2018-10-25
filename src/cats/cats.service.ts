import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  // private readonly cats: Cat[] = [];

  // create(cat: Cat) {
  //   this.cats.push(cat);
  //   console.log(this.cats);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }

  private sql_SELECT_USER = 'SELECT * FROM `cats`';
  private sql_CREATE_USER = 'INSERT INTO `cats` (id,name)  VALUES';
  private mysql = require('mysql');
  // private connection = this.mysql.createConnection({
  //     host: 'localhost',
  //     user: 'root',
  //     password: '123456',
  //     database: 'user',
  // });

  getCat() {
    const connection = this.mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sunsea103',
      database: 'cats',
    });

    connection.connect();

    const promise = new Promise((resolve, reject) => {
      connection.query(this.sql_SELECT_USER, (err, re) => {
        if (err) throw err;
        resolve(re);
      });
    });

    connection.end();

    return promise;
  }

  createCat(body) {
    const connection = this.mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sunsea103',
      database: 'cats',
    });

    connection.connect();

    const promise = new Promise((resolve, reject) => {
      const value = ` (${body.id},${body.name})`;
      connection.query(this.sql_CREATE_USER + value, (err, re) => {
        // if (err) throw err;
        resolve(re);
      });
    });

    connection.end();

    return promise;
  }
}
