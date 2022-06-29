import { Employee } from "@entities/Employee";

export interface IReadjustmentValidation {
   validate(employee: Employee, increasement: number): void;
}