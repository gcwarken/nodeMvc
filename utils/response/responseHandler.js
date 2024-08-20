/**
 * back/utils/response/responseHandler.js
 * @description :: reponse status handler
 */

const responseStatus = require('./responseStatus');

module.exports = {
  success: (data = {}) => ({
    status: responseStatus.success,
    // message: data.message || 'Request executado com sucesso.',
    message: data.message || 'Request successful.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  failure: (data = {}) => ({
    status: responseStatus.failure,
    // message: data.message || 'Ocorreu um erro ao executar o request.',
    message: data.message || 'Request failed.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  noContent: (data = {}) => ({
    status: responseStatus.noContent,
    // message: data.message || 'Nenhum conteúdo para exibir',
    message: data.message || 'No content',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),  

  internalServerError: (data = {}) => ({
    status: responseStatus.serverError,
    // message: data.message || 'Erro interno do servidor.',
    message: data.message || 'Internal server error.',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  badRequest: (data = {}) => ({
    status: responseStatus.badRequest,
    // message: data.message || 'Parâmetros do request inválidos ou ausentes',
    message: data.message || 'Bad request',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  recordNotFound: (data = {}) => ({
    status: responseStatus.recordNotFound,
    // message: data.message || 'Valor não encontrado',
    message: data.message || 'Record not found',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  validationError: (data = {}) => ({
    status: responseStatus.validationError,
    // message: data.message || 'Validação dos parâmetros falhou',
    message: data.message || 'Parameter validation failed',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),

  unAuthorized: (data = {}) => ({
    status: responseStatus.unauthorized,
    // message: data.message || 'Sem autorização para executar o request',
    message: data.message || 'Unauthorized',
    data: data.data && Object.keys(data.data).length ? data.data : null,
  }),
};