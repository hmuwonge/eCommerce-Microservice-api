// Function to generate a random UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to generate a random MongoDB ObjectId
function generateObjectId() {
    const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
    const machineId = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    const processId = Math.floor(Math.random() * 65536).toString(16).padStart(4, '0');
    const counter = Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    
    return `${timestamp}${machineId}${processId}${counter}`;
}

// Function to generate a random date within the last 30 days
function randomDate() {
    const now = new Date();
    const past = new Date(now);
    past.setDate(now.getDate() - 30);
    return new Date(past.getTime() + Math.random() * (now.getTime() - past.getTime()));
}

// Create orders array starting with your specific order
var orders = [
   {
      "_id": ObjectId("507f1f77bcf86cd799439011"),  // Your specified _id as ObjectId
      "userID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "orderDate": "2025-04-12T10:49:10.177Z",
      "orderItems": [
        {
          "productID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "unitPrice": 1000,
          "quantity": 5
        }
      ]
   }
];

// Generate 15 more order records
for (var i = 0; i < 15; i++) {
    var orderItemsCount = Math.floor(Math.random() * 3) + 1; // 1-3 items per order
    var orderItems = [];
    
    for (var j = 0; j < orderItemsCount; j++) {
        orderItems.push({
            "productID": generateUUID(),
            "unitPrice": Math.floor(Math.random() * 900) + 100, // $100-$1000
            "quantity": Math.floor(Math.random() * 10) + 1 // 1-10 items
        });
    }
    
    orders.push({
        "_id": ObjectId(generateObjectId()), // MongoDB-style ObjectId
        "userID": generateUUID(),
        "orderDate": randomDate().toISOString(),
        "orderItems": orderItems
    });
}

// Switch to your database
var db = db.getSiblingDB("OrdersDatabase");

// Insert the generated orders
db.orders.insertMany(orders);

// Print confirmation
print(`Successfully inserted ${orders.length} orders into the database.`);
print(`Including your specified order with _id: ObjectId("507f1f77bcf86cd799439011")`);