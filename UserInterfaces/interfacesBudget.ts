// interfaces for creating budget of IT professions

interface YearlyBudget {
    year: number;
    role: string;
    averageSalary: number;
}

interface TenYearBudget {
    budgets: YearlyBudget[];
    calculateTotalBudget(): number;
    addYearlyBudget(year: number, role: string, averageSalary: number): void;
    getAverageSalaryForRole(role: string): number;
}

class ITBudget implements TenYearBudget {
    budgets: YearlyBudget[];

    constructor() {
        this.budgets = [];
        for (let year = 2024; year <= 2033; year++) {
            this.addYearlyBudget(year, "Software Engineer", 90000 + (year - 2024) * 5000);
            this.addYearlyBudget(year, "Data Scientist", 100000 + (year - 2024) * 5000);
            this.addYearlyBudget(year, "System Administrator", 80000 + (year - 2024) * 2000);
        }
    }

    addYearlyBudget(year: number, role: string, averageSalary: number): void {
        const newBudget: YearlyBudget = { year, role, averageSalary };
        this.budgets.push(newBudget);
    }

    calculateTotalBudget(): number {
        return this.budgets.reduce((total, budget) => total + budget.averageSalary, 0);
    }

    getAverageSalaryForRole(role: string): number {
        const roleBudgets = this.budgets.filter(budget => budget.role === role);
        const totalSalary = roleBudgets.reduce((total, budget) => total + budget.averageSalary, 0);
        return roleBudgets.length > 0 ? totalSalary / roleBudgets.length : 0;
    }
}
const itBudget = new ITBudget();
console.log("Yearly Budgets:");
itBudget.budgets.forEach(budget => {
    console.log(`Year: ${budget.year}, Role: ${budget.role}, Average Salary: $${budget.averageSalary}`);
});

const totalBudget = itBudget.calculateTotalBudget();
console.log(`\nTotal budget over 10 years: $${totalBudget}`);
console.log(`\nAverage salary for Software Engineer over 10 years: $${itBudget.getAverageSalaryForRole("Software Engineer")}`);
console.log(`Average salary for Data Scientist over 10 years: $${itBudget.getAverageSalaryForRole("Data Scientist")}`);
console.log(`Average salary for System Administrator over 10 years: $${itBudget.getAverageSalaryForRole("System Administrator")}`);









