const validateForm = () => {
  const nameField = document.querySelector('[data-input="name-field"]');
  const phoneField = document.querySelector('[data-input="phone-field"]');
  const emailField = document.querySelector('[data-input="email-field"]');
  const checkboxField = document.querySelector('[data-input="checkbox"]');
  const submitForm = document.querySelector('[data-form="submit"]');

  nameField.addEventListener('input', function () {
    const regName = /^[А-ЯЁа-яё]+$/;
    let invalidMessage = '';
    nameField.setCustomValidity('');
    const name = nameField.value.trim();

    if (name === '') {
      invalidMessage = 'Name is required';
    } else if (!regName.test(name)) {
      invalidMessage = 'Invalid name';
    }

    if (invalidMessage.length > 0) {
      nameField.setCustomValidity(invalidMessage);
    }

    nameField.reportValidity();
  });

  phoneField.addEventListener('input', function () {
    const regPhone = /^\+?\d{11}$/;
    let invalidMessage = '';
    phoneField.setCustomValidity('');
    const phone = phoneField.value.trim();

    if (phone === '') {
      invalidMessage = 'Phone is required';
    } else if (!regPhone.test(phone)) {
      invalidMessage = 'Invalid phone';
    }

    if (invalidMessage.length > 0) {
      phoneField.setCustomValidity(invalidMessage);
    }

    phoneField.reportValidity();
  });

  emailField.addEventListener('input', function () {
    const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let invalidMessage = '';
    emailField.setCustomValidity('');
    const email = emailField.value.trim();

    if (email === '') {
      invalidMessage = 'Email is required';
    } else if (!regEmail.test(email)) {
      invalidMessage = 'Invalid email';
    }

    if (invalidMessage.length > 0) {
      emailField.setCustomValidity(invalidMessage);
    }

    emailField.reportValidity();
  });

  checkboxField.addEventListener('change', function () {
    let invalidMessage = '';
    checkboxField.setCustomValidity('');

    if (!checkboxField.checked) {
      invalidMessage = 'Consent required';
    }

    if (invalidMessage.length > 0) {
      checkboxField.setCustomValidity(invalidMessage);
    }

    checkboxField.reportValidity();
  });

  submitForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (nameField.value === '') {
      nameField.setCustomValidity('Name is required');
      nameField.reportValidity();
      nameField.focus();
    } else if (phoneField.value === '') {
      phoneField.setCustomValidity('Phone is required');
      phoneField.reportValidity();
      phoneField.focus();
    }
  });
};

export {validateForm};