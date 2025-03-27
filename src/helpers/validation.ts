import isEmail from "validator/lib/isEmail";

type CredentialOptionsType = {
  validatePassword?: boolean;
  validatePasswordCreation?: boolean;
};

type CredentialDataType = {
  email: string;
  password?: string;
  passwordRepeat: string;
};

export const CredentialValidation = (
  data: CredentialDataType,
  options: CredentialOptionsType = {},
) => {
  if (!data?.email || !isEmail(data?.email)) {
    return { error: "Insert a existent and valid e-mail." };
  }

  if (options.validatePassword) {
    if (!data?.password) return { error: "Insert or check your password." };

    return;
  }

  if (options.validatePasswordCreation) {
    if (!data?.password || !data?.passwordRepeat) {
      return { error: "Insert or check your password." };
    }

    if (data?.password !== data?.passwordRepeat) {
      return { error: "Passwords do not match, please check and try again." };
    }
  }
};
