# crab-role-based-acl

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/crab-role-based-acl.svg?style=flat-square
[npm-url]: http://npmjs.org/package/crab-role-based-acl
[download-image]: https://img.shields.io/npm/dm/crab-role-based-acl.svg?style=flat-square
[download-url]: https://npmjs.org/package/crab-role-based-acl

## Install

[![crab-role-based-acl](https://nodei.co/npm/crab-role-based-acl.png)](https://npmjs.org/package/crab-role-based-acl)

```
npm install --save crab-role-based-acl
```

## Features

```
- Init JWT authentication
- Role base access authorization support
- Express middleware support
```

## Install

- Install crab-role-based-acl

```
npm install crab-role-based-acl
```

## How it work

## Middlewares

```
import { roleBasedAuthorization, validAuthentication, validSupportOrigin } from "crab-role-based-acl";
```

### 1. `validAuthentication`

Using json web token to basic authentication.

_valid request_:

```
headers:
    {
        "Authorization": {jwtToken}
    }
```

### 2. `validSupportOrigin`

Using json web token to fitlering token support request origin.

_valid token_:

```
token payload: {
    'allowed-origins': [listSupportOrigin]
}
```

### 3. `roleBasedAuthorization`

Using role-based access to authorization

_used_:

```
roleBasedAuthorization(allowRolesString)
```

_valid allow roles string_:

- role name with sso sever defines
- multiple role names with `","`
- allow all roles with `allowRolesString = "*"`

## LICENSE

MIT
