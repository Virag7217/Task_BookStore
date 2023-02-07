const db = require('../utility/database');

module.exports = class Product {
    constructor(id,title, imageUrl, description, price) {
      this.id = id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
      this.price = price;
    }
  
    static fetchAll(){
       return db.execute('SELECT * from books');
    }

    save() {
      return db.execute(
        'INSERT INTO books (title, price , imageUrl, description) VALUES (?,?,?,?)',
        [this.title,this.price,this.imageUrl,this.description]
      );
    }

    static findById(id){
      return db.execute('SELECT * FROM books WHERE books.id = ?', [id]);
  }
};
