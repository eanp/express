const Pool = require('./../config/db')

const selectData = () => {
    return Pool.query(`SELECT * FROM products`);
}

const insertData = (data) => {
    const {id,name,stock,price} = data;
    return Pool.query(`INSERT INTO products(id,name,stock,price) VALUES(${id},'${name}',${stock},${price})`);
}

const updateData = (id,data) => {
    const {name,stock,price} = data;
    return Pool.query(`UPDATE products SET name='${name}',stock='${stock}',price='${price}' WHERE id='${id}'`);
}

const deleteData = id => {
    return Pool.query(`DELETE FROM products where id='${id}'`);
}


module.exports = {selectData, insertData,deleteData,updateData}