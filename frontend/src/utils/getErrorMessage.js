const getErrorMessage = msg => {
  switch (msg) {
    case "User don't exists": {
      return "Usuario não existe";
    }
    case "User already exists": {
      return "Usuario ja cadastrado";
    }
    case "fail to sign in": {
      return "Senha Incorreta";
    }
    case "Network Error": {
      return "Erro de Conexão";
    }
    default: {
      return msg;
    }
  }
};
export default getErrorMessage;
