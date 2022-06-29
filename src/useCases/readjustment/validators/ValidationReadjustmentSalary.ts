import { ValidationError } from '@shared/errors/ValidationException';
import { Employee } from '@entities/Employee';
import { IReadjustmentValidation } from '@interfaces/validator/ReadjustmentValidation';

export class ValidationReadjustmentSalary implements IReadjustmentValidation {
   private maxReadjustmentPercent: number = 0.4;

   public validate(employee: Employee, increasement: number): void {
      let currentEmployeeSalary: number = employee.getSalary;
      let readjustmentPercent: number = (increasement / currentEmployeeSalary) -1;

      if(readjustmentPercent > this.maxReadjustmentPercent) {
         throw new ValidationError("O reajuste não pode ser superior a 40% do salario atual");
      }
   }

}