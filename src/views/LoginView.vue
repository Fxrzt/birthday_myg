<template>
  <div class="flex items-center justify-center align-middle h-screen">
    <section class="bg-blue-950">
        <!-- space-y-4 จะเพิ่ม margin-top ให้กับทุก element ลูกตัวที่สองลงไปเรื่อย ๆ -->
        <div class="p-6 space-y-6 border-2 border-solid border-indigo-500 ">
            <h1 class="text-xl font-bold text-white font_Mali">
                Sign in to your gift box
            </h1>
            <form class="space-y-4 md:space-y-6 border-2 border-solid border-red-500" action="#">
                <div>
                    <label for="email" class="block text-white font_Mali">Your heart</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5 font_Mali" placeholder="name@company.com" required="">
                </div>
                <div>
                    <label for="password" class="block text-white font_Mali">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-200 focus:border-sky-200 block w-full p-2.5" required="">
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
export default {
  name: 'LoginView'
}
</script>

<style>
body{
    background-color: #ee9ca7;
    /* #ffdde1 */
}
.font_Lobster_Two{
    font-family: 'Lobster Two', sans-serif;
}

.font_Mali{
    font-family: 'Mali', sans-serif;
}
.font_Sarabun{
    font-family: 'Sarabun', sans-serif;
}
</style>
