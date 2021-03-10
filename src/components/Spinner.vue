<template>
    <div class="spinner">
		  <div class="spinner__item"></div>
		  <div class="spinner__item"></div>
	  </div>		
</template>

<style scoped>
.spinner {
  width: 75%;
  margin: 100px auto 0;
  display: inline-block;
  position: relative;
  width: 400px;
  height: 400px;
}

.spinner__item {
  position: absolute;
  border: 8px solid #7a9aa1;
  opacity: 1;
  border-radius: 50%;
  animation: spinner 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.spinner__item:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes spinner {
  0% {
    top: 180px;
    left: 180px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 360px;
    height: 360px;
    opacity: 0;
  }
}
</style>