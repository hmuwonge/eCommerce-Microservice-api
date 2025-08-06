// Function to generate GUID strings
function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Your original order with GUID _id
var orders = [
    {
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Stored as string
        "UserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "OrderDate": "2025-04-12T10:49:10.177Z",
        "OrderItems": [
            {
                "ProductId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "UnitPrice": 1000,
                "Quantity": 5
            }
        ]
    }
];

// Generate 15 more orders with GUID _ids
for (var i = 0; i < 15; i++) {
    var orderItemsCount = Math.floor(Math.random() * 3) + 1;
    var orderItems = [];

    for (var j = 0; j < orderItemsCount; j++) {
        orderItems.push({
            "ProductId": generateGuid(),
            "UnitPrice": Math.floor(Math.random() * 900) + 100,
            "Quantity": Math.floor(Math.random() * 10) + 1
        });
    }

    orders.push({
        "_id": generateGuid(), // GUID string
        "UserId": generateGuid(),
        "OrderDate": new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString(),
        "OrderItems": orderItems
    });
}

// Insert into MongoDB
var db = db.getSiblingDB("OrdersDatabase");
db.orders.insertMany(orders);

print(`Inserted ${orders.length} orders with GUID format _id`);