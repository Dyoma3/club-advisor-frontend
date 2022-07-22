<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  margin: 0px;
  font-family: $fontFamily;
}
h1 {
	font-size: 28px;
	font-weight: 500;
}
input {
	padding: 8px;
	border-style: solid;
	border-width: 1px;
	border-color: #dadada;
	border-radius: 5px;
	width: 250px;
}
input:focus {
  outline-color: green;
  border-color: green;
}
</style>