export interface User {
    id: number,
    firstName: string,
    lastName: string,
    address: {
        street: string,
        city: string,
        state: string
    }
}

export const ELEMENT_DATA: User[] = [
    {id: 1, firstName: 'Hydrogen', lastName: 'H', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 2, firstName: 'Helium', lastName: 'He', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 3, firstName: 'Lithium',           lastName: 'Li', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 4, firstName: 'Beryllium',         lastName: 'Be', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 5, firstName: 'Boron',         lastName: 'B', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 6, firstName: 'Carbon',             lastName: 'C', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 7, firstName: 'Nitrogen',           lastName: 'N', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 8, firstName: 'Oxygen',             lastName: 'O', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 9, firstName: 'Fluorine',           lastName: 'F', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
    {id: 10, firstName: 'Neon',          lastName: 'Ne', address: {
        street: 'Zaciszna',
        city: 'Rzeszów',
        state: 'Podkarpackie'
    }},
  ];