export const goToHomePage = (history) => {
  history.push('/');
};

export const goToPropertyDetailsPage = (history, id) => {
  history.push(`/${id}`);
};

export const goToBack = (history) => {
  history.goBack();
};
