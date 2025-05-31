<template>
  <div class="flex items-center justify-center align-middle h-screen bg_pink">
    <section class="bg-blue-950 rounded-xl">
        <!-- space-y-4 จะเพิ่ม margin-top ให้กับทุก element ลูกตัวที่สองลงไปเรื่อย ๆ -->
        <div class="p-6 space-y-6 ">
            <h1 class="text-xl font-bold text-white font_Mali">
                Sign in to your gift box
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
                <div>
                    <label for="email" class="block text-white font_Mali">Your heart</label>
                    <input type="email" name="email" id="email" v-model="state.user_name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5 font_Mali" placeholder="name@company.com" required="">
                </div>
                <div>
                    <label for="password" class="block text-white font_Mali">Password</label>
                    <input type="password" name="password" id="password" v-model="state.pass_word" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5" required="">
                </div>
                <!-- focus:ring-4 ขอบเงาวงกลม -->
                <button type="submit" class="w-full text-black bg-sky-300 hover:bg-sky-200
                focus:ring-4 focus:outline-none focus:ring-primary-300
                font-medium rounded-lg text-sm px-5 py-2.5 text-center
                font_Mali">Sign in</button>
            </form>
        </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'LoginView',
  data () {
    return {
      loginSuccess: false,
      loginTried: false,
      errorMessage: 'username หรือ password ผิด กรุณากรอกใหม่อีกครั้งครับ',
      state: {
        user_name: '',
        pass_word: ''
      },
      pass_through: {
        Puser_name: 'phanita@birth',
        Ppass_word: '1234'
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log('submit click!')
      console.log(`Username:${this.state.user_name} Password:${this.state.pass_word}`)
      console.table({ user_name: this.state.user_name, pass_word: this.state.pass_word })
      this.loginTried = true
      this.loginSuccess =
      (this.state.user_name === this.pass_through.Puser_name &&
          this.state.pass_word === this.pass_through.Ppass_word
      )
      if (this.loginSuccess === true) {
        Swal.fire({
          title: 'Yes! I\'m Yours',
          icon: 'success'
        })
          .then(() => {
            if (this.loginSuccess === true) {
              this.$router.push('/welcome')
            }
          })
          .catch(() => {
            Swal.fire({
              title: 'แจ้งเตือน',
              text: this.errorMessage,
              icon: 'error'
            })
          })
      } else {
        Swal.fire({
          title: 'แจ้งเตือน',
          text: this.errorMessage,
          icon: 'error'
        })
      }
      console.log(`LoginTried:${this.loginTried} loginSuccess:${this.loginSuccess}`)
    }
  }
}
</script>

<style scoped>
/* body{
  #ffdde1
  } */
.bg_pink{
  background-color: #ee9ca7;
}
</style>
