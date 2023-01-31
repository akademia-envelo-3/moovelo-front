interface Pattern {
  postCode: string;
  emailValidatorRegex: string;
  lettersNumbersDashesAndPolishLettersRegex: RegExp;
}

export const pattern: Pattern = {
  postCode: '[0-9]{2}-[0-9]{3}',
  emailValidatorRegex: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  lettersNumbersDashesAndPolishLettersRegex: /^([a-zA-Z0-9 ĄąĆćĘęŁłŃńÓóŚśŹźŻż -]+)$/, // jak jest w stringu to nie działa, nie wiem czemu
};
