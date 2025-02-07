# Cookies and Local Storage

![cookies](https://i.imgur.com/jFhk6y7.png)

## Overview
**Cookies** and **Local Storage** are both used to _store data in a web browser_, but they serve different purposes and have distinct characteristics.

## Cookies
- Small pieces of **data** stored in the browser, _sent with every HTTP request_.
- Typically used for _session management_, _authentication_, and _tracking_.
- Can have _expiration dates_ and can be set to be accessible only **over secure connections**.
- **Limited in size** (around 4KB per cookie).

## Local Storage
- **Stores data persistently** in the browser _without being sent_ with HTTP requests.
- Typically used for _caching_, _user preferences_, and _offline applications_.
- **Larger storage capacity** (usually up to 5MB per domain).
- _Data persists_ even after the browser is closed.

## When to Use Each
| Feature         | Cookies | Local Storage |
|---------------|---------|--------------|
| Data Limit     | ~4KB    | ~5MB         |
| Sent with Requests | Yes | No |
| Expiration    | Can expire | Persists until cleared |
| Security      | Can be secure, but vulnerable to attacks | Less exposure, but accessible via JavaScript |

## Security Considerations
- **Cookies**: Use `HttpOnly`, `Secure`, and `SameSite` attributes to enhance security.
- **Local Storage**: Avoid storing sensitive data as it's accessible via JavaScript.

## Example Usage
### Setting a Cookie (JavaScript)
```javascript
// Set a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

### Using Local Storage (JavaScript)
```javascript
// Set an item
localStorage.setItem("username", "JohnDoe");

// Get an item
let user = localStorage.getItem("username");
```

## Conclusion
Use cookies for server-client interactions, like authentication, and local storage for storing larger or persistent client-side data.

