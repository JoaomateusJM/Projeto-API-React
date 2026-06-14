export function mapCnpj(data) {
  return {
    nomeFantasia: data.nome_fantasia,
    uf: data.uf,
    cep: data.cep
  };
}