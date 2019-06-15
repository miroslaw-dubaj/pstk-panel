export interface User {
    id: number,
    firstName: string,
    lastName: string,
    status: UserStatus,
    email: string,
    dateOfAcceptance?: Date,
    dateOfFirstPayment?: Date,
    dateOfLeave?: Date,
    rank: UserRank,
    founder?: boolean,
    certificateIssued?: boolean,
    phone: number,
    imgUrl?: string,
    pidNo: string,
    pidIssuedBy: string,
    pesel: number,
    dob: Date,
    pob: string,
    address: {
        street: string,
        city: string,
        postal: string,
        state: string
    },
    occupation?: string,
    shootingPermitions?: string[],
}

export enum UserStatus {
    Waiting = "Oczekujący",
    Accepted = "Przyjęty",
    Suspended = "Zawieszony",
    Removed = "Usunięty"
}

export enum UserRank {
    Member = "Członek",
    MOB = "Członek Zarządu",
    COB = "Prezes Zarządu",
    VCOB = "Wiceprezes Zarządu",
    Treasurer = 'Skarbnik',
    MORC = 'Członek Komisji Rewizyjnej',
    CORC = 'Przewodniczący Komisji Rewizyjnej'
}

export enum UserFieldNamesTranslations {
    id = "Nr",
    imgUrl="Zdjęcie",
    firstName = "Imię",
    lastName = "Nazwisko",
    status = "Status",
    email = "Email",
    dateOfAcceptance = "Data przystąpienia",
    dateOfFirstPayment = "Data wpłaty",
    dateOfLeave = "Data rezygnacji",
    rank = "Funkcja",
    founder = "Członek założyciel",
    certificateIssued = "Wydano zaświadczenie",
    phone = "Telefon",
    pidNo = "Numer dowodu",
    pidIssuedBy = "Dowod wydał",
    pesel = "PESEL",
    dob = "Data urodzenia",
    pob = "Miejsce urodzenia",
    address = "Adres",
    city= 'Miasto',
    postal= 'Kod pocztowy',
    state= 'Województwo',
    occupation = "Zawód",
    shootingPermitions = "Uprawnienia",
}

export const ELEMENT_DATA: User[] = [
    {
        id: 1,
        imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",
        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 1,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Mirosław',
        lastName: "Dubaj",
        status: UserStatus.Accepted,
        email: "miroslaw.dubaj@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 2,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Kowalski",
        status: UserStatus.Accepted,
        email: "miroslaw@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 123123123,
        pidNo: "AK474747",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
    {
        id: 3,
                imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

        firstName: 'Jan',
        lastName: "Nowak",
        status: UserStatus.Accepted,
        email: "jnow@gmail.com",

        rank: UserRank.Member,
        founder: true,
        phone: 1312452342,
        pidNo: "AR151515",
        pidIssuedBy: "PMRz",
        pesel: 86021799999,
        dob: new Date("17/02/1986"),
        pob: "Rzeszów",
        address: {
            street: "Zaciszna 5B/66",
            postal: '35-007',
            city: 'Rzeszów',
            state: "Podkarpackie"
        },
        occupation: "Web Dev",
    },
];