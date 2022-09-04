export interface IProfile {
  first_name: string;
  last_name: string;
  age?: number;
  description?: string;
}

export interface IProfileMethods {
  fullName(): string;
}
