interface BudgetCategory {
    name: string;
    allocated: number;
    spent: number;
}
class Budget {
    private categories: BudgetCategory[] = [];

    addCategory(category: BudgetCategory): void {
        this.categories.push(category);
    }
    spend(categoryName: string, amount: number): void {
        const category = this.categories.find(c => c.name === categoryName);
        if (category) {
            if (category.spent + amount <= category.allocated) {
                category.spent += amount;
            } else {
                console.log(`Cannot spend more than allocated budget for category: ${categoryName}`);
            }
        } else {
            console.log(`Category ${categoryName} not found.`);
        }
    }

    removeCategory(categoryName: string): void {
        this.categories = this.categories.filter(c => c.name !== categoryName);
    }

    getRemainingBudget(categoryName: string): number {
        const category = this.categories.find(c => c.name === categoryName);
        if (category) {
            return category.allocated - category.spent;
        } else {
            console.log(`Category ${categoryName} not found.`);
            return 0;
        }
    }

    getTotalSpent(): number {
        return this.categories.reduce((total, category) => total + category.spent, 0);
    }

    getTotalRemainingBudget(): number {
        return this.categories.reduce((total, category) => total + (category.allocated - category.spent), 0);
    }
}
const myBudget = new Budget();
myBudget.addCategory({ name: "Food", allocated: 500, spent: 0 });
myBudget.addCategory({ name: "Transport", allocated: 300, spent: 50 });

myBudget.spend("Food", 100);
myBudget.spend("Transport", 50);
console.log(`Remaining budget for Food: ${myBudget.getRemainingBudget("Food")}`);
console.log(`Remaining budget for Transport: ${myBudget.getRemainingBudget("Transport")}`);

console.log(`Total spent budget: ${myBudget.getTotalSpent()}`);
console.log(`Total remaining budget: ${myBudget.getTotalRemainingBudget()}`);

myBudget.removeCategory("Food");
console.log(`Total remaining budget after removing Food: ${myBudget.getTotalRemainingBudget()}`);






