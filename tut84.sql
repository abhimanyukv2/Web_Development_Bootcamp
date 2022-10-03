show dbs

use harryKart
show collections

db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.updateMany({name: "Moto 30s"},{$set: {price: 3, rating:1}})