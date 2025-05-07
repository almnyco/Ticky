import isEmail from "validator/lib/isEmail";

type CredentialOptionsType = {
  validateName?: boolean;
  validatePassword?: boolean;
  validatePasswordCreation?: boolean;
};

type CredentialDataType = {
  email: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  password_repeat: string;
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

  if (options?.validateName) {
    if (!data?.firstName || !data?.lastName) {
      return { error: "Insert or check your first name and last name." };
    }
  }

  if (options.validatePassword) {
    if (!data?.password) return { error: "Insert or check your password." };
  }

  if (options.validatePasswordCreation) {
    if (!data?.password || !data?.password_repeat) {
      return { error: "Insert or check your password." };
    }

    if (data?.password !== data?.password_repeat) {
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
