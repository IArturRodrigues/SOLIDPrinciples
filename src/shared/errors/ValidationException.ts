export class ValidationError extends Error {
   constructor(message: string) {
      super(message);

      Object.setPrototypeOf(this, ValidationError.prototype);
   }

   //exemple method
   sayHello(): string {
      return `Hello ${this.message}`;
   }
}