export const showPaymentPopUp = (element) => {
  const popUpTemplate = document.querySelector("#payment-popup-notice");
  const clone = popUpTemplate.content.cloneNode(true);
  const popUp = document.querySelector("#payment-popup");
  if (!popUp) {
    element.append(clone);
  }
};

export const hidePaymentPopUp = () => {
  const popUp = document.querySelector("#payment-popup");
  if (popUp) {
    popUp.remove();
  }
};

export const showTemplate = (templateId, templateContainerId) => {
  const template = document.querySelector(templateId);
  const container = document.querySelector(templateContainerId);
  const clone = template.content.cloneNode(true);

  container.append(clone);
};

export const hideTemplate = (containerId) => {
  const container = document.querySelector(containerId);
  container.remove();
};

export const cx = {
  add: (elem, className) => {
    if (!elem.classList.contains(className)) {
      elem.classList.add(className);
    }
  },
  remove: (elem, className) => {
    if (elem.classList.contains(className)) {
      elem.classList.remove(className);
    }
  },
};
