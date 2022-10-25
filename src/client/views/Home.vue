/* eslint-disable vue/no-unused-components */
<template>
  <div class="home">
    <HeadSection></HeadSection>
    <Navbar></Navbar>
    <SpicialItems></SpicialItems>
    <Services></Services>
    <Contact></Contact>
    <FootSection></FootSection>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import HeadSection from '../components/HeadSection.vue'
import SpicialItems from '../components/SpicialItems.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
import FootSection from '../components/FootSection.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    HeadSection,
    SpicialItems,
    Services,
    Contact,
    FootSection
  }
}
</script>