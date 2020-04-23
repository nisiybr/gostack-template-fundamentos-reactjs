const formatDate = (value: Date): string => {
  const date = new Date(value);
  const dateFormatted = Intl.DateTimeFormat('pt-BR').format(date).toString();
  return dateFormatted;
};

export default formatDate;
