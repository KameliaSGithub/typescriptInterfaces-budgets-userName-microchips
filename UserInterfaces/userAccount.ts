interface User {
    id: number;
    username: string;
    email: string;
}

class UserAccount implements User {
    constructor(public id: number, public username: string, public email: string) {}
    
    displayUserInfo(): void {
        console.log(`User ID: ${this.id}`);
        console.log(`Username: ${this.username}`);
        console.log(`Email: ${this.email}`);
    }
}

interface Product {
    id: number;
    name: string;
    price: number;
}

class ProductItem implements Product {
    constructor(public id: number, public name: string, public price: number) {}

    displayPriceWithTax(taxRate: number): void {
        const totalPrice = this.price * (1 + taxRate / 100);
        console.log(`Product: ${this.name}`);
        console.log(`Price with ${taxRate}% Tax: $${totalPrice.toFixed(2)}`);
    }
}

interface ApiResponse<T> {
    status: number;
    data: T;
}

class ApiHandler<T> {
    constructor(private response: ApiResponse<T>) {}

    processResponse(): void {
        console.log(`Response Status: ${this.response.status}`);
        console.log(`Data Received:`);
        console.log(this.response.data);
    }
}

interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    constructor(private prefix: string) {}

    log(message: string): void {
        console.log(`[${this.prefix}] ${message}`);
    }
}

function runExample() {
    const user = new UserAccount(1, 'john_doe', 'john.doe@example.com');
    console.log("User Information:");
    user.displayUserInfo();
    console.log();

    const product = new ProductItem(101, 'Laptop', 1200);
    console.log("Product Information:");
    product.displayPriceWithTax(8); 
    console.log();

    const apiResponse: ApiResponse<string> = {
        status: 200,
        data: "Example API Response Data"
    };
    const apiHandler = new ApiHandler(apiResponse);
    console.log("API Response:");
    apiHandler.processResponse();
    console.log();

    const logger = new ConsoleLogger("App");
    
    logger.log("This is a log message.");
    logger.log("Another log message.");
}
runExample();