const BASE_URL = 'https://brasilapi.com.br/api';

export const consultarCNPJ = async (cnpj) => {
  try {
    const response = await fetch(`${BASE_URL}/cnpj/v1/${cnpj}`);
    if (!response.ok) throw new Error('Erro ao consultar o CNPJ');
    
    const data = await response.json();
    
    // Desmontando a requisição JSON em data
    const { nome_fantasia, uf, cep } = data;
    return { nome_fantasia, uf, cep };
  } catch (error) {
    console.error("Erro na API de CNPJ:", error);
    throw error;
  }
};

export const consultarCEP = async (cep) => {
  try {
    const response = await fetch(`${BASE_URL}/cep/v1/${cep}`);
    if (!response.ok) throw new Error('Erro ao consultar o CEP');
    
    const data = await response.json();

    const { state, city } = data;
    return { estado, cidade };
  } catch (error) {
    console.error("Erro na API de CEP:", error);
    throw error;
  }
};

export const consultarFeriados = async (ano) => {
  try {
    const response = await fetch(`${BASE_URL}/feriados/v1/${ano}`);
    if (!response.ok) throw new Error('Erro ao consultar os feriados');
    
    const data = await response.json();

    return data.map(({ date, name, type }) => ({ data, nome, tipo }));
  } catch (error) {
    console.error("Erro na API de Feriados:", error);
    throw error;
  }
};