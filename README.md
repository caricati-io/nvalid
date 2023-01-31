<img src="./.github/logo.svg" alt="Caricati.io - Design System" width="406">
<p>
  <a href="https://www.npmjs.com/package/@caricati/nvalid">
    <img src="https://img.shields.io/badge/package-npm-FA9703" alt="npm">
  </a>
  <img src="https://github.com/caricati-io/nvalid/actions/workflows/main.yml/badge.svg" alt="tests and build">
  <a href="https://codecov.io/gh/caricati-io/nvalid" > 
 <img src="https://codecov.io/gh/caricati-io/nvalid/branch/main/graph/badge.svg?token=9WTD73ZWKZ"/> 
 </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-292F3A" alt="MIT">
  </a>
</p>
<br />


# nvalid
A lightweight validation library written in JavaScript.

## Install

Install **nvalid** dependency using node package manager:

```
npm i @caricati/nvalid
```

## Using

Use only a fragment from the library:

```
import { isEmail } from '@caricati/nvalid'

isEmail('invalid email@here') // false
isEmail('name@email.com') // true
```

Use a collection of validations:

```
import validate from '@caricati/nvalid'

validate('user@email.com').email().required() // passed
validate('Mr. Caricati').string().required() // passed

validate('my ip').ip() // handle exception
validate('').required() // handle exception
```
