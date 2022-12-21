
export const createDoc = async (module: any, createData: any): Promise<any> => {
  const createDoc = module.create(createData);
  return createDoc;
};
