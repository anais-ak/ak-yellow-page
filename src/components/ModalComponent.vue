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
            src="data:image/jpeg;base64,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"
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