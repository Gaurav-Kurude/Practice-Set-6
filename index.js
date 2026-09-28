function scholarship(age, isStudent, familyIncome) {
  if (age <= 25 && isStudent == true && familyIncome <= 5000) {
    console.log("Eligible for Scholarship");
  } else if (age > 70 && isStudent == false) {
    console.log("Eligible for Scholarship");
  } else {
    console.log("Not Eligible for Scholarship");
  }
}

scholarship(22, true, 40000);
scholarship(82, false, 40000);

console.log("---------------------------------");

function promotion(yearsOfService, isManager) {
  if (yearsOfService >= 5 && isManager == true) {
    console.log("True");
  } else {
    console.log("False");
  }
}

promotion(7, true);

console.log("------------------------------");

const products = [
  {
    name: "Smartphone",
    category: "Electronics",
    retailSales: 20000,
    onlineSales: 35000,
    wholesaleSales: 15000,
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    retailSales: 8000,
    onlineSales: 12000,
    wholesaleSales: 5000,
  },
  {
    name: "Sofa",
    category: "Furniture",
    retailSales: 25000,
    onlineSales: 10000,
    wholesaleSales: 30000,
  },
  {
    name: "Laptop",
    category: "Electronics",
    retailSales: 40000,
    onlineSales: 50000,
    wholesaleSales: 20000,
  },
  {
    name: "Jeans",
    category: "Clothing",
    retailSales: 10000,
    onlineSales: 15000,
    wholesaleSales: 7000,
  },
  {
    name: "Bed",
    category: "Furniture",
    retailSales: 30000,
    onlineSales: 12000,
    wholesaleSales: 20000,
  },
  {
    name: "Headphones",
    category: "Electronics",
    retailSales: 15000,
    onlineSales: 18000,
    wholesaleSales: 9000,
  },
  {
    name: "Jacket",
    category: "Clothing",
    retailSales: 12000,
    onlineSales: 17000,
    wholesaleSales: 6000,
  },
];

let totalSales = products.map(
  (product) =>
    product.retailSales + product.onlineSales + product.wholesaleSales,
);
console.log(totalSales);

console.log("====== Sales Report =====");
console.log("Most Profitable Product");
console.log("-------------");

const mostProfitableProduct = products.reduce((max, product) =>
  product.totalSales > max.totalSales ? product : max,
);

const totalSalesAllProducts = products.reduce(
  (sum, product) => sum + product.totalSales,
  0,
);

const totalRetailSales = products.reduce(
  (sum, product) => sum + product.retailSales,
  0,
);

const totalOnlineSales = products.reduce(
  (sum, product) => sum + product.onlineSales,
  0,
);

const totalWholesaleSales = products.reduce(
  (sum, product) => sum + product.wholesaleSales,
  0,
);

const averageSalesAllProducts = totalSalesAllProducts / products.length;

const averageRetailSales = totalRetailSales / products.length;

const averageOnlineSales = totalOnlineSales / products.length;

const averageWholesaleSales = totalWholesaleSales / products.length;

console.log(`
====== Sales Report =====
Most Profitable Product
------
Name: ${mostProfitableProduct.name}
Category: ${mostProfitableProduct.category}
Total Sales: ${mostProfitableProduct.totalSales}

Sales Average
------
Total Sales of All Products: ${totalSalesAllProducts}
Average Sales of All Products: ${averageSalesAllProducts}
Average Retail Sales: ${averageRetailSales}
Average Online Sales: ${averageOnlineSales}
Average Wholesale Sales: ${averageWholesaleSales}
`);
