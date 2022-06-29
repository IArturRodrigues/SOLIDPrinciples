import { Employee } from '@entities/Employee';
import { ValidationError } from '@shared/errors/ValidationException';
import { IReadjustmentValidation } from '@interfaces/validator/ReadjustmentValidation';

export class ValidationPeriodBetweenReadjustment implements IReadjustmentValidation {

   public validate(employee: Employee, increasement: number): void {
      if(!this.lastReadjustmentWasAtSixMonthsOrMore(employee.getLastReadjustmentDate)) {
         throw new ValidationError("O intervalo entre os reajustes deve ser maior que 6 meses");
      }
   }

   private lastReadjustmentWasAtSixMonthsOrMore(lastReadjustmentDate: Date): boolean {
      let currentDate = new Date();
      let endDate = new Date(
         lastReadjustmentDate.getFullYear(),
         lastReadjustmentDate.getMonth() + 6,
         lastReadjustmentDate.getDay() + 1
      );

      return lastReadjustmentDate < currentDate && currentDate < endDate;
   }

}