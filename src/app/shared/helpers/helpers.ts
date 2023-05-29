export function formatApiDate(type: 'date' | 'string', value: any): string {
  if (type === 'date') {
    const dateValue = new Date(value);
    const day = ('0' + dateValue.getDate()).slice(-2);
    const month = ('0' + (dateValue.getMonth() + 1)).slice(-2);
    const year = String(dateValue.getFullYear());

    return `${day}/${month}/${year}`;
  }

  if (type === 'string') {
    const [year, month, day] = value.split('-');

    return `${day}/${month}/${year}`;
  }

  return '';
}

export function formatApiToNativeDate(value: string): string {
  const [day, month, year] = value.split('/');

  return `${year}-${month}-${day}`;
}