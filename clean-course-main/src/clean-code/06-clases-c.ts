(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia, evitar extends

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  // No aplicando el principio de responsabilidad única
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor(
     {
      name, gender,birthdate,
      email, role,
      workingDirectory, lastOpenFolder
     }: UserSettingsProps
    ) {
      this.person = new Person({name, gender, birthdate});
      this.user = new User({email, role});
      this.settings = new Settings({workingDirectory, lastOpenFolder});
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "miguel@gmail.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Miguel",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log(userSettings);
  /*
  console.log(userSettings.checkCredentials()); */
})();
