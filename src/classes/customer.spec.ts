import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf for individual customer', () => {
    const sut = createIndividualCustomer('Ivano', 'Gonçalves', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Ivano');
    expect(sut).toHaveProperty('lastName', 'Gonçalves');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createIndividualCustomer('Ivano', 'Gonçalves', '111.111.111-11');
    expect(sut.getName()).toBe('Ivano Gonçalves');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa', '111.111.111-11');
    expect(sut).toHaveProperty('name', 'Empresa');
    expect(sut).toHaveProperty('cnpj', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Empresa', '111.111.111-11');
    expect(sut.getName()).toBe('Empresa');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});
