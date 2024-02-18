//uso de expressões regulares para validações
describe('Match regular expression', () => {
  it('basic', () => {
    expect('developer').toMatch(/\w+/)
    expect('(11)91234-5678').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
  })
})