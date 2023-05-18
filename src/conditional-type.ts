type TypeA = number;
type TypeB = number;
type TypeC = TypeA extends string ? string : TypeB extends string ? string : null;