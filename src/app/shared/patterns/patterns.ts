export const emailValidatorRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

interface PostCodePattern {
  postCode: string;
}

const postCodePattern: PostCodePattern = {
  postCode: '[0-9]{2}-[0-9]{3}',
};

export default postCodePattern;
