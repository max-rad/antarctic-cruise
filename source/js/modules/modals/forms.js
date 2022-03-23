export class Forms {
  constructor() {
    this._modalForms = document.querySelectorAll('[data-form]');
    this._formName = null;

    this._documentClickHandler = this._documentClickHandler.bind(this);

    this._initForms();
  }

  _initForms() {
    if (this._modalForms.length) {
      document.addEventListener('click', this._documentClickHandler);
    }
  }

  _documentClickHandler(evt) {
    const target = evt.target;

    if (!target.closest('[data-form]')) {
      return;
    }

    this._formName = target.closest('[data-form]').dataset.form;

    if (!this._formName) {
      return;
    }

    this.validateForm();
  }

  validateForm(formName = this._formName) {
    const modalForm = document.querySelector(`[data-form="${formName}"]`);

    if (!modalForm) {
      return;
    }

    document.removeEventListener('click', this._documentClickHandler);

    let isStorageSupport = true;
    let storageName = '';
    let storagePhone = '';
    let storageEmail = '';

    try {
      storageName = localStorage.getItem('name');
      storagePhone = localStorage.getItem('phone');
      storageEmail = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    const nameField = modalForm.querySelector('[data-input="name-field"]');
    const phoneField = modalForm.querySelector('[data-input="phone-field"]');
    const emailField = modalForm.querySelector('[data-input="email-field"]');
    const checkboxField = modalForm.querySelector('[data-input="checkbox"]');

    if (storageName) {
      nameField.value = storageName;
    }

    if (storagePhone) {
      phoneField.value = storagePhone;
    }

    if (storageEmail) {
      emailField.value = storageEmail;
    }

    nameField.addEventListener('input', function () {
      const regName = /^[A-Za-zА-яа-я -']+$/;
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

    modalForm.addEventListener('submit', function (evt) {
      if (nameField.value === '') {
        evt.preventDefault();
        nameField.setCustomValidity('Name is required');
        nameField.reportValidity();
        nameField.focus();
      } else if (phoneField.value === '') {
        evt.preventDefault();
        phoneField.setCustomValidity('Phone is required');
        phoneField.reportValidity();
        phoneField.focus();
      } else if (emailField.value === '') {
        evt.preventDefault();
        emailField.setCustomValidity('Email is required');
        emailField.reportValidity();
        emailField.focus();
      } else {
        if (isStorageSupport) {
          localStorage.setItem('name', nameField.value);
          localStorage.setItem('phone', phoneField.value);
          localStorage.setItem('email', emailField.value);
        }
      }
    });
  }
}
