const BASE_URL = "https://brasilapi.com.br/api";

export async function consultarCEP(cep) {
  const response = await fetch(`${BASE_URL}/cep/v1/${cep}`);

  if (!response.ok) {
    throw new Error("Erro ao consultar CEP");
  }

  return response.json();
}

export async function consultarCNPJ(cnpj) {
  const response = await fetch(`${BASE_URL}/cnpj/v1/${cnpj}`);

  if (!response.ok) {
    throw new Error("Erro ao consultar CNPJ");
  }

  return response.json();
}

export async function consultarFeriados(ano) {
  const response = await fetch(`${BASE_URL}/feriados/v1/${ano}`);

  if (!response.ok) {
    throw new Error("Erro ao consultar feriados");
  }

  return response.json();
}