export const validation = {
  username: {
    required: true,
    pattern: /^[A-Za-z][A-Za-z0-9]{5,15}$/,
    minLength: 6,
    maxLength: 20,
  },
  continent: {
    required: true,
    pattern: /^((?!default).)*$/,
  },
  email: {
    required: true,
    pattern: /^([\w.]{6,16})+@([\w-]+\.)+[\w-]{2,4}$/,
    minLength: 8,
    maxLength: 24,
  },
  birthday: {
    required: true,
    pattern: /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
  },
  picture: {
    required: true,
    pattern: /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/,
  },
  opinionText: {
    required: true,
    pattern: /([0-9a-zA-Z.,'`!?:;-]\s*){20,300}$/,
    minLength: 20,
    maxLength: 300,
  },
  isConfirm: {
    required: true,
  },
};
