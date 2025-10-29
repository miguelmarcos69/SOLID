(() => {
  type Gender = "M" | "F";
  /* class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    } 
  }
  */
  // No aplicando el principio de responsabilidad única
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthdate);
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "user@example.com",
    "admin",
    new Date(),
    "John Doe",
    "M",
    new Date("1990-01-01")
  );

  console.log(userSettings);
  console.log(userSettings.checkCredentials());

  /*   const newPerson = new Person("Fernando", "M", new Date("1985-10-21"));
  console.log(newPerson); */
})();
