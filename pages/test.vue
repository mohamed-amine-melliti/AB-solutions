<script lang="ts" setup>

import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
import { useCounter } from '~/stores/counter'
import { useIdentity } from '~/stores/identity'

const counter = useCounter()
const identity = useIdentity()

definePageMeta({
  layout: 'page',
})



</script>

<template>
  <PageWrapper>
    <PageSection>
      <Alert
        type="success"
        title="Pour plus d’informations, veuillez remplir le formulaire suivant :"
        text="Horizon-Data
              TECHNOPOLE EL GHAZALA, 2083 Ariana, Tunisie"
      />
    </PageSection>

    <PageBody>

      <div id="form-container">
        <div id="form-inner-container">
          <!-- Sign up form -->
          <div id="sign-up-container">
            <h3>Nous Contactez </h3>
            <form>
              <label for="name">Nom : </label>
              <input type="text" name="name" id="name" placeholder="Name">

              <label for="email">Email :</label>
              <input type="email" name="email" id="email" placeholder="Email">


              <label for="email">Sujet  :</label>
              <input type="email" name="email" id="sujet" placeholder="Sujet">

              <label for="message">Message</label>
              <input type="description" name="message" id="message" >

              <div id="form-controls">
                <button type="submit">Envoyer</button>
              </div>

              <input type="checkbox" name="terms" id="terms">
            </form>
          </div>



          <!-- Lottie animation -->
          <div id="animation-container">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_aesgckiv.json"  background="transparent"  speed="1"  style="width: 520px; height: 520px;" loop autoplay></lottie-player>
          </div>
        </div>
      </div>

    </PageBody>

  </PageWrapper>
</template>

<style  scoped >

#message {
  width: 725px;
  height: 150px;
}

#form-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#form-inner-container {
  background-color: white;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 20px gainsboro;
}

#sign-up-container, #sign-in-container {
  padding: 60px 80px;
  width: 890px;
  display: inline-block;
}

form input:not(:last-of-type) {
  display: block;
  margin-bottom: 20px;
  border: 1px solid #E5E9F5;
  background-color: #F6F7FA;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
}

#form-controls {
  margin-bottom: 20px;
}


h3 {
  color: red;
  font-size: 150%;
  font-weight: 500;
}

label {
  color: #7369AB;
}

::placeholder {
  color: #C0C7DB;
  font-size: larger;
  letter-spacing: 1.2px;
}

#form-controls button {
  border: none;
  font-size: 120%;
}

#form-controls button:hover {
  cursor: pointer;
}

button[type="submit"] {
  padding: 16px 75px;
  background-color: #ED4B5E;
  border-radius: 10px;
  color: white;
}

button[type="submit"]:hover {
  background-color: #ff6678;
}

button[type="button"] {
  padding: 16px 0 16px 35px;
  background-color: transparent;
  color: #ED4B5E;
}

#terms {
  width: 0px;
  height: 0px;
  appearance: none;
  border: 2px solid #7369AB;
  border-radius: 4px;
  position: relative;
}

#terms:checked:after {
  content: '\2713';
  color: #7369AB;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 3px;
}

label[for="terms"] {
  display: inline-block;
  width: 80%;
  margin-left: 10px;
}

.termsLink {
  color: #EF7886;
  text-decoration: none;
}

.hide {
  display: none!important;
}

#animation-container {
  display: inline-block;
}

/* responsive display */

@media(max-width:1438px) {
  lottie-player {
    width: 300px!important;
  }
}

@media(max-width:1124px) {
  #animation-container {
    display: none;
  }

  #form-inner-container{
    display: flex;
    justify-content: center;
  }
}

@media(max-width: 684px) {
  #form-controls {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  button {
    width: 100%;
  }

  form input:not(:last-of-type) {
    width: 85%;
  }

  #toggleSignIn, #toggleSignUp {
    padding: 16px 75px;
  }

  #terms {
    width: 20px;
    height: 20px;
  }

  label[for="terms"] {
    display: inline-block;
    font-size: smaller;
  }
}
</style>