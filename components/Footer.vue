<template>
  <!-- Footer -->
  <footer class="text-center footer-area">
    <!-- Copyright -->
    <div class="text-center p-4" style="color: #606060">
      © {{ $moment().format('YYYY') }} DIU. All rights Reserved

      | Developed by:
      <a class="text-reset fw-bold" href="#" target="_blank">IT-Team, DIU</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>

export default {
  name: "Footer",
}
</script>

<style scoped>
.footer-area {
  background: #F5F5F5;
}
</style>
