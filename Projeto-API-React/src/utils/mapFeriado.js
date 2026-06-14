export function mapFeriado(data) {
  return {
    data: data.date,
    nome: data.name,
    tipo: data.type
  };
}