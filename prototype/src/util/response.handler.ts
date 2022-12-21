// import { encryptBody } from '../util/Utility';

export const sendSuccess = (
  errorBit: boolean,
  msg: any,
  data: any,
  status: any = 200,
) => {
  return { error: errorBit, message: msg, data, status };
};
export const sendError = (errorBit: boolean, msg: any, status: any = 400) => {
  return { error: errorBit, message: msg, status, data: null };
};
export const failResponse = async (
  errorBit: boolean,
  msg: any,
  response?: any,
  status: any = 400,
) => {
  response
    .status(400)
    .send({ error: errorBit, message: msg, status, data: null });
};
export const successResponse = async (
  message: string,
  data?: any,
  response?: any,
  status: any = 200,
) => {
  response.status(status).send({
    status,
    error: false,
    message,
    data,
  });
};
