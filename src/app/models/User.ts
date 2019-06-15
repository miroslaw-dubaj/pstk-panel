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