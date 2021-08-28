<template>
  <section>
    <h1>Your Profile</h1>
    <hr />
    <br />
    <div>
      <p>
        <strong>Full Name:</strong> <span>{{ user.full_name }}</span>
      </p>
      <p>
        <strong>Username:</strong> <span>{{ user.username }}</span>
      </p>
      <p>
        <button @click="deleteAccount()" class="btn btn-primary">
          Delete Account
        </button>
      </p>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Profile',
  created: function() {
    return this.$store.dispatch('viewMe')
  },
  computed: {
    ...mapGetters({user: 'stateUser'})
  },
  methods: {
    ...mapActions(['deleteUser']),
    async deleteAccount() {
      try {
        await this.deleteUser(this.user.id)
        await this.$store.dispatch('logOut')
        await this.$router.push({name: 'Home'})
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped></style>
