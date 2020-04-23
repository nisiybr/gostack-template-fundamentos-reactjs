const formatValue = (value: number): string => {
  const formattedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .toString();
  console.log(formattedValue);
  return formattedValue;
};

export default formatValue;
