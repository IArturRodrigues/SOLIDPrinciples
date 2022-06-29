import { Employee } from '@entities/Employee';
import { IReadjustmentValidation } from '@interfaces/validator/ReadjustmentValidation';

export class ReadjustmentUseCase {
   private validations: IReadjustmentValidation[];

   constructor(validations: IReadjustmentValidation[]) {
      this.validations = validations;
   }
   
   public readjustmentEmployeeSalary(employee: Employee, increasement: number): void {
      this.validations.forEach(validation => validation.validate(employee, increasement));
      
      employee.updateSalary(increasement);
   }

}