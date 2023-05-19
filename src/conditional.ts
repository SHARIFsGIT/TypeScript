type TypeA = boolean;
type TypeB = TypeA extends boolean? boolean: null;

type TypeC = string;
type TypeD = TypeC extends boolean? string: null;

// Nested condition
type TypeE = TypeA extends number? number:TypeC extends boolean? string: null;