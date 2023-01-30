# nvalid

<br />
<img src="./.github/logo.svg" alt="Caricati.io - Design System" width="400">

A lightweight validation library written in javascript.

<p>
  <!-- <a href="https://caricati-ds.netlify.app/">
    <img src="https://img.shields.io/badge/weiste-demo-205EFC" alt="demo">
  </a> -->
  <a href="https://www.npmjs.com/package/@caricati/nvalid">
    <img src="https://img.shields.io/badge/package-npm-FA9703" alt="npm">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-292F3A" alt="MIT">
  </a>
  <img src="https://github.com/caricati-io/nvalid/actions/workflows/main.yml/badge.svg" alt="tests and build">
</p>

<hr />

## To install
```
npm install @caricati/nvalid --save
```

## Using
```
import { isEmail } from '@caricati/nvalid'

isEmail('invalid email@here') // false
isEmail('name@email.com') // true
```
