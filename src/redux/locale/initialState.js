export default {
  activeLanguage: navigator.language.slice(0, 2),
  country: null,
  translations: {
    en: {
      messages: {
        'form.validation.error.api': 'Invalid entry on form.',
        'form.validation.error.required': 'Required',
        'form.validation.error.bool.required': 'Required',
        'form.validation.error.email': 'EMAIL_VALUE is not an email.',
        'form.validation.error.contactus.name': 'That name uses invalid characters. Please try again.',
        'form.validation.error.contactus.textarea': 'That message uses invalid characters. Please try again.',
        'form.validation.error.contactus.firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.alpha': 'String should contain only letters (a-zA-Z).',
        'form.validation.error.numeric': 'Postal code should only contain numbers (0-9).',
        'form.validation.error.us-zip': 'U.S. Zip Codes must be in (12345) or (12345-6789) format.',
        'form.validation.error.japan-postal': 'Japanese postal codes must be in format (123-4567) or (1234567) and 7 digits long.',
        'form.validation.error.phone-japanLength': 'Not a valid phone number. Acceptable Format: "01234567890" Either 10 digits (Landline) or 11 digits (Cell).',
        'form.validation.error.phone-startWithZero': 'Phone number should start with "0".',
        'form.validation.error.city': 'Not a valid city name.',
        'form.validation.error.ccName': 'That name uses invalid characters. Please try again.',
        'form.validation.error.ccName-firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.contactUsName': 'That name uses invalid characters. Please try again.',
        'form.validation.error.contactUsTextArea': 'That message uses invalid characters. Please try again.',
        'form.validation.error.contactUs-firstLast': 'You must include a First name & a Last name.',
        'form.validation.error.ccNumber': 'Credit Card numbers must be 16 digits & can only have format (1234567891234567) or (1234-5678-9123-4567).',
        'form.validation.error.ccCvn': 'Credit Card CVN numbers should only be 3 digits.',
        'form.validation.error.password': 'Passwords should be equal.',
        'form.validation.error.postalApi': 'Postal code is invalid. See error message for details. Focus to clear.',

        'contactus.header': 'Contact Us',
        'contactus.breadcrumb.paths1': 'Home',
        'contactus.breadcrumb.lastcrumb': 'Contact Us',
        'contactus.label.name': 'Name',
        'contactus.label.email': 'Email',
        'contactus.label.message': 'Message',
        'contactus.input.placeholder.name': 'Enter your name',
        'contactus.input.placeholder.email': 'Enter your email',
        'contactus.input.placeholder.message': 'What would you like to say?',
        'contactus.checkbox.label': 'Send a copy of this email to yourself',
        'contactus.button.label.send': 'Send',
        'contactus.button.label.submitting': 'Submitting...',
        'contactus.button.label.success': 'Success',
        'contactus.button.error.label': 'Error',
      },
    },
    ja: {
      messages: {
        'form.validation.error.api': 'フォームの入力が無効です。',
        'form.validation.error.required': '必須',
        'form.validation.error.bool.required': '必須',
        'form.validation.error.email': 'EMAIL_VALUEは有効なメールではありません。',
        'form.validation.error.contactus.name': 'That name uses invalid characters. Please try again.',
        'form.validation.error.contactus.textarea': 'That message uses invalid characters. Please try again.',
        'form.validation.error.contactus.firstLast': 'You must include a First name & a Last name.',

        'contactus.header': 'お問い合わせ',
        'contactus.breadcrumb.paths1': '自宅',
        'contactus.breadcrumb.lastcrumb': 'お問い合わせ',
        'contactus.label.name': '名前',
        'contactus.label.email': '電子メイル',
        'contactus.label.message': 'メッセージ',
        'contactus.input.placeholder.name': 'あなたの名前を入力してください',
        'contactus.input.placeholder.email': 'メールアドレスを入力してください',
        'contactus.input.placeholder.message': 'あなたは何を言いたいのですか？',
        'contactus.checkbox.label': 'あなたにこのメールのコピーを送ってください',
        'contactus.button.label.send': '送る',
        'contactus.button.label.submitting': 'プロセッシング。。。',
        'contactus.button.label.success': 'サクセス',
        'contactus.button.error.label': 'エラー',
      },
    },
  },
};
