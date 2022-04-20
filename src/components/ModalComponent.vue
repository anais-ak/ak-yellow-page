<script>
export default {
  props: {
    show: Boolean,
    profile: Object,
  },
  methods: {
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button
                class="modal-default-button"
                @click="$emit('close')"
              >X</button>
            <h2 class="font-bold text-xl uppercase tracking-wide">{{ profile.name }}</h2>
          </div>

          <img
            class="w-full"
            :src="profile.picture_url"
            alt="Profile Picture"
          />

          <div class="modal-body">
            <table class="border-collapse table-auto w-full text-sm text-left">
              <tbody>
                <tr>
                  <td>Job title</td>
                  <td class="font-bold text-lg">{{ profile.title }}</td>
                </tr>
                <tr>
                  <td>Joined</td>
                  <td class="font-bold text-lg">{{ profile.company_birthday }}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td class="font-bold text-lg">{{ profile.location }}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td class="font-bold text-lg">{{ profile.email }}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td class="font-bold text-lg">{{ profile.phone }}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td class="font-bold text-lg">{{ profile.phone }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>