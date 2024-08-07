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
            if (year <= 2026) {
                this.addYearlyBudget(year, "Software Engineer", 100000);
            } else if (year <= 2029) {
                this.addYearlyBudget(year, "Data Scientist", 115000);
            } else {
                this.addYearlyBudget(year, "System Administrator", 90000);
            }
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

const totalBudget = itBudget.calculateTotalBudget();
console.log(`Total budget over 10 years: $${totalBudget}`);

const averageSoftwareEngineerSalary = itBudget.getAverageSalaryForRole("Software Engineer");
console.log(`Average salary for Software Engineer over 10 years: $${averageSoftwareEngineerSalary}`);

const averageDataScientistSalary = itBudget.getAverageSalaryForRole("Data Scientist");
console.log(`Average salary for Data Scientist over 10 years: $${averageDataScientistSalary}`);

const averageSysAdminSalary = itBudget.getAverageSalaryForRole("System Administrator");
console.log(`Average salary for System Administrator over 10 years: $${averageSysAdminSalary}`);