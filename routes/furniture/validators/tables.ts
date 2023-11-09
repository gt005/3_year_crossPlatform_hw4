import { body, ValidationChain } from 'express-validator';


export const tableValidationRules = (): Array<ValidationChain> => {
  return [
    body('size').isString(),
    body('material').isString(),
    body('color.name').isString(),
    body('color.hexCode').isString(),
    body('quantityInStock').optional().isInt({ min: 0 }),
    body('cost').isFloat({ min: 0 }),
    body('description').optional().isString(),
    body('image').optional().isString()
  ];
};
