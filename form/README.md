# Form

![form](https://i.imgur.com/5fHbs40.png)

This repo contains all files needed fo the completion of **Holberton specialization projet _Form_**.

# Table of content:
1. [What are Forms](## What are Forms?)
2. [How to create a Form](## How to create a Form)
3. [Accessibility and some other Good Practices](## Accessibility and some other Good Practices)
4. [Full Example](## Full Example)

## What are Forms?
HTML forms are a fundamental part of web development, allowing users to submit data to a server. Forms are used for a variety of purposes, such as user registration, login, feedback, surveys, and more.

## How to create a Form
A typical **HTML form** uses the `<form>` element, which serves as a container for input elements :
```
<form action="submit-form.html" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Submit</button>
</form>
```

### The `action` & `method` attributes:
In the example above, `<form></form>` tags have the `action`.
This tag is used to specify where the form data is sent when the form is submitted.
The URL specified as an argument for the action attribute (ie: `action="/submit-form.html"`) can be an absolute URL that points to another website
or a relative URL that points to a file within a web site.


### The `input` tag:
This tag is the most important element of a form, as it is used to specify an input field in which the user can enter data.
As this tag will create the field, its appearance depends on the `type` attribute.

### Common `<input type="">` attributes:
- **Text Input** creates a basic single-line text fields.
```
<input type="text" name="username">
```

- **Password Input** creates a secured field for a user to enter their password.
The password type replace each character entered in its fields with a symbol (usually asterisk "*").
```
<input type="password" name="password">
```

- **Email Input** is used to let the user enter and edit an email address.
The input value is automatically validated to ensure that it's either empty or a properly-formatted email address before the form can be submitted.
```
<input type"email" name="email">
```

- **Number Input** is used to let the user enter a number.
The input value is automatically validated so it rejects non-numerical values.
```
<input type="number" name="number">
```

- **Checkbox Input** are rendered as boxes to be checked (ticked) when activated.
```
<input type="checkbox" name="subscribe" value="yes">
```

- **Radio Input** are, generally, a collection of buttons describing a set of related options.
Only one radio button in a given group can be selected at the same time.
```
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
<input type="radio" name="gender" value"other"> Other
```

- **Submit Input** are usually rendered as buttons. When a click event occurs, the form is submitted to the server.
It is often associated with a `value=""` attribute that contains a string displayed as the button's label.
```
<input type="submit" value="Send Request" />
```
or
```
<button type="submit">Submit</button>
```

## Accessibility and some other Good Practices :
In order to improve [accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/), security and overall user experience:
- It is highly recommended to use the `<label>` tag. It will provide a short description of what kind of data is expected in the related input field.
- Provide descriptive text for form elements using the `placeholder=""` or `aria-label` attributes.
- It's best, especially for long forms, to group related inputs using the `<fieldset>` and `<legend>` elements.
- When needed and possible, use built-ins HTML validation attributes (`min`, `max`, `min_length`, `max_length`, `required` or `pattern`, amongst others) to secure and sanitize data sent through your forms.
- Always use [HTTPS](https://aws.amazon.com/fr/compare/the-difference-between-https-and-http/#:~:text=HTTP%20messages%20are%20plaintext%2C%20which,the%20data%20over%20the%20network.) to transmit your forms data.
- Add a layer of security and validation server-side to prevent attacks like [SQL injections](https://portswigger.net/web-security/sql-injection).
- Keep your forms as short as possible to enhance UX.
- Group your fields logically with fieldset when possible and logic to do so

## Full Example
Here is a full example that showcase everything we discussed above:
```
<form action="/submit-form" method="post">
  <fieldset>
    <legend>Personal Information</legend>

    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120" required>

    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>

    <label>
      <input type="checkbox" name="subscribe" value="yes"> Subscribe to newsletter
    </label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

Thank you for reading :)