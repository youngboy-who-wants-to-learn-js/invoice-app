import renderForm from "./renderForm";
import renderHeader from "./renderHeader";

const renderUser = (user) => {
  renderHeader(user);
  renderForm(user);
};

export default renderUser;
