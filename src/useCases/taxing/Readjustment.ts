export interface Readjustment {
   value(): number;
   date(): Date;
}

export interface ReadjustmentWithTaxes {
   taxValue(): number;
}

// export interface ReadjustmentWithTaxes extends Readjustment {
//    taxValue(): number;
// }