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

type TaskDataType = {
  title: string;
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

export const TaskValidation = (data: TaskDataType) => {
  if (!data?.title) {
    return { error: "Enter a title for this task." };
  }

  if (data?.title?.length > 100)
    return {
      error:
        "The title exceeds the 100 character limit. Please reduce the length and try again.",
    };
};
