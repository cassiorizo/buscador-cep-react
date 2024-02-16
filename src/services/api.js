import axios from "axios";

// Criando uma instância do axios com a base URL do serviço ViaCEP
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})

export default api;
