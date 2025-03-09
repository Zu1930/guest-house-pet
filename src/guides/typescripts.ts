type Cities = 'Moscow' | 'SaintP' | 'EKB';

type People = {
  name: string;
  city: Cities;
};

export const Alex: People = {
  name: 'Alex',
  city: 'Moscow',
};

const foo = (a: number, b: number): number => {
  return a + b;
};

foo(1, 2);
