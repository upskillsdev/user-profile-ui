export const getAvatarFallback = (name: string) => name.substring(0, 1);

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

export const formatNumber = (num: number) => {
  return Intl.NumberFormat(undefined, {
    maximumFractionDigits: 3,
  }).format(num);
};
