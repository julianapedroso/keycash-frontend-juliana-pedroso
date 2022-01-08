export const goToHomePage = (history) => {
  history.push('/');
};

export const goToPropertyDetailsPage = (history, id) => {
  history.push(`/details/${id}`);
};

export const goToBack = (history) => {
  history.goBack();
};
