export function mapCep(data) {
  return {
    cep: data.cep,
    city: data.city,
    state: data.state,
    street: data.street,
    neighborhood: data.neighborhood
  };
}