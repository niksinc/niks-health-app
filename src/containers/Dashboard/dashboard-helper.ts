import axios from 'axios';


export const getAllData: any = async () => {
  const response = await axios.get('http://localhost:3400/mydata');
  // if (response.error) {
  //   console.error('error occured!!!');
  //   return [];
  // }
  // tslint:disable-next-line: no-console
  console.log('res', response.data);

  return response.data.data;
};


export const getDecimalNumber = (numberInput: number, point: number = 1) => {
  const floatNumber = Math.round(numberInput * 100) / 100;
  const result = parseFloat(floatNumber + '').toFixed(point);
  return result;
};
