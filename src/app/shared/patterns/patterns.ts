interface Pattern {
  postCode: string;
  emailValidatorRegex: string;
}

export const pattern: Pattern = {
  postCode: '[0-9]{2}-[0-9]{3}',
  emailValidatorRegex: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
};
