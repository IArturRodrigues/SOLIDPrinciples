import { Employee } from "@entities/Employee";
import { Responsibility, getNextResponsibility } from "@entities/Responsibility";
import { ValidationError } from "@shared/errors/ValidationException";

export class PromoteUseCase {

   public promote(employee: Employee, wasReachedGoal: boolean): void {
      let currentResponsibility: Responsibility = employee.getResponsibility;

      if(Responsibility.ADMINISTRATOR == currentResponsibility) {
         throw new ValidationError("Gerentes nao podem ser promovidos");
      }

      if(wasReachedGoal) {
         let newResponsibility: Responsibility = getNextResponsibility(currentResponsibility);
         employee.promote(newResponsibility);
         return;
      }
      
      throw new ValidationError("Funcionario nao bateu a meta");
   }

}